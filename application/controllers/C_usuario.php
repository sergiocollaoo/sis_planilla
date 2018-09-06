<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_usuario extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_usuario');
    }
/************************************************************************************************************************************************************************/
public function index()
{
	switch ($this->session->userdata('Estado')) {
		case 0:
			$this->load->view('login.html');
			break;
		
		case 1:
            redirect(base_url()."Inicio");
			break;
	}
}
/************************************************************************************************************************************************************************/
public function inicio()
{
    $this->load->view('header-index.html');
    $this->load->view('menu-index.html');
    $this->load->view('index.html');
    $this->load->view('footer-index.html');
}
/************************************************************************************************************************************************************************/
public function login()
{
    $json = file_get_contents('php://input');
    $data = json_decode($json,TRUE);
    $login = $this->m_usuario->login($data['txt_usuario'], $data['txt_password']);

    if($login==TRUE)
    {           
        $usuario_data = array(  
            'ID_usuario'        => $login->ID_usuario,
            'ID_personal'       => $login->ID_personal,
            'Usuario'    		=> $login->Usuario,
            'Estado'    		=> $login->Estado
            /*'nombres_personal'  => $login_usuario->nombres_personal,*/
            /*'foto_usuario'      => $login_usuario->foto_usuario,*/
        ); 	
        $this->session->set_userdata($usuario_data);          
        echo json_encode('<script>window.location.href="login"</script>');        
    }
    else
    {
      echo json_encode('<span style="color:red;">Los datos ingresados son incorrectos.</span>');
    } 
}
/************************************************************************************************************************************************************************/

}
