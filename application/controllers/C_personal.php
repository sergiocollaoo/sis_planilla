<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_personal extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_personal');
    }
/************************************************************************************************************************************************************************/
public function personal()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('personal.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_personal()
    {
        $list_personal=$this->m_personal->list_personal();
        echo json_encode($list_personal);
    }
/************************************************************************************************************************************************************************/    
public function insert_personal()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_personal=$this->m_personal->insert_personal($data);
        echo json_encode($insert_personal);
    }
/************************************************************************************************************************************************************************/
public function get_personal()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_personal=$this->m_personal->get_personal($data['ID_Personal']);
        echo json_encode($get_personal);
    }
/************************************************************************************************************************************************************************/
public function update_personal()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_personal=$this->m_personal->update_personal($data);
        echo json_encode($update_personal);
    }
/************************************************************************************************************************************************************************/
public function delete_personal()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_personal=$this->m_personal->delete_personal($data);
	    echo json_encode($delete_personal);
	}
/************************************************************************************************************************************************************************/
public function get_datoscombo()
    {
        $get_datoscombo=$this->m_personal->get_datoscombo();
        echo json_encode($get_datoscombo);
    }
/************************************************************************************************************************************************************************/
public function list_vinculolaboral()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $list_vinculolaboral=$this->m_personal->list_vinculolaboral($data);
        echo json_encode($list_vinculolaboral);
    }
/************************************************************************************************************************************************************************/    
public function insert_vinculolaboral()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_vinculolaboral=$this->m_personal->insert_vinculolaboral($data);
        echo json_encode($insert_vinculolaboral);
    }
/************************************************************************************************************************************************************************/ 
}