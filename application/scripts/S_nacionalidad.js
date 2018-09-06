$(document).ready(init_nacionalidad);
/******************************************************************************************************************************************************************************/
function init_nacionalidad()
{
    $('#tbt-nacionalidad').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-nacionalidad').on('click', fnc_reset_modaln)
    $('#btn-insert-nacionalidad').on('click',fnc_insert_nacionalidad);
    $('#btn-update-nacionalidad').on('click',fnc_update_nacionalidad);
    $(document).on('click','.btn-update-nacionalidad', fnc_get_nacionalidad);
    $(document).on('click','.btn-delete-nacionalidad', fnc_delete_nacionalidad);
    fnc_list_nacionalidad();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modaln()
{
    $('#lbl-nacionalidad').html('Nueva Nacionalidad');
    $('#btn-update-nacionalidad').hide() 
    $('#btn-insert-nacionalidad').show()
    $('#btn-update-nacionalidad').attr('data-idnacionalidad', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_nacionalidad()
{
    $.getJSON("list_nacionalidad", function (data){ 

    $('#tbt-nacionalidad').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-nacionalidad').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-nacionalidad" data-idnacionalidad="'+data[i].IDNacionalidad+'" data-toggle="modal" data-target="#Modal-nacionalidad"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-nacionalidad" data-idnacionalidad="'+data[i].IDNacionalidad+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_nacionalidad ()
{
    var data={};    
    data.txt_descripcion = $('#txt-nacionalidad').val();
     
    $.ajax({
        type: "POST",
        url: "insert_nacionalidad",
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
            $('#Modal-nacionalidad').modal('hide');
            fnc_list_nacionalidad();
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
function fnc_get_nacionalidad()
{
    var data={};
    data.ID_Nacionalidad  = parseInt($(this).attr('data-idnacionalidad'));
    $.ajax({
        type: "POST",
        url: "get_nacionalidad",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-nacionalidad').html('Editar Nacionalidad');
            $('#btn-update-nacionalidad').show() 
            $('#btn-insert-nacionalidad').hide() 
            $('#txt-nacionalidad').val(resp.Descripcion);
            $('#btn-update-nacionalidad').attr('data-idnacionalidad', resp.IDNacionalidad);
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
function fnc_update_nacionalidad()
{   
    var data={};
    data.ID_Nacionalidad          = parseInt($('#btn-update-nacionalidad').attr('data-idnacionalidad'));
    data.txt_descripcion       = $('#txt-nacionalidad').val();

    $.ajax({
        type: "POST",
        url: "update_nacionalidad",
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
            $('#Modal-nacionalidad').modal('hide');
            fnc_list_nacionalidad();
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
function fnc_delete_nacionalidad()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Nacionalidad  = parseInt($(this).attr('data-idnacionalidad'));

        $.ajax({
            type: "POST",
            url: "delete_nacionalidad",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_nacionalidad();

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