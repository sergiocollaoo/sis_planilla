<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_nacionalidad extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_nacionalidad');
    }
/************************************************************************************************************************************************************************/
public function nacionalidad()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('nacionalidad.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_nacionalidad()
    {
        $list_nacionalidad=$this->m_nacionalidad->list_nacionalidad();
        echo json_encode($list_nacionalidad);
    }
/************************************************************************************************************************************************************************/    
public function insert_nacionalidad()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_nacionalidad=$this->m_nacionalidad->insert_nacionalidad($data);
        echo json_encode($insert_nacionalidad);
    }
/************************************************************************************************************************************************************************/
public function get_nacionalidad()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_nacionalidad=$this->m_nacionalidad->get_nacionalidad($data['ID_Nacionalidad']);
        echo json_encode($get_nacionalidad);
    }
/************************************************************************************************************************************************************************/
public function update_nacionalidad()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_nacionalidad=$this->m_nacionalidad->update_nacionalidad($data);
        echo json_encode($update_nacionalidad);
    }
/************************************************************************************************************************************************************************/
public function delete_nacionalidad()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_nacionalidad=$this->m_nacionalidad->delete_nacionalidad($data);
	    echo json_encode($delete_nacionalidad);
	}
/************************************************************************************************************************************************************************/ 
}