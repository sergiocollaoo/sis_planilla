<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_estadocivil extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_estadocivil()
  {
    $query=$this->db->query("CALL sp_list_estadocivil()");
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
public function insert_estadocivil($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_estadocivil('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_estadocivil($ID_Civil)
  {
    $query=$this->db->query("CALL sp_get_estadocivil($ID_Civil)");
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
public function update_estadocivil($data)
  {
    $ID_Civil         = $data['ID_Civil'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_estadocivil($ID_Civil, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_estadocivil($data)
  {
    $ID_Civil    = $data['ID_Civil'];       

    $query=$this->db->query("CALL sp_delete_estadocivil($ID_Civil)");
  }
/************************************************************************************************************************************************************************/
}