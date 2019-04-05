<?php
    defined('BASEPATH') or exit('No direct script access allowed');

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

    $route['default_controller'] = 'Home/load';
    $route['freeVideo'] = 'clientArea/video/freeVideo';
    $route['freeVideo/(:num)'] = 'clientArea/video/freeVideo/$1';
    $route['landing/(:any)'] = 'clientArea/landing/load/$1';
    $route['404_override'] = 'handler/show_404';
    // reset
    $route['adminPanel/(.*)'] = 'handler/show_404';
    //$route['indexPage(.*)'] = 'handler/show_404';
    // admin panel
    $route['admin'] = 'adminPanel/access/status';
    $route['admin/dashboard'] = 'adminPanel/dashboard/load';
    $route['admin/login'] = 'adminPanel/access/login';
    $route['admin/logout'] = 'adminPanel/access/logout';
    $route['admin/forgotPassword'] = 'adminPanel/access/forgotPassword';
    $route['admin/resetPassword/([a-zA-Z0-9]{64}+)'] = function ($token) {
        $part = [
            substr($token, 0, 32),
            substr($token, 32, 32)
        ];
        if (md5($part[0]) == $part[1]) {
            return 'adminPanel/access/resetPasswordForm';
        } else {
            return 'handler/show_404';
        }
    };
    $route['admin/resetPassword'] = 'adminPanel/access/resetPasswordAction';
    // admin action
    $route['admin/action/([a-zA-Z]{3,}+)/([a-zA-Z]{3,}+)(.*)'] = function ($controller, $method) {
        $allController = [
            'user',
            'notification',
            'config',
            'video',
            'learn',
            'media'
        ];
        $allMethod = [
            'load',
            'save',
            'view',
            'new',
            'edit',
            'delete',
            'find',
            'list',
            'status',
            'upload',
            'send'
        ];
        if (in_array($controller, $allController) and in_array($method, $allMethod)) {
            return 'adminPanel/' . $controller . '/' . $method . '_';
        } else {
            return 'handler/show_404';
        }
    };
    // callback
    $route['callBack/load(.*)'] = 'handler/show_404';
    $route['callBack/([a-zA-Z]{3,}+)/([a-zA-Z0-9]{6}+)'] = function ($action, $token) {
        if (substr($token, 0, 3) == substr(md5(substr($token, 3, 3)), 0, 3)) {
            return 'callBack/load/' . $action;
        } else {
            return 'handler/show_404';
        }
    };
    //
    $route['translate_uri_dashes'] = false;
