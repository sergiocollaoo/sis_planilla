$(document).ready(init_empresa);
/******************************************************************************************************************************************************************************/
function init_empresa()
{
    fnc_list_empresa();
    $('#btn-save-empresa').on('click', fnc_insert_empresa);
    $(document).on('click', '.ver-detalle-empresa', fnc_get_empresa);
    
    var ID_Empresa = sessionStorage.getItem("ID_Empresa");
    var RS = sessionStorage.getItem("RS");
    var RUC = sessionStorage.getItem("RUC");

    //Empresa detalle
    $('#div-detalle-empresa').attr('id-empresa', ID_Empresa)
    $('#name-empresa').html(RS)
    $('#ruc-empresa').html(RUC)
    // sessionStorage.clear();

    //Personal
    $('.modulo-personal').attr('id-empresa', ID_Empresa);

    //Cargo
    $('.modulo-cargo').attr('id-empresa', ID_Empresa);

    //Local
    $('.modulo-local').attr('id-empresa', ID_Empresa);

    //Plame
    $('.modulo-plame').attr('id-empresa', ID_Empresa);

    //Productos
    $('.modulo-productos').attr('id-empresa', ID_Empresa);

    // $('#menu-maestro').on('click', function(){
    //     window.location.href = 'Personal';
    // });
}
/******************************************************************************************************************************************************************************/
function fnc_list_empresa()
{
    $.getJSON("list_empresa", function (data){ 
        $.each(data, function(index, val){
            $('#card-empresa').append('<div class="col-xl-3 col-sm-6 mb-3">'+
                                        '<div class="card text-info border-info o-hidden h-100">'+
                                            '<div class="card-body">'+
                                                '<div class="card-body-icon">'+
                                                    '<i class="icon-office"></i>'+
                                                '</div>'+
                                                '<div class="mr-5">'+val.RUC+'</div>'+
                                                '<div class="mr-5">'+val.RS+'</div>'+
                                            '</div>'+
                                            '<a class="card-footer text-info clearfix small ver-detalle-empresa" id-empresa="'+val.IDEmpresa+'" href="javascript:void(0)">'+
                                                '<span class="float-left">Ver detalles</span>'+
                                                '<span class="float-right">'+
                                                    '<i class="fa fa-angle-right"></i>'+
                                                '</span>'+
                                            '</a>'+
                                        '</div>'+
                                    '</div>');

        })

            if($('#card-empresa').children().length != 0){
                $('.subheader-page-empresa').show();
                $('#empty-company').hide();
            }else{
                $('.subheader-page-empresa').hide();
                $('#empty-company').append('<div class="col-xl-2 offset-xl-5">'+
                                            '<div class="btn-box btn-box-success">'+
                                                '<button data-toggle="modal" data-target="#Modal-empresa">'+
                                                '<div class="btn-box-body">'+
                                                    '<i class="icon-office"></i>'+
                                                    '<span class="icon-plus"></span>'+
                                                '</div>'+
                                                '<div class="btn-box-footer">'+
                                                    '<span>Agregar Empresa</span>'+
                                                '</div>'+
                                                '</button>'+
                                            '</div>'+
                                        '</div>');
            }
    });

}
/******************************************************************************************************************************************************************************/
function fnc_insert_empresa ()
{
    var data={};    
    data.txt_ruc = $('#txt-ruc').val();
    data.txt_rs = $('#txt-rs').val();
     
    $.ajax({
        type: "POST",
        url: "insert_empresa",
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
            $('#Modal-empresa').modal('hide');
            fnc_list_empresa();
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
function fnc_get_empresa()
{
    var data={};   
    data.ID_Empresa    = $(this).attr('id-empresa');

    $.ajax({
        type: "POST",
        url: "get_empresa",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {            
        },
        success: function (resp) 
        {  
            sessionStorage.setItem("ID_Empresa", resp.IDEmpresa);
            sessionStorage.setItem("RS", resp.RS);
            sessionStorage.setItem("RUC", resp.RUC);

            window.location.href = 'empresa_detalle';
        },
        complete: function () 
        {           
        },
        error: function(resp)
        {
        }
    });
}
/*****************************************************************************************************************************************************************************/
/*function fnc_update_empresa()
{   
    var data={};
    data.ID_empresa            = parseInt($('#btn-update-empresa').attr('data-idempresa'));
    data.txt_descripcion     = $('#txt-empresa').val();

    $.ajax({
        type: "POST",
        url: "update_empresa",
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
            $('#Modal-empresa').modal('hide');
            fnc_list_empresa();
        },
        complete: function () 
        {           
        },
        error: function(resp)
        {
        }
    });
}*/
/******************************************************************************************************************************************************************************/
/*function fnc_delete_empresa()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_empresa  = parseInt($(this).attr('data-idempresa'));

        $.ajax({
            type: "POST",
            url: "delete_empresa",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_empresa();

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
*/


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