<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_cargo extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_cargo');
    }
/************************************************************************************************************************************************************************/
public function cargo()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('cargo.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_cargo()
    {
        $list_cargo=$this->m_cargo->list_cargo();
        echo json_encode($list_cargo);
    }
/************************************************************************************************************************************************************************/    
public function insert_cargo()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_cargo=$this->m_cargo->insert_cargo($data);
        echo json_encode($insert_cargo);
    }
/************************************************************************************************************************************************************************/
public function get_cargo()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_cargo=$this->m_cargo->get_cargo($data['ID_Cargo']);
        echo json_encode($get_cargo);
    }
/************************************************************************************************************************************************************************/
public function update_cargo()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_cargo=$this->m_cargo->update_cargo($data);
        echo json_encode($update_cargo);
    }
/************************************************************************************************************************************************************************/
public function delete_cargo()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_cargo=$this->m_cargo->delete_cargo($data);
	    echo json_encode($delete_cargo);
	}
/************************************************************************************************************************************************************************/ 
}