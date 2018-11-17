<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_personal extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_personal($data)
  {
    $ID_Empresa  = $data['ID_Empresa'];

    $query=$this->db->query("CALL sp_list_personal($ID_Empresa)");
    if ($query->num_rows()>0)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
/******************************************************************************************************************************************************************************/
public function insert_personal($data)
  {
    $ID_Numdoc          = $data['ID_Numdoc'];
    $ID_Documento       = $data['ID_Documento'];
    $v_apellidos        = $data['txt_apellidos'];
    $v_nombres          = $data['txt_nombres'];
    $ID_Empresa         = $data['ID_Empresa'];
    
    $query=$this->db->query("CALL sp_insert_personal('$ID_Numdoc', '$ID_Documento', '$v_apellidos', '$v_nombres', $ID_Empresa)");
    if ($query->num_rows()>0)
    {
        return $query->row();
    }
    else
    {
        return false;
    }     
  }
/************************************************************************************************************************************************************************/
public function get_personal($ID_Personal)
  {
    $query=$this->db->query("CALL sp_get_personal($ID_Personal)");
    if ($query->num_rows()==1)
    {
      return $query->row();
    }
    else
    {
      return false; 
    } 
  }
/************************************************************************************************************************************************************************/
public function update_personal($data)
  {
    $ID_Personal        = $data['ID_Personal'];
    $ID_Numdoc          = $data['ID_Numdoc'];
    $ID_Documento       = $data['ID_Documento'];
    $v_apellidos        = $data['txt_apellidos'];
    $v_nombres          = $data['txt_nombres'];
    $v_fechanacimiento  = $data['txt_fechanacimiento'];
    $ID_Nacionalidad    = $data['ID_Nacionalidad'];
    $v_sexo             = $data['txt_sexo'];
    $v_telefono         = $data['txt_telefono'];
    $v_email            = $data['txt_email'];
    $ID_Distrito        = $data['ID_Distrito'];
    $v_urb              = $data['txt_urb'];
    $v_jiron            = $data['txt_jiron'];
    $v_pasaje           = $data['txt_pasaje'];
    $v_intofi           = $data['txt_intofi'];
    $v_direccion        = $data['txt_direccion'];
    $v_referencia       = $data['txt_referencia'];
    $ID_Distritodni     = $data['ID_Distritodni'];
    $v_direcciondni     = $data['txt_direcciondni'];
    $ID_Estadocivil     = $data['ID_Estadocivil'];
    $ID_Banco           = $data['ID_Banco'];
    $v_numcuenta        = $data['txt_numcuenta'];
    $ID_Regpension      = $data['ID_Regpension'];
    $v_comision         = $data['txt_comision'];
    $v_cussp            = $data['txt_cussp'];
    $ID_Tpago           = $data['ID_Tpago'];
    $v_remuneracion     = $data['txt_remuneracion'];
    $v_recargoconsumo   = $data['txt_recargoconsumo'];

    $query=$this->db->query("CALL sp_update_personal('$ID_Personal','$ID_Numdoc', '$ID_Documento', '$v_apellidos', '$v_nombres', '$v_fechanacimiento', '$ID_Nacionalidad', '$v_sexo', '$v_telefono', '$v_email', '$ID_Distrito', '$v_urb', '$v_jiron', '$v_pasaje', '$v_intofi', '$v_direccion','$v_referencia', '$ID_Distritodni', '$v_direcciondni', '$ID_Estadocivil', '$ID_Banco', '$v_numcuenta', '$ID_Regpension', '$v_comision', '$v_cussp', '$ID_Tpago', '$v_remuneracion', '$v_recargoconsumo')");   
  }
/************************************************************************************************************************************************************************/
public function delete_personal($data)
  {
    $ID_Personal    = $data['ID_Personal'];       

    $query=$this->db->query("CALL sp_delete_personal($ID_Personal)");
  }
/************************************************************************************************************************************************************************/
public function get_datoscombo()
  {
      $query=$this->db->query("CALL sp_get_datoscombo()");
      if ($query->num_rows()>0)
      {
          return $query->result();
      }
      else
      {
          return false;
      } 
  }
/******************************************************************************************************************************************************************************/
public function list_vinculolaboral($data)
  {
      $v_idpersonal  = $data['ID_Personal'];

      $query=$this->db->query("CALL sp_list_vinculolaboral($v_idpersonal)");
      if ($query->num_rows()>0)
      {
          return $query->result();
      }
      else
      {
          return false;
      }  
  }
/************************************************************************************************************************************************************************/
public function insert_vinculolaboral($data)
  {
    $ID_Personalv = $data['ID_Personalv'];
    $ID_Tcontrato = $data['ID_Tcontrato'];
    $ID_Local     = $data['ID_Local'];
    $ID_Cargo     = $data['ID_Cargo'];
    $v_fechai     = $data['txt_fechai'];
    $v_fechac     = $data['txt_fechac'];
    
    $query=$this->db->query("CALL sp_insert_vinculolaboral('$ID_Personalv', '$ID_Tcontrato', '$ID_Local', '$ID_Cargo', '$v_fechai','$v_fechac')");   
  }
/************************************************************************************************************************************************************************/
public function get_vinculolaboral($ID_Vinculo)
  {
    $query=$this->db->query("CALL sp_get_vinculolaboral($ID_Vinculo)");
    if ($query->num_rows()==1)
    {
      return $query->row();
    }
    else
    {
      return false;
    } 
  }
/************************************************************************************************************************************************************************/
public function update_vinculolaboral($data)
  {
    $ID_Vinculo   = $data['ID_Vinculo'];
    $ID_Local     = $data['ID_Local'];
    $ID_Cargo     = $data['ID_Cargo'];
    $ID_Tcontrato = $data['ID_Tcontrato'];
    $v_fechai     = $data['txt_fechai'];
    $v_fechac     = $data['txt_fechac'];

    $query=$this->db->query("CALL sp_update_vinculolaboral($ID_Vinculo, '$ID_Local', '$ID_Cargo', '$ID_Tcontrato', '$v_fechai','$v_fechac')");   
  }
/************************************************************************************************************************************************************************/
public function delete_vinculolaboral($data)
  {
    $ID_Vinculo    = $data['ID_Vinculo'];       

    $query=$this->db->query("CALL sp_delete_vinculolaboral($ID_Vinculo)");
  }
/************************************************************************************************************************************************************************/
  public function get_departamento()
  {
    $query=$this->db->query("CALL sp_get_departamento()");
    if ($query->num_rows()>0)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
/************************************************************************************************************************************************************************/
 public function get_provincia($id_departamento)
  {
    $query=$this->db->query("CALL sp_get_provincia($id_departamento)");
    if ($query->num_rows()>0)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
/************************************************************************************************************************************************************************/
 public function get_distrito($id_provincia)
  {
    $query=$this->db->query("CALL sp_get_distrito($id_provincia)");
    if ($query->num_rows()>0)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
/************************************************************************************************************************************************************************/
public function list_vinculoseguro($data)
  {
      $v_idpersonal  = $data['ID_Personal'];

      $query=$this->db->query("CALL sp_list_vinculoseguro($v_idpersonal)");
      if ($query->num_rows()>0)
      {
          return $query->result();
      }
      else
      {
          return false;
      }  
  }
/************************************************************************************************************************************************************************/
public function insert_vinculoseguro($data)
  {
    $ID_Personalv = $data['ID_Personalv'];
    $ID_Regsalud  = $data['ID_Regsalud'];
    $v_fechai     = $data['txt_fechai'];
    $v_fechac     = $data['txt_fechac'];
    $ID_Eps       = $data['ID_Eps'];
    
    $query=$this->db->query("CALL sp_insert_vinculoseguro('$ID_Personalv', '$ID_Regsalud', '$v_fechai','$v_fechac', '$ID_Eps')");   
  }
/************************************************************************************************************************************************************************/
public function get_vinculoseguro($ID_Seguro)
  {
    $query=$this->db->query("CALL sp_get_vinculoseguro($ID_Seguro)");
    if ($query->num_rows()==1)
    {
      return $query->row();
    }
    else
    {
      return false;
    } 
  }
/************************************************************************************************************************************************************************/
public function update_vinculoseguro($data)
  {
    $ID_Seguro    = $data['ID_Seguro'];
    $ID_Regsalud  = $data['ID_Regsalud'];
    $v_fechai     = $data['txt_fechai'];
    $v_fechac     = $data['txt_fechac'];
    $ID_Eps       = $data['ID_Eps'];

    $query=$this->db->query("CALL sp_update_vinculoseguro('$ID_Seguro', '$ID_Regsalud', '$v_fechai','$v_fechac', '$ID_Eps')");   
  }
/************************************************************************************************************************************************************************/
public function delete_vinculoseguro($data)
  {
    $ID_Seguro    = $data['ID_Seguro'];       

    $query=$this->db->query("CALL sp_delete_vinculoseguro($ID_Seguro)");
  }
/******************************************************************************************************************************************************************************/
}