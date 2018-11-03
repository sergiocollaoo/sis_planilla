$(document).ready(init_plame);
/******************************************************************************************************************************************************************************/
function init_plame()
{
    $('#tbt-plame').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "columnDefs": [
        { "width": "10%", "targets": 0 },
        { "width": "10%", "className": "text-center", "targets": 2 }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-plamedetallec').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-plamedetalle').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "autoWidth": false,
        "fixedHeader": {
            "header": false,
            "footer": false
        },
        "columnDefs": [
            { "width": "10%","targets": 0 },
            { "width": "70%","targets": 1 },
            { "width": "10%", "className": "text-center", "targets": 2 },
            { "width": "10%", "className": "text-center", "targets": 3 }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#close-plame').on('click', function(){
        $('#plame-div2').hide();
        $('#plame-div1').show();
        $('#btn-saveplame').hide();
    });

/*    $('#btn-conceptop').on('click', fnc_reset_modalb)
    
    $('#btn-update-conceptosp').on('click',fnc_update_plame);
    $(document).on('click','.btn-update-plame', fnc_get_plame);*/
    $('input[type=checkbox]').on('change',fnc_insert_plamedetalle);

    $(document).on('click','.btn-detalle-plame', fnc_get_plame);
    fnc_list_plame();


}
/******************************************************************************************************************************************************************************/
/*function fnc_reset_modalb()
{
    $('#lbl-plame').html('Agregar Concepto Plame');
    $('#btn-update-conceptosp').hide() 
    $('#btn-insert-conceptosp').show()
    $('#btn-update-conceptosp').attr('data-idplame', '');
    $('input:radio[name=rd-plame]').prop('checked', false);
    fnc_limpiar_campos();
}*/
/******************************************************************************************************************************************************************************/
function fnc_list_plame()
{
    $.getJSON("list_plame", function (data){ 

    $('#tbt-plame').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-plame').DataTable().row.add([
        data[i].IDConceptos,
        data[i].Descripcion,
        '<a class="btn btn-detalle-plame" data-idplame="'+data[i].IDConceptos+'"><i class="icon-search"></i></a>'
        ]).draw(false);
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
            $('#tbt-plamedetallec').DataTable().row().clear().draw(false);
            $('#tbt-plamedetalle').DataTable().row().clear().draw(false);
        },
        success: function (data) 
        {
            $('#plame-div1').hide();
            $('#plame-div2').show();
            $('#btn-saveplame').show();

            $('#lbl-plame').html('Seleccionar Concepto Plame');
            for (var i = 0; i<data.length;i++) 
            {
                if(data[i].Tipo == 1){
                    $('#plame-div2').attr('data-codplame', data[i].Conceptoplame);
                    $('#tbt-plamedetallec').DataTable().row.add([
                    data[i].Conceptoplame,
                    data[i].Descripcion
                    ]).draw(false);    
                }else if (data[i].Tipo == 2){
                    $('#tbt-plamedetalle').DataTable().row.add([
                    data[i].Conceptoplame,
                    data[i].Descripcion,
                    '<a class="btn btn-update-plame" data-idplame="'+data[i].Estado+'"><i class="icon-search"></i></a>',
                    '<input type="checkbox" id="'+data[i].Conceptoplame+'" name="'+data[i].Conceptoplame+'" value="0"/>'
                    ]).draw(false);
                }
            } 

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
function fnc_insert_plamedetalle ()
{
/*    if($('input:checkbox[name=plame]').prop('checked')){
        $('input:checkbox[name=plame]').prop('checked').val(1);
    }
*/

    //$().on('change', function() {
        if ($('input[type=checkbox]').is(':checked') ) {
            alert("Checkbox " + $('input[type=checkbox]').prop("id") +  " (" + $('input[type=checkbox]').val() + ") => Seleccionado");
        } else {
            alert("Checkbox " + $('input[type=checkbox]').prop("id") +  " (" + $('input[type=checkbox]').val() + ") => Deseleccionado");
        }
    //});

  /*  var data={};    
    data.ID_Concepto        = $('#txt-codigoplame').val();
    data.txt_descripcion    = $('#txt-plamedesc').val();*/

    /*$.ajax({
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
            fnc_list_plame();
        },
        complete: function () 
        {     
        },
        error: function(resp)
        {
        }
    });*/
}
/******************************************************************************************************************************************************************************/
/*function fnc_insert_plame ()
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
            fnc_list_plame();
        },
        complete: function () 
        {     
        },
        error: function(resp)
        {
        }
    });
}*/

/***********************************************************************************************************************************************************/
/*function fnc_update_plame()
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
            fnc_list_plame();
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
/*function fnc_delete_plame()
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
               fnc_list_plame();

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