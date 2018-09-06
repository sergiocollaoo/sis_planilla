$(document).ready(init_planilla);
/******************************************************************************************************************************************************************************/
function init_planilla()
{
    $('#tbt-periodo').DataTable({
        "paging":   false,
        "ordering": false,
        "info":     false,
        "searching": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    $('.cbo-periodo').change(function(){
        if ($(this).val() == 0) {
            $('input[type=date]').attr('readonly', false);
            $('input[type=date]').val('');
            $('input[type=date]').attr('readonly', true);
            $('.cbo-tipoboleta').val(0);
        }else{
            var m = $(this).val()-1;
            var y = $('.txt-añoactual').val();
            var fechai = new Date(y,m,'01');
            var fechaf = new Date(y,m,'15');

            var fechaif = moment(fechai).format("YYYY-MM-DD");
            var fechaff = moment(fechaf).format("YYYY-MM-DD");
            
            $('.cbo-tipoboleta').val(1);
            $('#txt-fechai').val(fechaif)
            $('#txt-fechaf').val(fechaff)
        }
    });

    fnc_get_inicioboletacombo();
    fnc_list_remuneracion();
}
/******************************************************************************************************************************************************************************/
function fnc_get_inicioboletacombo()
{
    $('.cbo-periodo').html('<option value="0">Seleccione periodo</option>');
    $('.cbo-tipoboleta').html('<option value="0">Seleccione tipo de boleta</option>');
    $.getJSON("get_inicioboletacombo", function (data){ 
        $.each(data, function(index, val){
            if(val.Tipo == 1){
                $('.cbo-periodo').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
            else if(val.Tipo == 2) {
                $('.txt-añoactual').val(val.Descripcion);
            }
            else if(val.Tipo == 3){
                $('.cbo-tipoboleta').append('<option value="'+val.ID+'">'+val.Descripcion+'</option>');
            }
        })
    });
}
/******************************************************************************************************************************************************************************/
function fnc_list_remuneracion()
{
    $.getJSON("list_remuneracion", function (data){ 

    $('#tbt-periodo').DataTable().row().clear().draw(false);
    for (var i = 0; i<data.length;i++) 
    {
        $('#tbt-periodo').DataTable().row.add([i+1,
        data[i].IDPeriodo,
        data[i].IDTipoboleta,
        data[i].Anio,
        data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
        '<a class="btn btn-update-periodo" data-idperiodo="'+data[i].IDPeriodo+'" data-toggle="modal" data-target="#Modal-periodo"><i class="fa fa-edit"></i></a>'+
        '<a class="btn btn-delete-periodo" data-idperiodo="'+data[i].IDPeriodo+'"><i class="fa fa-trash"></i></a>'
        ]).draw(false);
    }     
    });
}