<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_personal extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_personal()
  {
    $query=$this->db->query("CALL sp_list_personal()");
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
/*    $v_fechanacimiento  = $data['txt_fechanacimiento'];
    $ID_Nacionalidad    = $data['ID_Nacionalidad'];
    $v_sexo             = $data['txt_sexo'];
    $v_telefono         = $data['txt_telefono'];
    $v_email            = $data['txt_email'];
    $v_emailcorp        = $data['txt_emailcorp'];
    $v_direccion        = $data['txt_direccion'];
    $v_referencia       = $data['txt_referencia'];
    $ID_Estadocivil     = $data['ID_Estadocivil'];
    $ID_Banco           = $data['ID_Banco'];
    $v_numcuenta        = $data['txt_numcuenta'];
    $ID_Regpension      = $data['ID_Regpension'];
    $v_comision         = $data['txt_comision'];
    $v_cussp            = $data['txt_cussp'];
    $ID_Cargo           = $data['ID_Cargo'];
    $v_remuneracion     = $data['txt_remuneracion'];
    $v_recargoconsumo   = $data['txt_recargoconsumo'];
    $ID_Local           = $data['ID_Local'];*/
    
    $query=$this->db->query("CALL sp_insert_personal('$ID_Numdoc', '$ID_Documento', '$v_apellidos', '$v_nombres')");
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
    $v_emailcorp        = $data['txt_emailcorp'];
    $v_direccion        = $data['txt_direccion'];
    $v_referencia       = $data['txt_referencia'];
    $ID_Estadocivil     = $data['ID_Estadocivil'];
    $ID_Banco           = $data['ID_Banco'];
    $v_numcuenta        = $data['txt_numcuenta'];
    $ID_Regpension      = $data['ID_Regpension'];
    $v_comision         = $data['txt_comision'];
    $v_cussp            = $data['txt_cussp'];
    $ID_Cargo           = $data['ID_Cargo'];
    $v_remuneracion     = $data['txt_remuneracion'];
    $v_recargoconsumo   = $data['txt_recargoconsumo'];
    $ID_Local           = $data['ID_Local'];

    $query=$this->db->query("CALL sp_update_personal('$ID_Personal','$ID_Numdoc', '$ID_Documento', '$v_apellidos', '$v_nombres', '$v_fechanacimiento', '$ID_Nacionalidad', '$v_sexo', '$v_telefono', '$v_email', '$v_emailcorp', '$v_direccion', '$v_referencia', '$ID_Estadocivil', '$ID_Banco', '$v_numcuenta', '$ID_Regpension', '$v_comision', '$v_cussp', '$ID_Cargo', '$v_remuneracion', '$v_recargoconsumo', '$ID_Local')");   
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
    $v_fechai     = $data['txt_fechai'];
    $v_fechac     = $data['txt_fechac'];
    
    $query=$this->db->query("CALL sp_insert_vinculolaboral('$ID_Personalv', '$ID_Tcontrato', '$v_fechai','$v_fechac')");   
  }
/************************************************************************************************************************************************************************/
}