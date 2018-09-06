<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_planilla extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_planilla');
    }
/************************************************************************************************************************************************************************/
public function reporteplanilla()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('planilla.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_planilla()
    {
        $list_planilla=$this->m_planilla->list_planilla();
        echo json_encode($list_planilla);
    }
/************************************************************************************************************************************************************************/    
public function insert_planilla()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_planilla=$this->m_planilla->insert_planilla($data);
        echo json_encode($insert_planilla);
    }
/************************************************************************************************************************************************************************/
public function get_planilla()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_planilla=$this->m_planilla->get_planilla($data['ID_planilla']);
        echo json_encode($get_planilla);
    }
/************************************************************************************************************************************************************************/
public function update_planilla()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_planilla=$this->m_planilla->update_planilla($data);
        echo json_encode($update_planilla);
    }
/************************************************************************************************************************************************************************/
public function delete_planilla()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_planilla=$this->m_planilla->delete_planilla($data);
	    echo json_encode($delete_planilla);
	}
/************************************************************************************************************************************************************************/
public function get_inicioboletacombo()
    {
        $get_inicioboletacombo=$this->m_planilla->get_inicioboletacombo();
        echo json_encode($get_inicioboletacombo);
    }
/************************************************************************************************************************************************************************/
public function list_remuneracion()
    {
        $list_remuneracion=$this->m_planilla->list_remuneracion();
        echo json_encode($list_remuneracion);
    }
}