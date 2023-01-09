<?php

namespace Tualo\Office\Socket\Middlewares;
use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\IMiddleware;

class JSMiddleware implements IMiddleware{
    public static function register(){
        App::use('js_socket',function(){
            try{
                App::javascript('js_socket', './socket/js.js',[],100000);
            }catch(\Exception $e){
                App::set('maintanceMode','on');
                App::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}