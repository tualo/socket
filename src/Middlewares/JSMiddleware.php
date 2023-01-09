<?php

namespace Tualo\Office\Socket\Middlewares;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\IMiddleware;

class JSMiddleware implements IMiddleware{
    public static function register(){
        TualoApplication::use('js_socket',function(){
            try{
                TualoApplication::javascript('js_socket', './socket/js.js',[],100000);
            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}