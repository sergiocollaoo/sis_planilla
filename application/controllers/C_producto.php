<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class C_producto extends CI_Controller {

    public function __construct(){
           parent::__construct();
           $this->load->model('m_producto');
    }
/************************************************************************************************************************************************************************/
public function producto()
    {
        $this->load->view('header-index.html');
        $this->load->view('menu-index.html');
        $this->load->view('productos.html');
        $this->load->view('footer-index.html');
    }
/************************************************************************************************************************************************************************/
public function list_producto()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $list_producto=$this->m_producto->list_producto($data);
        echo json_encode($list_producto);
    }
/************************************************************************************************************************************************************************/
public function list_menajeria()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $list_menajeria=$this->m_producto->list_menajeria($data);
        echo json_encode($list_menajeria);
    }
/************************************************************************************************************************************************************************/
public function insert_promena()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $insert_promena=$this->m_producto->insert_promena($data);
        echo json_encode($insert_promena);
    }
/************************************************************************************************************************************************************************/
public function get_promena()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $get_promena=$this->m_producto->get_promena($data['ID_Promena']);
        echo json_encode($get_promena);
    }
/************************************************************************************************************************************************************************/
public function update_promena()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $update_promena=$this->m_producto->update_promena($data);
        echo json_encode($update_promena);
    }
/************************************************************************************************************************************************************************/
public function delete_promena()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json,TRUE);
        $delete_promena=$this->m_producto->delete_promena($data);
        echo json_encode($delete_promena);
    }
/************************************************************************************************************************************************************************/
}