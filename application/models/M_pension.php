<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_pension extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_pension()
  {
    $query=$this->db->query("CALL sp_list_pension()");
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
public function insert_pension($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    $v_fondo             = $data['txt_fondo'];
    $v_seguro            = $data['txt_seguro'];
    $v_comisionsf        = $data['txt_comisionsf'];
    $v_comisionm         = $data['txt_comisionm'];
    
    $query=$this->db->query("CALL sp_insert_pension('$v_descripcion', '$v_fondo', '$v_seguro', '$v_comisionsf','$v_comisionm')");   
  }
/************************************************************************************************************************************************************************/
public function get_pension($ID_Pension)
  {
    $query=$this->db->query("CALL sp_get_pension($ID_Pension)");
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
public function update_pension($data)
  {
    $ID_Pension         = $data['ID_Pension'];
    $v_descripcion      = $data['txt_descripcion'];
    $v_fondo            = $data['txt_fondo'];
    $v_seguro           = $data['txt_seguro'];
    $v_comisionsf       = $data['txt_comisionsf'];
    $v_comisionm        = $data['txt_comisionm'];

    $query=$this->db->query("CALL sp_update_pension($ID_Pension, '$v_descripcion', '$v_fondo', '$v_seguro', '$v_comisionsf','$v_comisionm')");   
  }
/************************************************************************************************************************************************************************/
public function delete_pension($data)
  {
    $ID_Pension    = $data['ID_Pension'];       

    $query=$this->db->query("CALL sp_delete_pension($ID_Pension)");
  }
/************************************************************************************************************************************************************************/
}