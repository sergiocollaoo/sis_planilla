<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_plame extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_plame()
  {
    $query=$this->db->query("CALL sp_list_conceptosplame()");
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
public function get_plame($data)
  {
    $ID_Concepto  = $data['ID_Concepto'];
    $query=$this->db->query("CALL sp_get_conceptosplame('$ID_Concepto')");
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
public function insert_plamedetalle($data)
  {
    $ID_chkplame        = $data['ID_chkplame'];
    $v_texto            = $data['txt_texto'];
    
    $query=$this->db->query("CALL sp_insert_prueba('$ID_chkplame','$v_texto')");   
  }
/************************************************************************************************************************************************************************/
public function update_plame($data)
  {
    $ID_Concepto      = $data['ID_Concepto'];
    $v_descripcion    = $data['txt_descripcion'];
    $v_categoria      = $data['txt_categoria'];

    $query=$this->db->query("CALL sp_update_conceptosplame('$ID_Concepto','$v_descripcion', '$v_categoria')");   
  }
/************************************************************************************************************************************************************************/
public function delete_plame($data)
  {
    $ID_Concepto    = $data['ID_Concepto'];       

    $query=$this->db->query("CALL sp_delete_conceptosplame($ID_Concepto)");
  }
/************************************************************************************************************************************************************************/
}