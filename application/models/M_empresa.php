<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class M_empresa extends CI_Model {
/******************************************************************************************************************************************************************************/
public function list_empresa()
  {
    $query=$this->db->query("CALL sp_list_empresa()");
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
public function insert_empresa($data)
  {
    $v_ruc    = $data['txt_ruc'];
    $v_rs     = $data['txt_rs'];
    
    $query=$this->db->query("CALL sp_insert_empresa('$v_ruc', '$v_rs')");   
  }
/************************************************************************************************************************************************************************/
public function get_empresa($ID_Empresa)
  {
    // $query=$this->db->query("CALL sp_get_empresa($ID_Empresa)");
    $this->db->select('e.IDEmpresa, e.RUC, e.RS, e.Estado');
    $this->db->from('dba_empresa e');
    $this->db->where('e.IDEmpresa',$ID_Empresa);
    $consulta = $this->db->get();
    return $consulta->result();
    // if ($query->num_rows()==1)
    // {
    //   return $query->row();
    // }
    // else
    // {
    //   return false; 
    // } 
  }
/************************************************************************************************************************************************************************/
public function update_empresa($data)
  {
    $ID_empresa         = $data['ID_empresa'];
    $v_descripcion    = $data['txt_descripcion'];

    $query=$this->db->query("CALL sp_update_empresa($ID_empresa, '$v_descripcion')");   
  }
/************************************************************************************************************************************************************************/
public function delete_empresa($data)
  {
    $ID_empresa    = $data['ID_empresa'];       

    $query=$this->db->query("CALL sp_delete_empresa($ID_empresa)");
  }
/************************************************************************************************************************************************************************/
}