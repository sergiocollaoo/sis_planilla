<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_contrato extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_contrato');
    }
/************************************************************************************************************************************************************************/
public function contrato()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('contratos.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/
public function word()
  {
    $this->load->view('word.html');
  }
/************************************************************************************************************************************************************************/
public function get_personalcombo()
    {
        $get_personalcombo=$this->m_contrato->get_personalcombo();
        echo json_encode($get_personalcombo);
    }
}