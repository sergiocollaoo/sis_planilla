<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'c_usuario';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
/************************************************************************************************************************************************************************/
$route['login'] 					= 'c_usuario/index';
$route['login_usuario'] 			= 'c_usuario/login';
$route['Inicio'] 					= 'c_usuario/inicio';
/************************************************************************************************************************************************************************/
$route['empresa_detalle'] 			= 'c_empresa/empresa_detalle';
$route['list_empresa'] 				= 'c_empresa/list_empresa';
$route['insert_empresa'] 			= 'c_empresa/insert_empresa';
$route['get_empresa'] 				= 'c_empresa/get_empresa';
$route['update_empresa'] 			= 'c_empresa/update_empresa';
$route['delete_empresa'] 			= 'c_empresa/delete_empresa';
/************************************************************************************************************************************************************************/
$route['Personal'] 					= 'c_personal/personal';
$route['list_personal'] 			= 'c_personal/list_personal';
$route['insert_personal'] 			= 'c_personal/insert_personal';
$route['get_personal'] 				= 'c_personal/get_personal';
$route['update_personal'] 			= 'c_personal/update_personal';
$route['delete_personal'] 			= 'c_personal/delete_personal';
$route['get_datoscombo'] 			= 'c_personal/get_datoscombo';
$route['get_departamento'] 			= 'c_personal/get_departamento';
$route['get_provincia'] 			= 'c_personal/get_provincia';
$route['get_distrito'] 				= 'c_personal/get_distrito';

$route['list_vinculolaboral'] 		= 'c_personal/list_vinculolaboral';
$route['insert_vinculolaboral'] 	= 'c_personal/insert_vinculolaboral';
$route['get_vinculolaboral'] 		= 'c_personal/get_vinculolaboral';
$route['update_vinculolaboral'] 	= 'c_personal/update_vinculolaboral';
$route['delete_vinculolaboral'] 	= 'c_personal/delete_vinculolaboral';

$route['list_vinculoseguro'] 		= 'c_personal/list_vinculoseguro';
$route['insert_vinculoseguro'] 		= 'c_personal/insert_vinculoseguro';
$route['get_vinculoseguro'] 		= 'c_personal/get_vinculoseguro';
$route['update_vinculoseguro'] 		= 'c_personal/update_vinculoseguro';
$route['delete_vinculoseguro'] 		= 'c_personal/delete_vinculoseguro';
/************************************************************************************************************************************************************************/
$route['DocumentoIdentidad'] 		= 'c_tipoid/tipoid';
$route['list_tipodocumento'] 		= 'c_tipoid/list_tipodocumento';
$route['insert_tipodocumento'] 		= 'c_tipoid/insert_tipodocumento';
$route['get_tipodocumento'] 		= 'c_tipoid/get_tipodocumento';
$route['update_tipodocumento'] 		= 'c_tipoid/update_tipodocumento';
$route['delete_tipodocumento'] 		= 'c_tipoid/delete_tipodocumento';
/************************************************************************************************************************************************************************/
$route['Nacionalidad'] 				= 'c_nacionalidad/nacionalidad';
$route['list_nacionalidad'] 		= 'c_nacionalidad/list_nacionalidad';
$route['insert_nacionalidad'] 		= 'c_nacionalidad/insert_nacionalidad';
$route['get_nacionalidad'] 			= 'c_nacionalidad/get_nacionalidad';
$route['update_nacionalidad'] 		= 'c_nacionalidad/update_nacionalidad';
$route['delete_nacionalidad'] 		= 'c_nacionalidad/delete_nacionalidad';
/************************************************************************************************************************************************************************/
$route['EstadoCivil'] 				= 'c_estadocivil/estadocivil';
$route['list_estadocivil'] 			= 'c_estadocivil/list_estadocivil';
$route['insert_estadocivil'] 		= 'c_estadocivil/insert_estadocivil';
$route['get_estadocivil'] 			= 'c_estadocivil/get_estadocivil';
$route['update_estadocivil'] 		= 'c_estadocivil/update_estadocivil';
$route['delete_estadocivil'] 		= 'c_estadocivil/delete_estadocivil';
/************************************************************************************************************************************************************************/
$route['Local'] 					= 'c_local/local';
$route['list_local'] 				= 'c_local/list_local';
$route['insert_local'] 				= 'c_local/insert_local';
$route['get_local'] 				= 'c_local/get_local';
$route['update_local'] 				= 'c_local/update_local';
$route['delete_local'] 				= 'c_local/delete_local';
/************************************************************************************************************************************************************************/
$route['Cargo'] 					= 'c_cargo/cargo';
$route['list_cargo'] 				= 'c_cargo/list_cargo';
$route['insert_cargo'] 				= 'c_cargo/insert_cargo';
$route['get_cargo'] 				= 'c_cargo/get_cargo';
$route['update_cargo'] 				= 'c_cargo/update_cargo';
$route['delete_cargo'] 				= 'c_cargo/delete_cargo';
/************************************************************************************************************************************************************************/
$route['RegimenPensionario'] 		= 'c_pension/pension';
$route['list_pension'] 				= 'c_pension/list_pension';
$route['insert_pension'] 			= 'c_pension/insert_pension';
$route['get_pension'] 				= 'c_pension/get_pension';
$route['update_pension'] 			= 'c_pension/update_pension';
$route['delete_pension'] 			= 'c_pension/delete_pension';
/************************************************************************************************************************************************************************/
$route['Banco'] 					= 'c_banco/banco';
$route['list_banco'] 				= 'c_banco/list_banco';
$route['insert_banco'] 				= 'c_banco/insert_banco';
$route['get_banco'] 				= 'c_banco/get_banco';
$route['update_banco'] 				= 'c_banco/update_banco';
$route['delete_banco'] 				= 'c_banco/delete_banco';
/************************************************************************************************************************************************************************/
$route['ConceptosPlame'] 			= 'c_plame/plame';
$route['list_plame'] 				= 'c_plame/list_plame';
$route['insert_plamedetalle'] 		= 'c_plame/insert_plamedetalle';
$route['get_plame'] 				= 'c_plame/get_plame';
$route['update_plame'] 				= 'c_plame/update_plame';
$route['delete_plame'] 				= 'c_plame/delete_plame';
/************************************************************************************************************************************************************************/
$route['Productos'] 				= 'c_producto/producto';
$route['list_producto'] 			= 'c_producto/list_producto';
$route['list_menajeria'] 			= 'c_producto/list_menajeria';
$route['insert_promena'] 			= 'c_producto/insert_promena';
$route['get_promena'] 				= 'c_producto/get_promena';
$route['update_promena'] 			= 'c_producto/update_promena';
$route['delete_promena'] 			= 'c_producto/delete_promena';
/************************************************************************************************************************************************************************/



$route['asistencia'] 				= 'c_control/control_asistencia';
$route['list_controlasistencia'] 	= 'c_control/list_controlasistencia';
/************************************************************************************************************************************************************************/
$route['ReportePlanilla'] 			= 'c_planilla/reporteplanilla';
$route['get_inicioboletacombo'] 	= 'c_planilla/get_inicioboletacombo';
$route['list_remuneracion'] 		= 'c_planilla/list_remuneracion';
/************************************************************************************************************************************************************************/
$route['Contratos'] 				= 'c_contrato/contrato';
$route['word'] 						= 'c_contrato/word';
$route['get_personalcombo'] 		= 'c_contrato/get_personalcombo';