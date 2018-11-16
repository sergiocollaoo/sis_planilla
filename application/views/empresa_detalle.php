<div id="content">
  <nav class="navbar header-page">
    <div class="d-flex flex-row">
      <span class="breadcrumb-item">
        <a href="index.html"><i class="icon-home1"></i>Inicio</a>
      </span>
      <span class="breadcrumb-item">
        <i class=" icon-building"></i>Empresa
      </span>
    </div>
    <div class="d-flex flex-row-reverse">
      <button type="button" class="btn btn-outline-secondary" id="sidebarCollapse">
        <i class="icon-menu" aria-hidden="true"></i>
      </button>
    </div>
  </nav>

<div id="div-detalle-empresa" id-empresa="">
  <div class="row text-center">
    <div class="col-sm-12">
      <h1 id="name-empresa"></h1>
    </div>
    <div class="col-sm-12">
      <h3 id="ruc-empresa"></h3>
    </div>
  </div>
  <hr>
  <div class="row justify-content-md-center">
    <div class="col-sm-3 text-center">
      <a id="menu-maestro" href="javascript:void(0)" data-toggle="modal" data-target="#maestros">
        <img src="assets/images/menu/m01.png" alt="">
        <div>Maestros</div>
      </a>
    </div>
    <div class="col-sm-3 text-center">
      <a id="menu-ctrlpersonal" href="javascript:void(0)" data-toggle="modal" data-target="#control">
        <img src="assets/images/menu/m02.png" alt="">
        <div>Control de Personal</div>
      </a>
    </div>
    <div class="col-sm-3 text-center">
      <a id="menu-Planilla" href="javascript:void(0)" data-toggle="modal" data-target="#planilla">
        <img src="assets/images/menu/m03.png" alt="">
        <div>Planilla</div>
      </a>
    </div>
  </div>
  <br>
  <div class="row justify-content-md-center">
    <div class="col-sm-3 text-center">
      <a id="menu-reportes" href="javascript:void(0)" data-toggle="modal" data-target="#reportes">
        <img src="assets/images/menu/m04.png" alt="">
        <div>Reportes</div>
      </a>
    </div>
    <div class="col-sm-3 text-center">
      <a id="menu-alertas" href="javascript:void(0)" data-toggle="modal" data-target="#alertas">
        <img src="assets/images/menu/m05.png" alt="">
        <div>Alertas</div>
      </a>
    </div>
  </div>
</div>

<!-- Modal Maestros-->
<div class="modal fade" id="maestros" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Maestros</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="list-group">
              <a href="Personal" class="list-group-item list-group-item-action">Personal</a>
              <a href="DocumentoIdentidad" class="list-group-item list-group-item-action">Documento de Identificación</a>
              <a href="Nacionalidad" class="list-group-item list-group-item-action">Nacionalidad</a>
              <a href="Local" class="list-group-item list-group-item-action">Establecimiento</a>
              <a href="Cargo" class="list-group-item list-group-item-action">Cargo</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="list-group">
              <a href="RegimenPensionario" class="list-group-item list-group-item-action">Régimen Pensionario</a>
              <a href="Banco" class="list-group-item list-group-item-action">Bano</a>
              <a href="ConceptosPlame" class="list-group-item list-group-item-action">Concpetos Plame</a>
              <a href="Productos" class="list-group-item list-group-item-action">Productos y Menajería</a>
              <a href="TiposContrato" class="list-group-item list-group-item-action">Tipos de contratos</a>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<!-- Modal Control de Personal-->
<div class="modal fade" id="control" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Control de Personal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="list-group">
              <a href="asistencia" class="list-group-item list-group-item-action">Control de Asistencia</a>
              <a href="#" class="list-group-item list-group-item-action">Control de Ingresos</a>
              <a href="#" class="list-group-item list-group-item-action">Control de Descuentos</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action">Control de Vacaciones</a>
              <a href="#" class="list-group-item list-group-item-action">Control Documentario</a>
              <a href="#" class="list-group-item list-group-item-action">Control de Pagos</a>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<!-- Modal Planilla-->
<div class="modal fade" id="planilla" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Planilla</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="list-group">
              <a href="Personal" class="list-group-item list-group-item-action">Remuneración</a>
              <a href="DocumentoIdentidad" class="list-group-item list-group-item-action">Vacaciones</a>
              <a href="Nacionalidad" class="list-group-item list-group-item-action">Gratificación</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="list-group">
              <a href="RegimenPensionario" class="list-group-item list-group-item-action">CTS</a>
              <a href="Banco" class="list-group-item list-group-item-action">Utilidades</a>
              <a href="ConceptosPlame" class="list-group-item list-group-item-action">Liquidación</a>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<!-- Modal Reportes-->
<div class="modal fade" id="reportes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Reportes</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <div class="list-group">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="list-group">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

<!-- Modal Alertas-->
<div class="modal fade" id="alertas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Alertas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="list-group">
              <a href="Personal" class="list-group-item list-group-item-action">Vencimiento de Contratos</a>
              <a href="Local" class="list-group-item list-group-item-action">Vencimiento de Pago</a>
              <a href="Cargo" class="list-group-item list-group-item-action">Vacaciones</a>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>