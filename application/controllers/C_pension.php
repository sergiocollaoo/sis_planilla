<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_pension extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_pension');
    }
/************************************************************************************************************************************************************************/
public function pension()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('pension.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_pension()
    {
        $list_pension=$this->m_pension->list_pension();
        echo json_encode($list_pension);
    }
/************************************************************************************************************************************************************************/    
public function insert_pension()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_pension=$this->m_pension->insert_pension($data);
        echo json_encode($insert_pension);
    }
/************************************************************************************************************************************************************************/
public function get_pension()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_pension=$this->m_pension->get_pension($data['ID_Pension']);
        echo json_encode($get_pension);
    }
/************************************************************************************************************************************************************************/
public function update_pension()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_pension=$this->m_pension->update_pension($data);
        echo json_encode($update_pension);
    }
/************************************************************************************************************************************************************************/
public function delete_pension()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_pension=$this->m_pension->delete_pension($data);
	    echo json_encode($delete_pension);
	}
/************************************************************************************************************************************************************************/
}