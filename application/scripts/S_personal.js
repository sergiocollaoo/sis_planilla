$(document).ready(init_personal);
/******************************************************************************************************************************************************************************/
function init_personal ()
{
    $('#tbt-personal').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-vinculolaboral').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-vinculoseguro').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('#tbt-fechalaboral').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('.btn-Personal').on('click', function(){
        $('#lbl-personal').text('Nuevo Personal')
        $('#div-tbtPersonal').hide();
        $('#btn-Exportp').hide();
        $('.btn-Personal').hide();
        $('#prev-addPersonal').show();
        $('#btn-SaveP').show();
        $('#btn-CloseP').show();
        $('#btn-update-personal').attr('data-idpersonal', '');
    });

    $('#btn-CloseP').on('click', function(){

        $('#collapseOne').addClass('show');
        $('#collapseTwo').removeClass('show');
        $('#collapseThree').removeClass('show');
        $('#div-tbtPersonal').show();
        $('#btn-Exportp').show();
        $('.btn-Personal').show();
        $('#div-addPersonal').hide();
        $('#btn-SaveP').hide();
        $('#btn-update-personal').hide();
        $('#btn-CloseP').hide();
        $('.cbo-tipodoc').val(0);
        $('.cbo-nacionalidad').val(0);
        $('.cbo-departamento').val(0);
        $('.cbo-provincia').val(0);
        $('.cbo-distrito').val(0);
        $('.cbo-departamentodni').val(0);
        $('.cbo-provinciadni').val(0);
        $('.cbo-distritodni').val(0);
        $('.cbo-estadocivil').val(0);
        $('.cbo-banco').val(0);
        $('.cbo-regpension').val(0);
        $('.cbo-local').val(0);
        $('.cbo-cargo').val(0);
        $('.cbo-tcontrato').val(0);
        $('.cbo-tpago').val(0);
        $('#view-cbobanco').hide();
        $('input[type=date]').val('');
        $('#txt-cuspp').attr("disabled", true);
        $('input:checkbox[name=chk-comision]').attr("disabled", true);
        $('input:checkbox[name=chk-comision]').prop("checked", false);
        $('input:radio[name=rd-sexo]').prop('checked', false);
        $('input:radio[name=rd-sctr]').prop('checked', false);
        $('#div-ver').hide();

        fnc_reset_personal();
    });

    $('.add-rs').on('click',function(){
        $('#lbl-seguro').html('Agregar');
        $('.cbo-regsalud').val(0);
        $('.cbo-eps').val(0);
        $('input[type=date]').val('');
        $('#view-eps').hide();
    });

    $('#add-vinculolaboral').on('click', function(){
        $('.cbo-local').val(0);
        $('.cbo-cargo').val(0);
        $('.cbo-tcontrato').val(0);
        $('input[type=date]').val('');
        $('#txt-viewfunc').html("");
        fnc_reset_personal();
    });

    $('.span-ver').on('click', function(){
        $('#div-ver').toggle("slow");
    });

    $('#txt-remuneracion').on('keyup', function(){
        var PD = $(this).val()/30;
        $('#txt-pordia').val(PD);
        var PH = PD/8;
        $('#txt-porhora').val(PH);
    })

    $('.cbo-tpago').on('change', function(){
        if ($(this).val() == 2){
            $('#view-cbobanco').show('slow');
        }else{
            $('#view-cbobanco').hide('slow');
        }
    })

    $('.cbo-regsalud').on('change', function(){
        if ($(this).val() == 2 || $(this).val() == 4) {
            $('#view-eps').show('slow');
        }else{
            $('#view-eps').hide('slow');
            $('.cbo-eps').val(0);
        }
    });

    $('.cbo-regpension').change(function(){
        if ($(this).val() <= 1) {
            $('input:checkbox[name=chk-comision]').attr("disabled", true);
            $('input:checkbox[name=chk-comision]').prop("checked", false);
            $('#txt-cuspp').attr("disabled", true);
            $('#txt-cuspp').val("");
        }else{
            $('input:checkbox[name=chk-comision]').attr("disabled", false);
            $('#txt-cuspp').attr("disabled", false);
        }
    });

    $('.cbo-cargo').change(function(){
        $('#txt-viewfunc').html($('option:selected',this).attr('funcion-cargo'));
    });

    $(document).on('click','.btn-update-personal', fnc_get_personal);
    $(document).on('click','.btn-delete-personal', fnc_delete_personal);
    $('#btn-update-personal').on('click',fnc_update_personal);
    $('#btn-update-personal').on('click',fnc_update_vinculoseguro);
    $('#btn-SaveP').on('click',fnc_insert_personal);

    $('.cbo-departamento').on('change',fnc_get_provincia);
    $('.cbo-departamentodni').on('change',fnc_get_provinciadni);
    $('.cbo-provincia').on('change',fnc_get_distrito);
    $('.cbo-provinciadni').on('change',fnc_get_distritodni);

    $('#save-vinculolaboral').on('click',fnc_insert_vinculolaboral);
    $(document).on('click','.btn-update-vinculolaboral', fnc_get_vinculolaboral);
    $(document).on('click','.btn-delete-vinculolaboral', fnc_delete_vinculolaboral);
    $('#btn-update-vinculolaboral').on('click',fnc_update_vinculolaboral);

    $('#save-vinculoseguro').on('click',fnc_insert_vinculoseguro);
    $(document).on('click','.btn-update-vinculoseguro', fnc_get_vinculoseguro);
    $(document).on('click','.btn-delete-vinculoseguro', fnc_delete_vinculoseguro);
    $('#btn-update-vinculoseguro').on('click',fnc_update_vinculoseguro);

    fnc_list_personal();
    fnc_get_datoscombo();
    fnc_get_departamento();

}
/******************************************************************************************************************************************************************************/
function fnc_reset_personal()
{
    fnc_limpiar_campos();
}
/******************************************************************************************************************************************************************************/
function fnc_list_personal()
{
    $.getJSON("list_personal", function (data){

    $('#tbt-personal').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-personal').DataTable().row.add([
        i+1,
        data[i].IDNumdoc,
        data[i].Apellidos,
        data[i].Nombres,
        data[i].Local,
        data[i].Cargo,
        '<a class="btn btn-update-personal" data-idpersonal="'+data[i].IDPersonal+'"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-personal" data-idpersonal="'+data[i].IDPersonal+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_personal ()
{
    var data={};    
    data.ID_Numdoc              = $('#txt-numdoc_i').val();
    data.ID_Documento           = $('.cbo-tipodoc').val();
    data.txt_apellidos          = $('#txt-apellidos_i').val();
    data.txt_nombres            = $('#txt-nombres_i').val();

    $.ajax({
        type: "POST",
        url: "insert_personal",
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
            $('#btn-update-personal').attr('data-idpersonal',resp.idpersonal);
            $('#btn-update-personal').show();
            $('#prev-addPersonal').hide();
            $('#div-addPersonal').show();
            $('#btn-SaveP').hide();
            fnc_list_personal();

            $('#txt-numdoc').val($('#txt-numdoc_i').val());
            $('.cbo-tipodoc').val($('.cbo-tipodoc').val());
            $('#txt-apellidos').val($('#txt-apellidos_i').val());
            $('#txt-nombres').val($('#txt-nombres_i').val());
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
function fnc_get_personal()
{
    var data={};
    data.ID_Personal  = parseInt($(this).attr('data-idpersonal'));
    $.ajax({
        type: "POST",
        url: "get_personal",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp)
        {
            $('#lbl-personal').text('Editar Personal')
            $('#div-tbtPersonal').hide();
            $('#btn-Exportp').hide();
            $('.btn-Personal').hide();
            $('#prev-addPersonal').hide();
            $('#div-addPersonal').show();
            $('#btn-update-personal').show();
            $('#btn-CloseP').show();
            fnc_reset_personal();

            $('#txt-numdoc').val(resp.IDNumdoc);
            $('.cbo-tipodoc').val(resp.IDDocumento);
            $('#txt-apellidos').val(resp.Apellidos);
            $('#txt-nombres').val(resp.Nombres);
            $('#txt-fechanac').val(resp.Fechanacimiento);
            (resp.Sexo == 'M' ? $('#rd-masculino').prop('checked', true) : $('#rd-femenino').prop('checked', true));
            $('.cbo-estadocivil').val(resp.IDEstadocivil);
            $('.cbo-nacionalidad').val(resp.IDNacionalidad);
            $('#txt-telefono').val(resp.Telefono);
            $('#txt-email').val(resp.Email);
            $('.cbo-departamento').val(resp.Departamento).trigger("change");
            $('.cbo-provincia').val(resp.Provincia).trigger("change");
            $('.cbo-distrito').val(resp.Distrito).trigger("change");            
            $('#txt-urb').val(resp.Urbanizacion);
            $('#txt-jiron').val(resp.Jiron);
            $('#txt-pasaje').val(resp.Pasaje);
            $('#txt-intofi').val(resp.Intofi);
            $('#txt-direccion').val(resp.Direccion);
            $('#txt-referencias').val(resp.Referencia);
            $('.cbo-departamentodni').val(resp.Departamentodni).trigger("change");
            $('.cbo-provinciadni').val(resp.Provinciadni).trigger("change");
            $('.cbo-distritodni').val(resp.Distritodni).trigger("change");
            $('#txt-direcciondni').val(resp.Direccion_DNI);
            $('.cbo-regpension').val(resp.IDRegpension);
            (resp.IDRegpension == 1 ? $('#txt-cuspp').attr("disabled", true) : $('#txt-cuspp').attr("disabled", false));
            (resp.IDRegpension == 1 ? $('input:checkbox[name=chk-comision]').attr("disabled", true) : $('input:checkbox[name=chk-comision]').attr("disabled", false));
            (resp.Comision == 1 ? $('input:checkbox[name=chk-comision]').prop('checked', true) : $('input:checkbox[name=chk-comision]').prop('checked', false));
            $('#txt-cuspp').val(resp.Cuspp);
            $('.cbo-tpago').val(resp.IDTpago);
            $('.cbo-banco').val(resp.IDBanco);
            $('#txt-numcta').val(resp.Numcuenta);
            $('#txt-remuneracion').val(resp.Remuneracion);
            $('#txt-recargoconsumo').val(resp.Recargoconsumo);
            $('#txt-pordia').val(resp.Remuneracion/30);
            $('#txt-porhora').val((resp.Remuneracion/30)/8);
            (resp.Sctr == '0' ? $('#rd-nosctr').prop('checked', true) : $('#rd-sisctr').prop('checked', true));

            if($('.cbo-distritodni').val() == 0 || $('#txt-direcciondni').val() == ""){
                $('#div-ver').hide();
            }else{
                $('#div-ver').show();
            }

            $('#btn-update-personal').attr('data-idpersonal', resp.IDPersonal);

            fnc_list_vinculolaboral();
            fnc_list_vinculoseguro();

        },
        complete: function () 
        {
            if ($('.cbo-tpago').val() == 2){
                $('#view-cbobanco').show('slow');
            }else{
                $('#view-cbobanco').hide('slow');
            }
        },
        error: function(resp)
        {
        }
    });
}
/***********************************************************************************************************************************************************/
function fnc_update_personal()
{   
    var data={};
    data.ID_Personal            = parseInt($('#btn-update-personal').attr('data-idpersonal'));
    data.ID_Numdoc              = $('#txt-numdoc').val();
    data.ID_Documento           = $('.cbo-tipodoc').val();
    data.txt_apellidos          = $('#txt-apellidos').val();
    data.txt_nombres            = $('#txt-nombres').val();
    data.txt_fechanacimiento    = $('#txt-fechanac').val();
    data.ID_Nacionalidad        = $('.cbo-nacionalidad').val();
    data.txt_sexo               = $('input:radio[name=rd-sexo]:checked').val()
    data.txt_telefono           = $('#txt-telefono').val();
    data.txt_email              = $('#txt-email').val();
    data.ID_Distrito            = $('.cbo-distrito').val();
    data.txt_urb                = $('#txt-urb').val();
    data.txt_jiron              = $('#txt-jiron').val();
    data.txt_pasaje             = $('#txt-pasaje').val();
    data.txt_intofi             = $('#txt-intofi').val();
    data.txt_direccion          = $('#txt-direccion').val();
    data.txt_referencia         = $('#txt-referencias').val();
    data.ID_Distritodni         = $('.cbo-distritodni').val();
    data.txt_direcciondni       = $('#txt-direcciondni').val();
    data.ID_Estadocivil         = $('.cbo-estadocivil').val();
    data.ID_Banco               = $('.cbo-banco').val();
    data.txt_numcuenta          = $('#txt-numcta').val();
    data.ID_Regpension          = $('.cbo-regpension').val();
    data.txt_comision           = ($('input:checkbox[name=chk-comision]:checked') ? 1 : 0);
    data.txt_cussp              = $('#txt-cuspp').val();
    data.ID_Tpago               = $('.cbo-tpago').val();
    data.txt_remuneracion       = $('#txt-remuneracion').val();
    data.txt_recargoconsumo     = $('#txt-recargoconsumo').val();

    $.ajax({
        type: "POST",
        url: "update_personal",
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
            $('#div-tbtPersonal').show();
            $('#btn-Exportp').show();
            $('.btn-Personal').show();
            $('#div-addPersonal').hide();
            $('#btn-update-personal').hide();
            $('#btn-CloseP').hide();
            fnc_list_personal();
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
function fnc_delete_personal()
{
    var r = confirm("¿Desea eliminar al siguiente personal?");
    if (r == true) {
    var data={}; 
    data.ID_Personal  = parseInt($(this).attr('data-idpersonal'));

        $.ajax({
            type: "POST",
            url: "delete_personal",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp)
            {  
               fnc_list_personal();

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
/***********************************************************************************************************************************************************/
function fnc_get_datoscombo()
{
    $('.cbo-tipodoc').html('<option value="0">Seleccione...</option>');
    $('.cbo-nacionalidad').html('<option value="0">Seleccione...</option>');
    $('.cbo-estadocivil').html('<option value="0">Seleccione estado civil</option>');
    $('.cbo-banco').html('<option value="0">Seleccione banco</option>');
    $('.cbo-regpension').html('<option value="0">Seleccione...</option>');
    $('.cbo-cargo').html('<option value="0">Seleccione cargo</option>');
    $('.cbo-tcontrato').html('<option value="0">Seleccione contrato</option>');
    $('.cbo-local').html('<option value="0">Seleccione local</option>');
    $('.cbo-tpago').html('<option value="0">Seleccione...</option>');
    $('.cbo-regsalud').html('<option value="0">Seleccione...</option>');
    $('.cbo-eps').html('<option value="0">Seleccione...</option>');
    $.getJSON("get_datoscombo", function (data){ 
        $.each(data, function(index, val){
            if(val.Tipo == 1){
                $('.cbo-tipodoc').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if(val.Tipo == 2) {
                $('.cbo-nacionalidad').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if(val.Tipo == 3){
                $('.cbo-estadocivil').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if (val.Tipo == 4){
                $('.cbo-banco').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');   
            }
            else if (val.Tipo == 5){
                $('.cbo-regpension').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');   
            }
            else if (val.Tipo == 6){
                $('.cbo-cargo').append('<option value="'+val.ID+'" funcion-cargo="'+val.Descripcion2+'">'+val.Descripcion+'</option>');
            }
            else if (val.Tipo == 7){
                $('.cbo-tcontrato').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');   
            }
            else if (val.Tipo == 8){
                $('.cbo-local').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if (val.Tipo == 9){
                $('.cbo-tpago').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if (val.Tipo == 10){
                $('.cbo-regsalud').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if (val.Tipo == 11){
                $('.cbo-eps').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
        })
    });
}
/******************************************************************************************************************************************************************************/
function fnc_list_vinculolaboral()
{
    var data={};
    data.ID_Personal      = parseInt($('#btn-update-personal').attr('data-idpersonal'));

    $.ajax({
        type: "POST",
        url: "list_vinculolaboral",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function ()
        { 
            $('#tbt-vinculolaboral').DataTable().row().clear().draw(false);
        },
        success: function (data) 
        {
            for (var i = 0; i<data.length;i++) 
                {
                    $('#tbt-vinculolaboral').DataTable().row.add([
                    data[i].Descripcion,
                    data[i].Fechai,
                    data[i].Fechac,
                    data[i].Tregistrofile,
                    data[i].Contratofile,
                    '<a class="btn btn-update-vinculolaboral" data-idvinculo="'+data[i].IDVinculo+'" data-toggle="modal" data-target="#Modal-vinculolaboral"><i class="fa fa-edit"></i></a>'+
                    '<a class="btn btn-delete-vinculolaboral" data-idvinculo="'+data[i].IDVinculo+'"><i class="fa fa-trash"></i></a>'
                    ]).draw(false);
                } 
        },
        complete: function () 
        {
        },
        error: function(data)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_vinculolaboral()
{
    var data={};    
    data.ID_Personalv        = $('#btn-update-personal').attr('data-idpersonal');
    data.ID_Tcontrato        = $('.cbo-tcontrato').val();
    data.ID_Local            = $('.cbo-local').val();
    data.ID_Cargo            = $('.cbo-cargo').val();
    data.txt_fechai          = $('#fechai-laboral').val();
    data.txt_fechac          = $('#fechac-laboral').val();

    $.ajax({
        type: "POST",
        url: "insert_vinculolaboral",
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
            $('#Modal-vinculolaboral').modal('hide');
            fnc_list_vinculolaboral();
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
function fnc_get_vinculolaboral()
{
    var data={};
    data.ID_Vinculo  = parseInt($(this).attr('data-idvinculo'));
    $.ajax({
        type: "POST",
        url: "get_vinculolaboral",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp)
        {
            $('#lbl-vinculo').html('Editar vínculo laboral');
            $('#btn-update-vinculolaboral').show() 
            $('#save-vinculolaboral').hide()

            $('.cbo-local').val(resp.IDLocal);
            $('.cbo-cargo').val(resp.IDCargo);
            $('#txt-viewfunc').html(resp.Funcion);
            $('.cbo-tcontrato').val(resp.IDTcontrato);
            $('#fechai-laboral').val(resp.Fechai);
            $('#fechac-laboral').val(resp.Fechac);

            $('#btn-update-vinculolaboral').attr('data-idvinculo', resp.IDVinculo);


            fnc_list_vinculolaboral();

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
function fnc_update_vinculolaboral()
{   
    var data={};
    data.ID_Vinculo           = parseInt($('#btn-update-vinculolaboral').attr('data-idvinculo'));
    data.ID_Local             = $('.cbo-local').val();
    data.ID_Cargo             = $('.cbo-cargo').val();
    data.ID_Tcontrato         = $('.cbo-tcontrato').val();
    data.txt_fechai           = $('#fechai-laboral').val();
    data.txt_fechac           = $('#fechac-laboral').val();

    $.ajax({
        type: "POST",
        url: "update_vinculolaboral",
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
            $('#Modal-vinculolaboral').modal('hide');
            fnc_list_vinculolaboral();
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
function fnc_delete_vinculolaboral()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Vinculo  = parseInt($(this).attr('data-idvinculo'));

        $.ajax({
            type: "POST",
            url: "delete_vinculolaboral",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_vinculolaboral();

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
/******************************************************************************************************************************************************************************/
function fnc_get_departamento()
{
   $.getJSON("get_departamento", function (data){ 
        $('.cbo-departamento').html('<option value="0">Seleccione...</option>');
        $('.cbo-departamentodni').html('<option value="0">Seleccione...</option>');
        for (var i = 0; i<data.length;i++) 
        {
            $('.cbo-departamento').append('<option value="'+data[i].idDepartamento+'">'+data[i].departamento+'</option>');
            $('.cbo-departamentodni').append('<option value="'+data[i].idDepartamento+'">'+data[i].departamento+'</option>');
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_get_provincia()
{
    var data={};
        data.id_departamento  = parseInt($('.cbo-departamento').val());    
    
    $.ajax({
        type: "POST",
        url: "get_provincia",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
           $('.cbo-provincia').html('<option value="0">Seleccione...</option>');
           $('.cbo-provinciadni').html('<option value="0">Seleccione...</option>');
        },
        success: function (data) 
        {
            for (var i = 0; i<data.length;i++) 
            {
                $('.cbo-provincia').append('<option value="'+data[i].idProvincia+'">'+data[i].provincia+'</option>');
                $('.cbo-provinciadni').append('<option value="'+data[i].idProvincia+'">'+data[i].provincia+'</option>');
            }
            
        },
        complete: function () 
        {           
        },
        error: function(data)
        {
        }
    });    
}
/******************************************************************************************************************************************************************************/
function fnc_get_provinciadni()
{
    var data={};
        data.id_departamento  = parseInt($('.cbo-departamentodni').val());    
    
    $.ajax({
        type: "POST",
        url: "get_provincia",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
           $('.cbo-provinciadni').html('<option value="0">Seleccione...</option>');
        },
        success: function (data) 
        {
            for (var i = 0; i<data.length;i++) 
            {
                $('.cbo-provinciadni').append('<option value="'+data[i].idProvincia+'">'+data[i].provincia+'</option>');
            }
            
        },
        complete: function () 
        {           
        },
        error: function(data)
        {
        }
    });    
}
/******************************************************************************************************************************************************************************/
function fnc_get_distrito()
{
    var data={};
    var id_provincia = $('.cbo-provincia').val();   
   
    if(id_provincia==''){id_provincia=0;}

    data.id_provincia = id_provincia; 

   $.ajax({
        type: "POST",
        url: "get_distrito",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
           $('.cbo-distrito').html('<option value="0">Seleccione...</option>');
        },
        success: function (data) 
        {
            $.each(data, function(index, val){
                $('.cbo-distrito').append('<option value="'+val.idDistrito+'">'+val.distrito+'</option>');
            });
        },
        complete: function () 
        {           
        },
        error: function(data)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_get_distritodni()
{
    var data={};
    var id_provincia = $('.cbo-provinciadni').val();   
   
    if(id_provincia==''){id_provincia=0;}

    data.id_provincia = id_provincia; 

   $.ajax({
        type: "POST",
        url: "get_distrito",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
           $('.cbo-distritodni').html('<option value="0">Seleccione...</option>');
        },
        success: function (data) 
        {
            $.each(data, function(index, val){
                $('.cbo-distritodni').append('<option value="'+val.idDistrito+'">'+val.distrito+'</option>');
            });
        },
        complete: function () 
        {           
        },
        error: function(data)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_list_vinculoseguro()
{
    var data={};
    data.ID_Personal      = parseInt($('#btn-update-personal').attr('data-idpersonal'));

    $.ajax({
        type: "POST",
        url: "list_vinculoseguro",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function ()
        { 
            $('#tbt-vinculoseguro').DataTable().row().clear().draw(false);
        },
        success: function (data) 
        {
            for (var i = 0; i<data.length;i++) 
                {
                    $('#tbt-vinculoseguro').DataTable().row.add([
                    data[i].Regsalud,
                    data[i].Fechai,
                    data[i].Fechac,
                    data[i].EPS,
                    '<a class="btn btn-update-vinculoseguro" data-idseguro="'+data[i].IDSeguro+'" data-toggle="modal" data-target="#Modal-vinculoseguro"><i class="fa fa-edit"></i></a>'+
                    '<a class="btn btn-delete-vinculoseguro" data-idseguro="'+data[i].IDSeguro+'"><i class="fa fa-trash"></i></a>'
                    ]).draw(false);
                } 
        },
        complete: function () 
        {
        },
        error: function(data)
        {
        }
    });
}
/******************************************************************************************************************************************************************************/
function fnc_insert_vinculoseguro()
{
    var data={};    
    data.ID_Personalv   = $('#btn-update-personal').attr('data-idpersonal');
    data.ID_Regsalud    = $('.cbo-regsalud').val();
    data.txt_fechai     = $('#fechai-regsalud').val();
    data.txt_fechac     = $('#fechac-regsalud').val();
    data.ID_Eps         = $('.cbo-eps').val();

    $.ajax({
        type: "POST",
        url: "insert_vinculoseguro",
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
            $('#Modal-vinculoseguro').modal('hide');
            fnc_list_vinculoseguro();
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
function fnc_get_vinculoseguro()
{
    var data={};
    data.ID_Seguro  = parseInt($(this).attr('data-idseguro'));
    $.ajax({
        type: "POST",
        url: "get_vinculoseguro",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (resp)
        {
            $('#lbl-seguro').html('Editar');
            $('#btn-update-vinculoseguro').show() 
            $('#save-vinculoseguro').hide()

            $('.cbo-regsalud').val(resp.IDRegsalud);
            $('#fechai-regsalud').val(resp.Fechai);
            $('#fechac-regsalud').val(resp.Fechac);
            $('.cbo-eps').val(resp.IDEps);
            (resp.IDRegsalud == 2 || resp.IDRegsalud == 4 ?  $('#view-eps').show() : $('#view-eps').hide());

            $('#btn-update-vinculoseguro').attr('data-idseguro', resp.IDSeguro);


            fnc_list_vinculoseguro();

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
function fnc_update_vinculoseguro()
{   
    var data={};
    data.ID_Seguro      = parseInt($('#btn-update-vinculoseguro').attr('data-idseguro'));
    data.ID_Regsalud    = $('.cbo-regsalud').val();
    data.txt_fechai     = $('#fechai-regsalud').val();
    data.txt_fechac     = $('#fechac-regsalud').val();
    data.ID_Eps         = $('.cbo-eps').val();

    $.ajax({
        type: "POST",
        url: "update_vinculoseguro",
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
            $('#Modal-vinculoseguro').modal('hide');
            fnc_list_vinculoseguro();
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
function fnc_delete_vinculoseguro()
{
    var r = confirm("¿Desea eliminar la siguiente entrega?");
    if (r == true) {
    var data={}; 
    data.ID_Seguro  = parseInt($(this).attr('data-idseguro'));

        $.ajax({
            type: "POST",
            url: "delete_vinculoseguro",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            beforeSend: function () 
            {
            },
            success: function (resp) 
            {  
               fnc_list_vinculoseguro();

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
/******************************************************************************************************************************************************************************/