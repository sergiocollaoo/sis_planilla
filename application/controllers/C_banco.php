<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_banco extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_banco');
    }
/************************************************************************************************************************************************************************/
public function banco()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('banco.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_banco()
    {
        $list_banco=$this->m_banco->list_banco();
        echo json_encode($list_banco);
    }
/************************************************************************************************************************************************************************/    
public function insert_banco()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_banco=$this->m_banco->insert_banco($data);
        echo json_encode($insert_banco);
    }
/************************************************************************************************************************************************************************/
public function get_banco()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_banco=$this->m_banco->get_banco($data['ID_Banco']);
        echo json_encode($get_banco);
    }
/************************************************************************************************************************************************************************/
public function update_banco()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_banco=$this->m_banco->update_banco($data);
        echo json_encode($update_banco);
    }
/************************************************************************************************************************************************************************/
public function delete_banco()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_banco=$this->m_banco->delete_banco($data);
	    echo json_encode($delete_banco);
	}
/************************************************************************************************************************************************************************/
}