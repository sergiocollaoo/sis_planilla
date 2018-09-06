<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_cargo extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_cargo()
  {
    $query=$this->db->query("CALL sp_list_cargo()");
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
public function insert_cargo($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    $v_funcion           = $data['txt_funcion'];
    
    $query=$this->db->query("CALL sp_insert_cargo('$v_descripcion', '$v_funcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_cargo($ID_Cargo)
  {
    $query=$this->db->query("CALL sp_get_cargo($ID_Cargo)");
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
public function update_cargo($data)
  {
    $ID_Cargo         = $data['ID_Cargo'];
    $v_descripcion    = $data['txt_descripcion'];
    $v_funcion           = $data['txt_funcion'];

    $query=$this->db->query("CALL sp_update_cargo($ID_Cargo, '$v_descripcion', '$v_funcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_cargo($data)
  {
    $ID_Cargo    = $data['ID_Cargo'];       

    $query=$this->db->query("CALL sp_delete_cargo($ID_Cargo)");
  }
/************************************************************************************************************************************************************************/
}