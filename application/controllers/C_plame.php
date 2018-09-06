<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_plame extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_plame');
    }
/************************************************************************************************************************************************************************/
public function plame()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('plame.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function list_plamei()
    {
        $list_plamei=$this->m_plame->list_plamei();
        echo json_encode($list_plamei);
    }
/************************************************************************************************************************************************************************/
public function list_plamed()
    {
        $list_plamed=$this->m_plame->list_plamed();
        echo json_encode($list_plamed);
    }
/************************************************************************************************************************************************************************/
public function insert_plame()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_plame=$this->m_plame->insert_plame($data);
        echo json_encode($insert_plame);
    }
/************************************************************************************************************************************************************************/
public function get_plame()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_plame=$this->m_plame->get_plame($data['ID_Concepto']);
        echo json_encode($get_plame);
    }
/************************************************************************************************************************************************************************/
public function update_plame()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_plame=$this->m_plame->update_plame($data);
        echo json_encode($update_plame);
    }
/************************************************************************************************************************************************************************/
public function delete_plame()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_plame=$this->m_plame->delete_plame($data);
	    echo json_encode($delete_plame);
	}
/************************************************************************************************************************************************************************/
}