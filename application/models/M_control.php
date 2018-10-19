<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_control extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_controlasistencia($dia_entrada)
  {
    $query=$this->db->query("CALL sp_get_diastareo('$dia_entrada')");
    if ($query->num_rows()==1)
    {
      return $query->result();
    }
    else
    {
      return false;
    } 
  }
/******************************************************************************************************************************************************************************/
// public function insert_contrato($data)
//   {
//     $v_descripcion       = $data['txt_descripcion'];
//     $v_fondo             = $data['txt_fondo'];
//     $v_seguro            = $data['txt_seguro'];
//     $v_comisionsf        = $data['txt_comisionsf'];
//     $v_comisionm         = $data['txt_comisionm'];
    
//     $query=$this->db->query("CALL sp_insert_contrato('$v_descripcion', '$v_fondo', '$v_seguro', '$v_comisionsf','$v_comisionm')");   
//   }
/************************************************************************************************************************************************************************/
// public function get_contrato($ID_contrato)
//   {
//     $query=$this->db->query("CALL sp_get_contrato($ID_contrato)");
//     if ($query->num_rows()==1)
//     {
//       return $query->row();
//     }
//     else
//     {
//       return false; 
//     } 
//   }
/************************************************************************************************************************************************************************/
}