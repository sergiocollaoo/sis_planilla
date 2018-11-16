$(document).ready(init_cargo);
/******************************************************************************************************************************************************************************/
function init_cargo()
{
    if ($('.modulo-personal').attr('id-empresa') != "")
    {
        $('#tbt-cargo').DataTable({
            responsive: true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
            }
        });

        $('#btn-Cargo').on('click', fnc_reset_modalc)
        $('#btn-insert-cargo').on('click',fnc_insert_cargo);
        $('#btn-update-cargo').on('click',fnc_update_cargo);
        $(document).on('click','.btn-update-cargo', fnc_get_cargo);
        $(document).on('click','.btn-delete-cargo', fnc_delete_cargo);
        fnc_list_cargo();
    }else{
        window.location.href = 'Inicio';
    }
}
/******************************************************************************************************************************************************************************/
function fnc_reset_modalc()
{
    $('#lbl-cargo').html('Nueva cargo');
    $('#btn-update-cargo').hide() 
    $('#btn-insert-cargo').show()
    $('#btn-update-cargo').attr('data-idcargo', '');
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_cargo()
{
    $.getJSON("list_cargo", function (data){ 

    $('#tbt-cargo').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-cargo').DataTable().row.add([i+1,
        data[i].Descripcion,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-cargo" data-idcargo="'+data[i].IDCargo+'" data-toggle="modal" data-target="#Modal-cargo"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-cargo" data-idcargo="'+data[i].IDCargo+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_cargo ()
{
    var data={};    
    data.txt_descripcion = $('#txt-cargo').val();
    data.txt_funcion     = $('#txt-funcion').val();
     
    $.ajax({
        type: "POST",
        url: "insert_cargo",
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
            $('#Modal-cargo').modal('hide');
            fnc_list_cargo();
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
function fnc_get_cargo()
{
    var data={};
    data.ID_Cargo  = parseInt($(this).attr('data-idcargo'));
    $.ajax({
        type: "POST",
        url: "get_cargo",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp) 
        {
            $('#lbl-cargo').html('Editar cargo');
            $('#btn-update-cargo').show() 
            $('#btn-insert-cargo').hide() 
            $('#txt-cargo').val(resp.Descripcion);
            $('#txt-funcion').val(resp.Funcion);
            $('#btn-update-cargo').attr('data-idcargo', resp.IDCargo);
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
function fnc_update_cargo()
{   
    var data={};
    data.ID_Cargo              = parseInt($('#btn-update-cargo').attr('data-idcargo'));
    data.txt_descripcion       = $('#txt-cargo').val();
    data.txt_funcion           = $('#txt-funcion').val();

    $.ajax({
        type: "POST",
        url: "update_cargo",
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
            $('#Modal-cargo').modal('hide');
            fnc_list_cargo();
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
function fnc_delete_cargo()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Cargo  = parseInt($(this).attr('data-idcargo'));

        $.ajax({
            type: "POST",
            url: "delete_cargo",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_cargo();

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