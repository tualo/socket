<?php

namespace Tualo\Office\Socket\Routes;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\IRoute;

class JS extends \Tualo\Office\Basic\RouteWrapper
{
    public static function register()
    {

        BasicRoute::add('/socket/js.js', function ($matches) {
            $path = dirname(dirname(__DIR__)) . '';
            $data = [
                file_get_contents($path . "/src/js/socket.io.js"),
                file_get_contents($path . "/src/js/Socket.js")
            ];
            App::body(implode(';', $data));
            App::contenttype('javascript/application');
        });
    }
}
