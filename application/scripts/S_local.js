$(document).ready(init_local);
/******************************************************************************************************************************************************************************/
function init_local()
{
    $('#tbt-local').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-local').on('click', fnc_reset_modall);
    $('#btn-insert-local').on('click',fnc_insert_local);
    $('#btn-update-local').on('click',fnc_update_local);
    $(document).on('click','.btn-update-local', fnc_get_local);
    $(document).on('click','.btn-delete-local', fnc_delete_local);
    fnc_list_local();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modall()
{
    $('#lbl-local').html('Nuevo local');
    $('#btn-update-local').hide() 
    $('#btn-insert-local').show()
    $('#btn-update-local').attr('data-idlocal', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_local()
{
    $.getJSON("list_local", function (data){ 

    $('#tbt-local').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-local').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-local" data-idlocal="'+data[i].IDLocal+'" data-toggle="modal" data-target="#Modal-local"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-local" data-idlocal="'+data[i].IDLocal+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_local ()
{
    var data={};    
    data.txt_descripcion = $('#txt-local').val();
     
    $.ajax({
        type: "POST",
        url: "insert_local",
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
            $('#Modal-local').modal('hide');
            fnc_list_local();
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
function fnc_get_local()
{
    var data={};
    data.ID_Local  = parseInt($(this).attr('data-idlocal'));
    $.ajax({
        type: "POST",
        url: "get_local",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-local').html('Editar local');
            $('#btn-update-local').show() 
            $('#btn-insert-local').hide() 
            $('#txt-local').val(resp.Descripcion);
            $('#btn-update-local').attr('data-idlocal', resp.IDLocal);
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
function fnc_update_local()
{   
    var data={};
    data.ID_Local          = parseInt($('#btn-update-local').attr('data-idlocal'));
    data.txt_descripcion       = $('#txt-local').val();

    $.ajax({
        type: "POST",
        url: "update_local",
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
            $('#Modal-local').modal('hide');
            fnc_list_local();
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
function fnc_delete_local()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Local  = parseInt($(this).attr('data-idlocal'));

        $.ajax({
            type: "POST",
            url: "delete_local",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_local();

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