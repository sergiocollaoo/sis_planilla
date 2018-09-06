<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_tipoid extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_tipoid');
    }
/************************************************************************************************************************************************************************/
public function tipoid()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('tipoid.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_tipodocumento()
    {
        $list_tipodocumento=$this->m_tipoid->list_tipodocumento();
        echo json_encode($list_tipodocumento);
    }
/************************************************************************************************************************************************************************/    
public function insert_tipodocumento()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_tipodocumento=$this->m_tipoid->insert_tipodocumento($data);
        echo json_encode($insert_tipodocumento);
    }
/************************************************************************************************************************************************************************/
public function get_tipodocumento()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_tipodocumento=$this->m_tipoid->get_tipodocumento($data['ID_Documento']);
        echo json_encode($get_tipodocumento);
    }
/************************************************************************************************************************************************************************/
public function update_tipodocumento()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_tipodocumento=$this->m_tipoid->update_tipodocumento($data);
        echo json_encode($update_tipodocumento);
    }
/************************************************************************************************************************************************************************/
public function delete_tipodocumento()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_tipodocumento=$this->m_tipoid->delete_tipodocumento($data);
	    echo json_encode($delete_tipodocumento);
	}
/************************************************************************************************************************************************************************/   
}