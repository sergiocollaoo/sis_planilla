$(document).ready(init_pension);
/******************************************************************************************************************************************************************************/
function init_pension()
{
    $('#tbt-pension').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#btn-Pension').on('click', fnc_reset_modalp)
    $('#btn-insert-pension').on('click',fnc_insert_pension);
    $('#btn-update-pension').on('click',fnc_update_pension);
    $(document).on('click','.btn-update-pension', fnc_get_pension);
    $(document).on('click','.btn-delete-pension', fnc_delete_pension);
    fnc_list_pension();
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalp()
{
    $('#lbl-pension').html('Nuevo Régimen pensionario');
    $('#btn-update-pension').hide() 
    $('#btn-insert-pension').show()
    $('#btn-update-pension').attr('data-idpension', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_pension()
{
    $.getJSON("list_pension", function (data){ 

    $('#tbt-pension').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-pension').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Fondo,
        data[i].Seguro,
        data[i].Comision_sf,
        data[i].Comision_m,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-pension" data-idpension="'+data[i].IDRegpension+'" data-toggle="modal" data-target="#Modal-pension"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-pension" data-idpension="'+data[i].IDRegpension+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_pension ()
{
    var data={};    
    data.txt_descripcion   = $('#txt-pension').val();
    data.txt_fondo         = $('#txt-fondo').val();
    data.txt_seguro        = $('#txt-seguro').val();
    data.txt_comisionsf    = $('#txt-comisionsf').val();
    data.txt_comisionm     = $('#txt-comisionm').val();
     
    $.ajax({
        type: "POST",
        url: "insert_pension",
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
            $('#Modal-pension').modal('hide');
            fnc_list_pension();
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
function fnc_get_pension()
{
    var data={};
    data.ID_Pension  = parseInt($(this).attr('data-idpension'));
    $.ajax({
        type: "POST",
        url: "get_pension",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-pension').html('Editar pension');
            $('#btn-update-pension').show() 
            $('#btn-insert-pension').hide() 
            $('#txt-pension').val(resp.Descripcion);
            $('#txt-fondo').val(resp.Fondo);
            $('#txt-seguro').val(resp.Seguro);
            $('#txt-comisionsf').val(resp.Comision_sf);
            $('#txt-comisionm').val(resp.Comision_m);
            $('#btn-update-pension').attr('data-idpension', resp.IDRegpension);
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
function fnc_update_pension()
{   
    var data={};
    data.ID_Pension             = parseInt($('#btn-update-pension').attr('data-idpension'));
    data.txt_descripcion        = $('#txt-pension').val();
    data.txt_fondo              = $('#txt-fondo').val();
    data.txt_seguro             = $('#txt-seguro').val();
    data.txt_comisionsf         = $('#txt-comisionsf').val();
    data.txt_comisionm          = $('#txt-comisionm').val();

    $.ajax({
        type: "POST",
        url: "update_pension",
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
            $('#Modal-pension').modal('hide');
            fnc_list_pension();
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
function fnc_delete_pension()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Pension  = parseInt($(this).attr('data-idpension'));

        $.ajax({
            type: "POST",
            url: "delete_pension",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_pension();

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