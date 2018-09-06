$(document).ready(init_funciones);
/** *************************************************************************************************************************************************/
function init_funciones()
{
    $('.modal').modal({
        show: false,
        backdrop: 'static',
        keyboard: false
    });

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $(".sidebar2").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
}
/****************************************************************************************************************************************************/
function stringToDate(_date,_format,_delimiter)
{
    var formatLowerCase=_format.toLowerCase();
    var formatItems=formatLowerCase.split(_delimiter);
    var dateItems=_date.split(_delimiter);
    var monthIndex=formatItems.indexOf("mm");
    var dayIndex=formatItems.indexOf("dd");
    var yearIndex=formatItems.indexOf("yyyy");
    var month=parseInt(dateItems[monthIndex]);
    month-=1;
    var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    return formatedDate;
}
/****************************************************************************************************************************************************/
function fnc_limpiar_campos () 
{
    $('input[type="text"],input[type="password"],input[type="email"],input[type="file"],textarea').val('');
    $('input[type="checkbox"]').removeAttr('checked');
}
/****************************************************************************************************************************************************/
function fnc_select2 (_select,_placeholder)
{
    _select.html('<option></option>');
    _select.select2({
        placeholder: _placeholder,
        allowClear: true
    });

}
/****************************************************************************************************************************************************/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
/****************************************************************************************************************************************************/
var numeroALetras = (function() {
// Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
    function Unidades(num){

        switch(num)
        {
            case 1: return 'un';
             /*   if (num = 1)
                    return 'UN';
                return 'UN';*/
            case 2: return 'dos';
            case 3: return 'tres';
            case 4: return 'cuatro';
            case 5: return 'cinco';
            case 6: return 'seis';
            case 7: return 'siete';
            case 8: return 'ocho';
            case 9: return 'nueve';
        }

        return '';
    }//Unidades()

    function Decenas(num){

        let decena = Math.floor(num/10);
        let unidad = num - (decena * 10);

        switch(decena)
        {
            case 1:
                switch(unidad)
                {
                    case 0: return 'diez';
                    case 1: return 'once';
                    case 2: return 'doce';
                    case 3: return 'trece';
                    case 4: return 'catorce';
                    case 5: return 'quince';
                    default: return 'dieci' + Unidades(unidad);
                }
            case 2:
                switch(unidad)
                {
                    case 0: return 'veinte';
                    default: return 'veinti' + Unidades(unidad);
                }
            case 3: return DecenasY('treinta', unidad);
            case 4: return DecenasY('cuarenta', unidad);
            case 5: return DecenasY('cincuenta', unidad);
            case 6: return DecenasY('sesenta', unidad);
            case 7: return DecenasY('setenta', unidad);
            case 8: return DecenasY('ochenta', unidad);
            case 9: return DecenasY('noventa', unidad);
            case 0: return Unidades(unidad);
        }
    }//Unidades()

    function DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + ' y ' + Unidades(numUnidades)

        return strSin;
    }//DecenasY()

    function Centenas(num) {
        let centenas = Math.floor(num / 100);
        let decenas = num - (centenas * 100);

        switch(centenas)
        {
            case 1:
                if (decenas > 0)
                    return 'ciento ' + Decenas(decenas);
                return 'cien';
            case 2: return 'doscientos ' + Decenas(decenas);
            case 3: return 'trescientos ' + Decenas(decenas);
            case 4: return 'cuatrocientos ' + Decenas(decenas);
            case 5: return 'quinientos ' + Decenas(decenas);
            case 6: return 'seiscientos ' + Decenas(decenas);
            case 7: return 'sietecientos ' + Decenas(decenas);
            case 8: return 'ochocientos ' + Decenas(decenas);
            case 9: return 'novecientos ' + Decenas(decenas);
        }

        return Decenas(decenas);
    }//Centenas()

    function Seccion(num, divisor, strSingular, strPlural) {
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let letras = '';

        if (cientos > 0)
            if (cientos > 1)
                letras = Centenas(cientos) + ' ' + strPlural;
            else
                letras = strSingular;

        if (resto > 0)
            letras += '';

        return letras;
    }//Seccion()

    function Miles(num) {
        let divisor = 1000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMiles = Seccion(num, divisor, 'un mil', 'mil');
        let strCentenas = Centenas(resto);

        if(strMiles == '')
            return strCentenas;

        return strMiles + ' ' + strCentenas;
    }//Miles()

    function Millones(num) {
        let divisor = 1000000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMillones = Seccion(num, divisor, 'un millon', 'millones');
        let strMiles = Miles(resto);

        if(strMillones == '')
            return strMiles;

        return strMillones + ' ' + strMiles;
    }//Millones()

    return function NumeroALetras(num, currency) {
        currency = currency || {};
        let data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: ("00" + ((Math.round(num * 100)) - (Math.floor(num) * 100))).substr(-2,2),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || '',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: currency.singular || '', //'PESO', 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: currency.centPlural || '',
            letrasMonedaCentavoSingular: currency.centSingular || ''
        };

        if (data.centavos > 0) {
            data.letrasCentavos = 'con ' + (function () {
                    if (data.centavos == 1)
                        return String(data.centavos) + '/100 ' + data.letrasMonedaCentavoSingular;
                    else
                        return String(data.centavos) + '/100 ' + data.letrasMonedaCentavoPlural;
                })();
        };

        if(data.enteros == 0)
            return 'cero ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        if (data.enteros == 1)
            return 'uno ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
            /*return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;*/
        else
            return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    };

})();
/****************************************************************************************************************************************************/
