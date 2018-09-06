<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_producto extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_producto()
  {
    $query=$this->db->query("CALL sp_list_productos()");
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
public function list_menajeria()
  {
    $query=$this->db->query("CALL sp_list_menajeria()");
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
public function insert_promena($data)
  {
    $ID_Promena         = $data['ID_Promena'];
    $v_descripcion      = $data['txt_descripcion'];
    $v_precio           = $data['txt_precio'];
    $v_categoria        = $data['txt_categoria'];
    
    $query=$this->db->query("CALL sp_insert_promena('$ID_Promena','$v_descripcion', '$v_precio','$v_categoria')");   
  }
/************************************************************************************************************************************************************************/
public function get_promena($ID_Promena)
  {
    $query=$this->db->query("CALL sp_get_promena('$ID_Promena')");
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
public function update_promena($data)
  {
    $ID_Promena       = $data['ID_Promena'];
    $v_descripcion    = $data['txt_descripcion'];
    $v_precio         = $data['txt_precio'];
    $v_categoria      = $data['txt_categoria'];

    $query=$this->db->query("CALL sp_update_promena('$ID_Promena','$v_descripcion', '$v_precio','$v_categoria')");   
  }
/************************************************************************************************************************************************************************/
public function delete_promena($data)
  {
    $ID_Promena    = $data['ID_Promena'];       

    $query=$this->db->query("CALL sp_delete_promena($ID_Promena)");
  }
/************************************************************************************************************************************************************************/
}