<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_empresa extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_empresa');
    }
/************************************************************************************************************************************************************************/
public function empresa_detalle()
    {

        $this->load->helper('url');
        $this->load->view('header-index.html');
        $this->load->view('menu-index.html');
        $this->load->view('empresa_detalle.php');
        $this->load->view('footer-index.html');
    }
/************************************************************************************************************************************************************************/
public function list_empresa()
    {
        $list_empresa=$this->m_empresa->list_empresa();
        echo json_encode($list_empresa);
    }
/************************************************************************************************************************************************************************/    
public function insert_empresa()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_empresa=$this->m_empresa->insert_empresa($data);
        echo json_encode($insert_empresa);
    }
/************************************************************************************************************************************************************************/
public function get_empresa()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_empresa=$this->m_empresa->get_empresa($data['ID_Empresa']);
        echo json_encode($get_empresa);

/*        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_empresa = $this->m_empresa->get_empresa($data['ID_Empresa']);

        if($get_empresa)
        {           
            $empresa_data = array(  
                'IDEmpresa'     => $get_empresa->IDEmpresa,
                'RUC'           => $get_empresa->RUC,
                'RS'            => $get_empresa->RS
            );  
            $this->session->set_userdata($empresa_data);
            echo json_encode('<script>window.location.href="empresa_detalle"</script>');        
        }
        else
        {
          echo json_encode('<span style="color:red;">Los datos ingresados son incorrectos.</span>');
        } */

    }
/************************************************************************************************************************************************************************/
public function update_empresa()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_empresa=$this->m_empresa->update_empresa($data);
        echo json_encode($update_empresa);
    }
/************************************************************************************************************************************************************************/
public function delete_empresa()
	{
	    $json = file_get_contents('php://input');
	    $data = json_decode($json,TRUE);
	    $delete_empresa=$this->m_empresa->delete_empresa($data);
	    echo json_encode($delete_empresa);
	}
/************************************************************************************************************************************************************************/
}