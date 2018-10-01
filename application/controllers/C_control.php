<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_control extends CI_Controller {

    public function __construct(){
           parent::__construct();
           // $this->load->model('m_control');
    }
/************************************************************************************************************************************************************************/
public function control_asistencia()
	{
		$this->load->view('header-index.html');
		$this->load->view('menu-index.html');
		$this->load->view('asistencia.html');
		$this->load->view('footer-index.html');
	}
/************************************************************************************************************************************************************************/

/************************************************************************************************************************************************************************/
}