<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_local extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_local()
  {
    $query=$this->db->query("CALL sp_list_local()");
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
public function insert_local($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_local('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_local($ID_Local)
  {
    $query=$this->db->query("CALL sp_get_local($ID_Local)");
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
public function update_local($data)
  {
    $ID_Local         = $data['ID_Local'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_local($ID_Local, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_local($data)
  {
    $ID_Local    = $data['ID_Local'];       

    $query=$this->db->query("CALL sp_delete_local($ID_Local)");
  }
/************************************************************************************************************************************************************************/
}