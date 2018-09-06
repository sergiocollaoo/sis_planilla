<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_tipoid extends CI_Model {
/************************************************************************************************************************************************************************/
public function list_tipodocumento()
  {
    $query=$this->db->query("CALL sp_list_tipodocumento()");
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
public function insert_tipodocumento($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_tipodocumento('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_tipodocumento($ID_Documento)
  {
    $query=$this->db->query("CALL sp_get_tipodocumento($ID_Documento)");
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
public function update_tipodocumento($data)
  {
    $ID_Documento     = $data['ID_Documento'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_tipodocumento($ID_Documento, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_tipodocumento($data)
  {
    $ID_Documento    = $data['ID_Documento'];       

    $query=$this->db->query("CALL sp_delete_tipodocumento($ID_Documento)");
  }
/************************************************************************************************************************************************************************/
}