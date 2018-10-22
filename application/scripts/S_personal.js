$(document).ready(init_personal);
/******************************************************************************************************************************************************************************/
function init_personal ()
{
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

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

    $('.span-ver').on('click', function(){
        $('#div-ver').toggle("slow");
    });

    $('#btn-CloseP').on('click', function(){

        $('#nav-home-tab').addClass('active');
        $('#nav-profile-tab').removeClass('active');
        $('#nav-home').addClass('show active');
        $('#nav-profile').removeClass('show active');
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
        $('.cbo-estadocivil').val(0);
        $('.cbo-banco').val(0);
        $('.cbo-regpension').val(0);
        $('.cbo-local').val(0);
        $('.cbo-cargo').val(0);
        $('.cbo-tcontrato').val(0);
        $('input[type=date]').val('');
        $('input:checkbox[name=chk-comision]').prop("checked", false);
        $('input:radio[name=rd-sexo]').prop('checked', false);
        fnc_reset_personal();
    });

    $('#btn-add1').on('click', function(){
        var r = confirm("Se guardará la información previa,¿continuar?");
        if (r == true) {
            if ($('#btn-update-personal').attr('data-idpersonal') != "") {
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
                    data.txt_emailcorp          = $('#txt-emailcorp').val();
                    data.txt_direccion          = $('#txt-direccion').val();
                    data.txt_referencia         = $('#txt-referencias').val();
                    data.ID_Estadocivil         = $('.cbo-estadocivil').val();
                    data.ID_Banco               = $('.cbo-banco').val();
                    data.txt_numcuenta          = $('#txt-numcta').val();
                    data.ID_Regpension          = $('.cbo-regpension').val();
                    data.txt_comision           = ($('input:checkbox[name=chk-comision]:checked') ? 1 : 0);
                    data.txt_cussp              = $('#txt-cuspp').val();
                    data.ID_Cargo               = $('.cbo-cargo').val();
                    data.txt_remuneracion       = $('#txt-remuneracion').val();
                    data.txt_recargoconsumo     = $('#txt-recargoconsumo').val();
                    data.ID_Local               = $('.cbo-local').val();

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
                            alert("Guardado correctamente");
                            fnc_list_personal();
                            $('#btn-SaveP').attr('disabled', true);
                        },
                        complete: function () 
                        {           
                        },
                        error: function(resp)
                        {
                        }
                    });
            }else{
                var data={};    
                    data.ID_Numdoc              = $('#txt-numdoc').val();
                    data.ID_Documento           = $('.cbo-tipodoc').val();
                    data.txt_apellidos          = $('#txt-apellidos').val();
                    data.txt_nombres            = $('#txt-nombres').val();
                    data.txt_fechanacimiento    = $('#txt-fechanac').val();
                    data.ID_Nacionalidad        = $('.cbo-nacionalidad').val();
                    data.txt_sexo               = $('input:radio[name=rd-sexo]:checked').val()
                    data.txt_telefono           = $('#txt-telefono').val();
                    data.txt_email              = $('#txt-email').val();
                    data.txt_emailcorp          = $('#txt-emailcorp').val();
                    data.txt_direccion          = $('#txt-direccion').val();
                    data.txt_referencia         = $('#txt-referencias').val();
                    data.ID_Estadocivil         = $('.cbo-estadocivil').val();
                    data.ID_Banco               = $('.cbo-banco').val();
                    data.txt_numcuenta          = $('#txt-numcta').val();
                    data.ID_Regpension          = $('.cbo-regpension').val();
                    data.txt_comision           = ($('input:checkbox[name=chk-comision]:checked') ? 1 : 0);
                    data.txt_cussp              = $('#txt-cuspp').val();
                    data.ID_Cargo               = $('.cbo-cargo').val();
                    data.txt_remuneracion       = $('#txt-remuneracion').val();
                    data.txt_recargoconsumo     = $('#txt-recargoconsumo').val();
                    data.ID_Local               = $('.cbo-local').val();
                     
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
                            fnc_list_personal();
                            $('#btn-SaveP').attr('disabled', true);
                        },
                        complete: function () 
                        {     
                        },
                        error: function(resp)
                        {
                        }
                    });
            }
            $('#Modal-vinculolaboral').modal('show');
        }
    })

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
    $('#btn-SaveP').on('click',fnc_insert_personal);
    $('#save-vinculolaboral').on('click',fnc_insert_vinculolaboral);
    fnc_list_personal();
    fnc_get_datoscombo();

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
/*    data.txt_fechanacimiento    = $('#txt-fechanac').val();
    data.ID_Nacionalidad        = $('.cbo-nacionalidad').val();
    data.txt_sexo               = $('input:radio[name=rd-sexo]:checked').val()
    data.txt_telefono           = $('#txt-telefono').val();
    data.txt_email              = $('#txt-email').val();
    data.txt_emailcorp          = $('#txt-emailcorp').val();
    data.txt_direccion          = $('#txt-direccion').val();
    data.txt_referencia         = $('#txt-referencias').val();
    data.ID_Estadocivil         = $('.cbo-estadocivil').val();
    data.ID_Banco               = $('.cbo-banco').val();
    data.txt_numcuenta          = $('#txt-numcta').val();
    data.ID_Regpension          = $('.cbo-regpension').val();
    data.txt_comision           = ($('input:checkbox[name=chk-comision]:checked') ? 1 : 0);
    data.txt_cussp              = $('#txt-cuspp').val();
    data.ID_Cargo               = $('.cbo-cargo').val();
    data.txt_remuneracion       = $('#txt-remuneracion').val();
    data.txt_recargoconsumo     = $('#txt-recargoconsumo').val();
    data.ID_Local               = $('.cbo-local').val();
     */
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
            $('.cbo-nacionalidad').val(resp.IDNacionalidad);
            (resp.Sexo == 'M' ? $('#rd-masculino').prop('checked', true) : $('#rd-femenino').prop('checked', true));
            $('#txt-telefono').val(resp.Telefono);
            $('#txt-email').val(resp.Email);
            $('#txt-emailcorp').val(resp.Emailcorp);
            $('#txt-direccion').val(resp.Direccion);
            $('#txt-referencias').val(resp.Referencia);
            $('.cbo-estadocivil').val(resp.IDEstadocivil);
            $('.cbo-banco').val(resp.IDBanco);
            $('#txt-numcta').val(resp.Numcuenta);
            $('.cbo-regpension').val(resp.IDRegpension);
            (resp.Comision == 1 ? $('input:checkbox[name=chk-comision]').prop('checked', true) : $('input:checkbox[name=chk-comision]').prop('checked', false));
            $('#txt-cuspp').val(resp.Cuspp);
            $('.cbo-cargo').val(resp.IDCargo);
            $('#txt-remuneracion').val(resp.Remuneracion);
            $('#txt-recargoconsumo').val(resp.Recargoconsumo);
            $('.cbo-local').val(resp.IDLocal);

            $('#btn-update-personal').attr('data-idpersonal', resp.IDPersonal);

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
    data.txt_emailcorp          = $('#txt-emailcorp').val();
    data.txt_direccion          = $('#txt-direccion').val();
    data.txt_referencia         = $('#txt-referencias').val();
    data.ID_Estadocivil         = $('.cbo-estadocivil').val();
    data.ID_Banco               = $('.cbo-banco').val();
    data.txt_numcuenta          = $('#txt-numcta').val();
    data.ID_Regpension          = $('.cbo-regpension').val();
    data.txt_comision           = ($('input:checkbox[name=chk-comision]:checked') ? 1 : 0);
    data.txt_cussp              = $('#txt-cuspp').val();
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
    $('.cbo-tipodoc').html('<option value="0">Seleccione documento</option>');
    $('.cbo-nacionalidad').html('<option value="0">Seleccione nacionalidad</option>');
    $('.cbo-estadocivil').html('<option value="0">Seleccione estado civil</option>');
    $('.cbo-banco').html('<option value="0">Seleccione banco</option>');
    $('.cbo-regpension').html('<option value="0">Seleccione régimen pensionario</option>');
    $('.cbo-cargo').html('<option value="0">Seleccione cargo</option>');
    $('.cbo-tcontrato').html('<option value="0">Seleccione contrato</option>');
    $('.cbo-local').html('<option value="0">Seleccione local</option>');
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
                    '<a class="btn btn-update-personal" data-idpersonal="'+data[i].IDPersonal+'"><i class="fa fa-edit"></i></a>'+
                    '<a class="btn btn-delete-personal" data-idpersonal="'+data[i].IDPersonal+'"><i class="fa fa-trash"></i></a>'
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