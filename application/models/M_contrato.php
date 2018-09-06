<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_contrato extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_contrato()
  {
    $query=$this->db->query("CALL sp_list_contrato()");
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
public function insert_contrato($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    $v_fondo             = $data['txt_fondo'];
    $v_seguro            = $data['txt_seguro'];
    $v_comisionsf        = $data['txt_comisionsf'];
    $v_comisionm         = $data['txt_comisionm'];
    
    $query=$this->db->query("CALL sp_insert_contrato('$v_descripcion', '$v_fondo', '$v_seguro', '$v_comisionsf','$v_comisionm')");   
  }
/************************************************************************************************************************************************************************/
public function get_contrato($ID_contrato)
  {
    $query=$this->db->query("CALL sp_get_contrato($ID_contrato)");
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
public function update_contrato($data)
  {
    $ID_contrato         = $data['ID_contrato'];
    $v_descripcion      = $data['txt_descripcion'];
    $v_fondo            = $data['txt_fondo'];
    $v_seguro           = $data['txt_seguro'];
    $v_comisionsf       = $data['txt_comisionsf'];
    $v_comisionm        = $data['txt_comisionm'];

    $query=$this->db->query("CALL sp_update_contrato($ID_contrato, '$v_descripcion', '$v_fondo', '$v_seguro', '$v_comisionsf','$v_comisionm')");   
  }
/************************************************************************************************************************************************************************/
public function delete_contrato($data)
  {
    $ID_contrato    = $data['ID_contrato'];       

    $query=$this->db->query("CALL sp_delete_contrato($ID_contrato)");
  }
/************************************************************************************************************************************************************************/
public function get_personalcombo()
  {
      $query=$this->db->query("CALL sp_get_personalcombo()");
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
}