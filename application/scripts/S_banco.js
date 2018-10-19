$(document).ready(init_banco);
/******************************************************************************************************************************************************************************/
function init_banco()
{
    $('#tbt-banco').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-Banco').on('click', fnc_reset_modalb)
    $('#btn-insert-banco').on('click',fnc_insert_banco);
    $('#btn-update-banco').on('click',fnc_update_banco);
    $(document).on('click','.btn-update-banco', fnc_get_banco);
    $(document).on('click','.btn-delete-banco', fnc_delete_banco);
    fnc_list_banco();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalb()
{
    $('#lbl-banco').html('Nuevo banco');
    $('#btn-update-banco').hide() 
    $('#btn-insert-banco').show()
    $('#btn-update-banco').attr('data-idbanco', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_banco()
{
    $.getJSON("list_banco", function (data){ 

    $('#tbt-banco').DataTable().row().clear().draw(false);

    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-banco').DataTable().row.add(
        [i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-banco" data-idbanco="'+data[i].IDBanco+'" data-toggle="modal" data-target="#Modal-banco"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-banco" data-idbanco="'+data[i].IDBanco+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });

}
/******************************************************************************************************************************************************************************/
function fnc_insert_banco ()
{
    var data={};    
    data.txt_descripcion = $('#txt-banco').val();
     
    $.ajax({
        type: "POST",
        url: "insert_banco",
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
            $('#Modal-banco').modal('hide');
            fnc_list_banco();
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
function fnc_get_banco()
{
    var data={};
    data.ID_Banco  = parseInt($(this).attr('data-idbanco'));
    $.ajax({
        type: "POST",
        url: "get_banco",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-banco').html('Editar banco');
            $('#btn-update-banco').show() 
            $('#btn-insert-banco').hide() 
            $('#txt-banco').val(resp.Descripcion);
            $('#btn-update-banco').attr('data-idbanco', resp.IDBanco);
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
function fnc_update_banco()
{   
    var data={};
    data.ID_Banco            = parseInt($('#btn-update-banco').attr('data-idbanco'));
    data.txt_descripcion     = $('#txt-banco').val();

    $.ajax({
        type: "POST",
        url: "update_banco",
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
            $('#Modal-banco').modal('hide');
            fnc_list_banco();
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
function fnc_delete_banco()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Banco  = parseInt($(this).attr('data-idbanco'));

        $.ajax({
            type: "POST",
            url: "delete_banco",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_banco();

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