<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_nacionalidad extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_nacionalidad()
  {
    $query=$this->db->query("CALL sp_list_nacionalidad()");
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
public function insert_nacionalidad($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_nacionalidad('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_nacionalidad($ID_Nacionalidad)
  {
    $query=$this->db->query("CALL sp_get_nacionalidad($ID_Nacionalidad)");
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
public function update_nacionalidad($data)
  {
    $ID_Nacionalidad    = $data['ID_Nacionalidad'];
    $v_descripcion      = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_nacionalidad($ID_Nacionalidad, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_nacionalidad($data)
  {
    $ID_Nacionalidad    = $data['ID_Nacionalidad'];       

    $query=$this->db->query("CALL sp_delete_nacionalidad($ID_Nacionalidad)");
  }
/************************************************************************************************************************************************************************/
}