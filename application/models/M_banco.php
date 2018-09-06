<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_banco extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_banco()
  {
    $query=$this->db->query("CALL sp_list_banco()");
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
public function insert_banco($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_banco('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_banco($ID_Banco)
  {
    $query=$this->db->query("CALL sp_get_banco($ID_Banco)");
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
public function update_banco($data)
  {
    $ID_Banco         = $data['ID_Banco'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_banco($ID_Banco, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_banco($data)
  {
    $ID_Banco    = $data['ID_Banco'];       

    $query=$this->db->query("CALL sp_delete_banco($ID_Banco)");
  }
/************************************************************************************************************************************************************************/
}