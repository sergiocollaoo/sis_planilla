$(document).ready(init_plame);
/******************************************************************************************************************************************************************************/
function init_plame()
{
    $('#tbt-ingresop').DataTable({
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

    $('#tbt-descuentop').DataTable({
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

    $('#btn-conceptop').on('click', fnc_reset_modalb)
    $('#btn-insert-conceptosp').on('click',fnc_insert_plame);
    $('#btn-update-conceptosp').on('click',fnc_update_plame);
    $(document).on('click','.btn-update-plamei', fnc_get_plame);
    $(document).on('click','.btn-delete-plamei', fnc_delete_plame);
    $(document).on('click','.btn-update-plamed', fnc_get_plame);
    $(document).on('click','.btn-delete-plamed', fnc_delete_plame);
    fnc_list_plamei();
    fnc_list_plamed();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalb()
{
    $('#lbl-plame').html('Agregar Concepto Plame');
    $('#btn-update-conceptosp').hide() 
    $('#btn-insert-conceptosp').show()
    $('#btn-update-conceptosp').attr('data-idplame', '');
    $('input:radio[name=rd-plame]').prop('checked', false);
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_plamei()
{
    $.getJSON("list_plamei", function (data){ 

    $('#tbt-ingresop').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-ingresop').DataTable().row.add([
        data[i].IDConceptos,
        data[i].Descripcion,
        '<a class="btn btn-update-plamei" data-idplame="'+data[i].IDConceptos+'" data-toggle="modal" data-target="#Modal-plame"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-plamei" data-idplame="'+data[i].IDConceptos+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_list_plamed()
{
    $.getJSON("list_plamed", function (data){ 

    $('#tbt-descuentop').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-descuentop').DataTable().row.add([
        data[i].IDConceptos,
        data[i].Descripcion,
        '<a class="btn btn-update-plamed" data-idplame="'+data[i].IDConceptos+'" data-toggle="modal" data-target="#Modal-plame"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-plamed" data-idplame="'+data[i].IDConceptos+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_plame ()
{
    var data={};    
    data.ID_Concepto        = $('#txt-codigoplame').val();
    data.txt_descripcion    = $('#txt-plamedesc').val();
    data.txt_categoria      = $('input:radio[name=rd-plame]:checked').val();

    $.ajax({
        type: "POST",
        url: "insert_plame",
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
            $('#Modal-plame').modal('hide');
            fnc_list_plamei();
            fnc_list_plamed();
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
function fnc_get_plame()
{
    var data={};
    data.ID_Concepto  = $(this).attr('data-idplame');
    $.ajax({
        type: "POST",
        url: "get_plame",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-plame').html('Editar Concepto Plame');
            $('#btn-update-conceptosp').show() 
            $('#btn-insert-conceptosp').hide() 
            $('#txt-codigoplame').val(resp.IDConceptos);
            $('#txt-plamedesc').val(resp.Descripcion);
            (resp.Categoria == 'I' ? $('#rd-ingresop').prop('checked', true) : $('#rd-descuentop').prop('checked', true));
            $('#btn-update-conceptosp').attr('data-idplame', resp.IDConceptos);
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
function fnc_update_plame()
{   
    var data={};
    data.ID_Concepto        = $('#btn-update-conceptosp').attr('data-idplame');
    data.txt_descripcion    = $('#txt-plamedesc').val();
    data.txt_categoria      = $('input:radio[name=rd-plame]:checked').val();

    $.ajax({
        type: "POST",
        url: "update_plame",
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
            $('#Modal-plame').modal('hide');
            fnc_list_plamei();
            fnc_list_plamed();
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
function fnc_delete_plame()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Concepto  = $(this).attr('data-idplame');

        $.ajax({
            type: "POST",
            url: "delete_plame",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_plamei();
               fnc_list_plamed();

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