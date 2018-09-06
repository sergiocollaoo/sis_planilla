<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_estadocivil extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_estadocivil');
    }
/************************************************************************************************************************************************************************/
public function estadocivil()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('estadocivil.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_estadocivil()
    {
        $list_estadocivil=$this->m_estadocivil->list_estadocivil();
        echo json_encode($list_estadocivil);
    }
/************************************************************************************************************************************************************************/    
public function insert_estadocivil()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_estadocivil=$this->m_estadocivil->insert_estadocivil($data);
        echo json_encode($insert_estadocivil);
    }
/************************************************************************************************************************************************************************/
public function get_estadocivil()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_estadocivil=$this->m_estadocivil->get_estadocivil($data['ID_Civil']);
        echo json_encode($get_estadocivil);
    }
/************************************************************************************************************************************************************************/
public function update_estadocivil()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_estadocivil=$this->m_estadocivil->update_estadocivil($data);
        echo json_encode($update_estadocivil);
    }
/************************************************************************************************************************************************************************/
public function delete_estadocivil()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_estadocivil=$this->m_estadocivil->delete_estadocivil($data);
	    echo json_encode($delete_estadocivil);
	}
/************************************************************************************************************************************************************************/ 
}