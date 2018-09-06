<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_planilla extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_planilla()
  {
    $query=$this->db->query("CALL sp_list_planilla()");
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
public function insert_planilla($data)
  {
    $v_descripcion       = $data['txt_descripcion'];
    
    $query=$this->db->query("CALL sp_insert_planilla('$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function get_planilla($ID_planilla)
  {
    $query=$this->db->query("CALL sp_get_planilla($ID_planilla)");
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
public function update_planilla($data)
  {
    $ID_planilla         = $data['ID_planilla'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_planilla($ID_planilla, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_planilla($data)
  {
    $ID_planilla    = $data['ID_planilla'];       

    $query=$this->db->query("CALL sp_delete_planilla($ID_planilla)");
  }
/************************************************************************************************************************************************************************/
public function get_inicioboletacombo()
  {
      $query=$this->db->query("CALL sp_get_inicioboletacombo()");
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
public function list_remuneracion()
  {
    $query=$this->db->query("CALL sp_list_remuneracion()");
    if ($query->num_rows()>0)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
}