$(document).ready(init_promena);
/******************************************************************************************************************************************************************************/
function init_promena()
{
    $('#tbt-producto').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        scrollY: '43vh',
        scrollCollapse: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-manejeria').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        scrollY: '43vh',
        scrollCollapse: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-promena').on('click', fnc_reset_modalb)
    $('#btn-insert-promena').on('click',fnc_insert_promena);
    $('#btn-update-promena').on('click',fnc_update_promena);
    $(document).on('click','.btn-update-producto', fnc_get_promena);
    $(document).on('click','.btn-delete-producto', fnc_delete_promena);
    $(document).on('click','.btn-update-menajeria', fnc_get_promena);
    $(document).on('click','.btn-delete-menajeria', fnc_delete_promena);
    fnc_list_producto();
    fnc_list_menajeria();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalb()
{
    $('#lbl-promena').html('Agregar Producto o Menajería');
    $('#btn-update-promena').hide()
    $('#btn-insert-promena').show()
    $('#btn-update-promena').attr('data-idpromena', '');
    $('input:radio[name=rd-promena]').prop('checked', false);
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_producto()
{
    $.getJSON("list_producto", function (data){ 

    $('#tbt-producto').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-producto').DataTable().row.add([
        data[i].IDPromena,
        data[i].Descripcion,
        data[i].Precio,
        '<a class="btn btn-update-producto" data-idpromena="'+data[i].IDPromena+'" data-toggle="modal" data-target="#Modal-promena"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-producto" data-idpromena="'+data[i].IDPromena+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_list_menajeria()
{
    $.getJSON("list_menajeria", function (data){ 

    $('#tbt-manejeria').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-manejeria').DataTable().row.add([
        data[i].IDPromena,
        data[i].Descripcion,
        data[i].Precio,
        '<a class="btn btn-update-menajeria" data-idpromena="'+data[i].IDPromena+'" data-toggle="modal" data-target="#Modal-promena"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-menajeria" data-idpromena="'+data[i].IDPromena+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_promena ()
{
    var data={};    
    data.ID_Promena         = $('#txt-codigopromena').val();
    data.txt_descripcion    = $('#txt-promenadesc').val();
    data.txt_precio         = $('#txt-promenaprecio').val();
    data.txt_categoria      = $('input:radio[name=rd-promena]:checked').val();

    $.ajax({
        type: "POST",
        url: "insert_promena",
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
            $('#Modal-promena').modal('hide');
            fnc_list_producto();
            fnc_list_menajeria();
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
function fnc_get_promena()
{
    var data={};
    data.ID_Promena  = $(this).attr('data-idpromena');
    $.ajax({
        type: "POST",
        url: "get_promena",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-promena').html('Editar Producto o Menajería');
            $('#btn-update-promena').show() 
            $('#btn-insert-promena').hide() 
            $('#txt-codigopromena').val(resp.IDPromena);
            $('#txt-promenadesc').val(resp.Descripcion);
            $('#txt-promenaprecio').val(resp.Precio);
            (resp.Categoria == 'P' ? $('#rd-producto').prop('checked', true) : $('#rd-menajeria').prop('checked', true));
            $('#btn-update-promena').attr('data-idpromena', resp.IDPromena);
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
function fnc_update_promena()
{   
    var data={};
    data.ID_Promena         = $('#btn-update-promena').attr('data-idpromena');
    data.txt_descripcion    = $('#txt-promenadesc').val();
    data.txt_precio         = $('#txt-promenaprecio').val();
    data.txt_categoria      = $('input:radio[name=rd-promena]:checked').val();

    $.ajax({
        type: "POST",
        url: "update_promena",
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
            $('#Modal-promena').modal('hide');
            fnc_list_producto();
            fnc_list_menajeria();
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
function fnc_delete_promena()
{
    var r = confirm("¿Desea eliminar lo siguiente?");
    if (r == true) {
    var data={}; 
    data.ID_Promena  = $(this).attr('data-idpromena');

        $.ajax({
            type: "POST",
            url: "delete_promena",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_producto();
               fnc_list_menajeria();

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