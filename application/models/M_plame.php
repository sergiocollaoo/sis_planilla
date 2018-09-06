<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_plame extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_plamei()
  {
    $query=$this->db->query("CALL sp_list_conceptosplamei()");
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
public function list_plamed()
  {
    $query=$this->db->query("CALL sp_list_conceptosplamed()");
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
public function insert_plame($data)
  {
    $ID_Concepto        = $data['ID_Concepto'];
    $v_descripcion      = $data['txt_descripcion'];
    $v_categoria        = $data['txt_categoria'];
    
    $query=$this->db->query("CALL sp_insert_conceptosplame('$ID_Concepto','$v_descripcion', '$v_categoria')");   
  }
/************************************************************************************************************************************************************************/
public function get_plame($ID_Concepto)
  {
    $query=$this->db->query("CALL sp_get_conceptosplame('$ID_Concepto')");
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