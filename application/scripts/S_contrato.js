$(document).ready(init_contrato);
/******************************************************************************************************************************************************************************/
function init_contrato()
{
    /*   alert($.trim(numeroALetras(1.50, {
        plural: 'con 00/100 Soles',
        singular: 'con 00/100 Sol',
        centPlural: 'Soles',
        centSingular: 'Sol'
    })));*/
    
    $('.simple-select2-sm').select2({
        theme: 'bootstrap4',
        /*containerCssClass: ':all:',*/
        placeholder: "Seleccionar personal",
        allowClear: true
    });

    $('.cbo-personalcontrato').change(function(){
        $('.cbo-cargo').val($('option:selected',this).attr('cargo'));
        $('#txt-remucontrato').val($('option:selected',this).attr('remu'));
        $('#txt-remuconletra').val($.trim(numeroALetras(930.50, {
            plural: 'con 00/100 Soles',
            singular: 'con 00/100 Sol',
            centPlural: 'Soles',
            centSingular: 'Sol'
        })));
    })

    fnc_get_personalcombo();
}
/******************************************************************************************************************************************************************************/
function fnc_get_personalcombo()
{
    $('.cbo-personalcontrato').html('<option value="0">Seleccione personal</option>');
    
    $.getJSON("get_personalcombo", function (data){ 
        $.each(data, function(index, val){
            if(val.Tipo == 1){
                $('.cbo-personalcontrato').append('<option value="'+val.ID+'" dni="'+val.DNI+'" direccion="'+val.Direccion+'" distrito="'+val.Distrito+'" cargo="'+val.Cargo+'" area="'+val.Area+'" funcion="'+val.Funcion+'" fechai="'+val.Fechai+'" fechac="'+val.Fechac+'" remu="'+val.Remuneracion+'">'+val.Personal+'</option>');
            }
        })
    });
}