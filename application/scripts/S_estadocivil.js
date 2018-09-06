$(document).ready(init_estadocivil);
/******************************************************************************************************************************************************************************/
function init_estadocivil()
{
    $('#tbt-estadocivil').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-Estadocivil').on('click', fnc_reset_modalec)
    $('#btn-insert-estadocivil').on('click',fnc_insert_estadocivil);
    $('#btn-update-estadocivil').on('click',fnc_update_estadocivil);
    $(document).on('click','.btn-update-estadocivil', fnc_get_estadocivil);
    $(document).on('click','.btn-delete-estadocivil', fnc_delete_estadocivil);
    fnc_list_estadocivil();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalec()
{
    $('#lbl-estadocivil').html('Nueva estadocivil');
    $('#btn-update-estadocivil').hide() 
    $('#btn-insert-estadocivil').show()
    $('#btn-update-estadocivil').attr('data-idestadocivil', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_estadocivil()
{
    $.getJSON("list_estadocivil", function (data){ 

    $('#tbt-estadocivil').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-estadocivil').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-estadocivil" data-idestadocivil="'+data[i].IDCivil+'" data-toggle="modal" data-target="#Modal-estadocivil"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-estadocivil" data-idestadocivil="'+data[i].IDCivil+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_estadocivil ()
{
    var data={};    
    data.txt_descripcion = $('#txt-estadocivil').val();
     
    $.ajax({
        type: "POST",
        url: "insert_estadocivil",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function (resp)
        {
            
        },
        success: function (resp)                                                                                                                        
        {  
            alert("Guardado correctamente");
            $('#Modal-estadocivil').modal('hide');
            fnc_list_estadocivil();
        },
        complete: function () 
        {     
        },
        error: function(resp)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_get_estadocivil()
{
    var data={};
    data.ID_Civil  = parseInt($(this).attr('data-idestadocivil'));
    $.ajax({
        type: "POST",
        url: "get_estadocivil",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp)
        {
            $('#lbl-estadocivil').html('Editar Estado Civil');
            $('#btn-update-estadocivil').show() 
            $('#btn-insert-estadocivil').hide() 
            $('#txt-estadocivil').val(resp.Descripcion);
            $('#btn-update-estadocivil').attr('data-idestadocivil', resp.IDCivil);
        },
        complete: function () 
        {
            
        },
        error: function(resp)
        {
        }
    });
}
/***********************************************************************************************************************************************************/
function fnc_update_estadocivil()
{   
    var data={};
    data.ID_Civil        = parseInt($('#btn-update-estadocivil').attr('data-idestadocivil'));
    data.txt_descripcion       = $('#txt-estadocivil').val();

    $.ajax({
        type: "POST",
        url: "update_estadocivil",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {  
            alert('Se editó correctamente');
            $('#Modal-estadocivil').modal('hide');
            fnc_list_estadocivil();
        },
        complete: function () 
        {           
        },
        error: function(resp)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_delete_estadocivil()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Civil  = parseInt($(this).attr('data-idestadocivil'));

        $.ajax({
            type: "POST",
            url: "delete_estadocivil",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_estadocivil();

            },
            complete: function () 
            {    
                
            },
            error: function(resp)
            {
            }
        });
         alert('Se eliminó correctamente');
    }
}



/*FUNCION CON CONFIRMACION MODAL*/
/*function deleteEPostVenta() {
    var data = {};
    data.id_epostventa = parseInt($(this).attr('data-id'));
    $('#myModalLabel').text('¿Desea eliminar este registro?');

    $('#modal-confirmacion').modal({
        backdrop: 'static',
        keyboard: false
    })
    .one('click', '#modal-btn-aceptar2', function(e) {        
        $.ajax({
            type: "POST",
            url: "deleteEPostVenta",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function() {},
            success: function(resp) {
                showSuccess('Se eliminó exitosamente');
                $('#modal-confirmacion').modal('hide');
                $('#btn-recuperar-almacen2').trigger('click');
            }
        });
    });
}*/