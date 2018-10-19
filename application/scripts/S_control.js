$(document).ready(init_control);
/******************************************************************************************************************************************************************************/
function init_control()
{
    $('#tbt-tareo').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });

    fnc_list_controlasistencia();
}
/******************************************************************************************************************************************************************************/
function fnc_list_controlasistencia()
{
    var data={};
    data.dia_entrada  = '2018-10-01';
    $.ajax({
        type: "POST",
        url: "list_controlasistencia",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        beforeSend: function () 
        {
        },
        success: function (data)
        {
            
            $('#tbt-tareo').DataTable().row().clear().draw(false);

            for (var i = 0; i<data.length;i++) 
            {
                $('#tbt-tareo').DataTable().row.add(
                [i+1,
                resp.dia_mes,
                data[i].Estado == 1 ?'<span class="badge badge-pill badge-success">Activo</span>' : '<span class="badge badge-pill badge-secondary">Inactivo</span>',
                '<a class="btn btn-update-banco" data-idbanco="'+data[i].IDBanco+'" data-toggle="modal" data-target="#Modal-banco"><i class="fa fa-edit"></i></a>'+
                '<a class="btn btn-delete-banco" data-idbanco="'+data[i].IDBanco+'"><i class="fa fa-trash"></i></a>'
                ]).draw(false);
            }     
        },
        complete: function()
        {
            
        },
        error: function(resp)
        {
        }
    });
} 