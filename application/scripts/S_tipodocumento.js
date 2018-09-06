$(document).ready(init_tipodocumento);
/******************************************************************************************************************************************************************************/
function init_tipodocumento()
{
    $('#tbt-tipodocumento').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-identidad').on('click', fnc_reset_modaltd)
    $('#btn-insert-tipodocumento').on('click',fnc_insert_tipodocumento);
    $('#btn-update-tipodocumento').on('click',fnc_update_tipodocumento);
    $(document).on('click','.btn-update-tipodocumento', fnc_get_tipodocumento);
    $(document).on('click','.btn-delete-tipodocumento', fnc_delete_tipodocumento);
    fnc_list_tipodocumento();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modaltd()
{
    $('#lbl-tipodocumento').html('Nuevo Tipo de documento');
    $('#btn-update-tipodocumento').hide();
    $('#btn-insert-tipodocumento').show();
    $('#btn-update-tipodocumento').attr('data-idtipodocumento', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_tipodocumento()
{
    $.getJSON("list_tipodocumento", function (data){ 

    $('#tbt-tipodocumento').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-tipodocumento').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-tipodocumento" data-idtipodocumento="'+data[i].IDDocumento+'" data-toggle="modal" data-target="#Modal-documento"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-tipodocumento" data-idtipodocumento="'+data[i].IDDocumento+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_tipodocumento ()
{
    var data={};    
    data.txt_descripcion = $('#txt-tipodocumento').val();
     
    $.ajax({
        type: "POST",
        url: "insert_tipodocumento",
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
            $('#Modal-documento').modal('hide');
            fnc_list_tipodocumento();
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
function fnc_get_tipodocumento()
{
    var data={};
    data.ID_Documento  = parseInt($(this).attr('data-idtipodocumento'));
    $.ajax({
        type: "POST",
        url: "get_tipodocumento",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-tipodocumento').html('Editar Tipo de documento');
            $('#btn-update-tipodocumento').show() 
            $('#btn-insert-tipodocumento').hide() 
            $('#txt-tipodocumento').val(resp.Descripcion);
            $('#btn-update-tipodocumento').attr('data-idtipodocumento', resp.IDDocumento);
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
function fnc_update_tipodocumento()
{   
    var data={};
    data.ID_Documento          = parseInt($('#btn-update-tipodocumento').attr('data-idtipodocumento'));
    data.txt_descripcion       = $('#txt-tipodocumento').val();

    $.ajax({
        type: "POST",
        url: "update_tipodocumento",
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
            $('#Modal-documento').modal('hide');
            fnc_list_tipodocumento();
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
function fnc_delete_tipodocumento()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Documento  = parseInt($(this).attr('data-idtipodocumento'));

        $.ajax({
            type: "POST",
            url: "delete_tipodocumento",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_tipodocumento();

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