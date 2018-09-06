<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_local extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_local');
    }
/************************************************************************************************************************************************************************/
public function local()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('local.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_local()
    {
        $list_local=$this->m_local->list_local();
        echo json_encode($list_local);
    }
/************************************************************************************************************************************************************************/    
public function insert_local()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_local=$this->m_local->insert_local($data);
        echo json_encode($insert_local);
    }
/************************************************************************************************************************************************************************/
public function get_local()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_local=$this->m_local->get_local($data['ID_Local']);
        echo json_encode($get_local);
    }
/************************************************************************************************************************************************************************/
public function update_local()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_local=$this->m_local->update_local($data);
        echo json_encode($update_local);
    }
/************************************************************************************************************************************************************************/
public function delete_local()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_local=$this->m_local->delete_local($data);
	    echo json_encode($delete_local);
	}
/************************************************************************************************************************************************************************/ 
}