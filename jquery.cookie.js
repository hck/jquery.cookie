/**
 * jQuery cookie plugin
 *
 * Copyright (c) Hck, 2011/10
 * Licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($){
    $.cookie = function(name, val) {
        var trim = function(str){
            return str.replace(/(^\s+)|(\s+$)/g, '');
        };

        var cookies = {}, src = document.cookie.split(';');
        for(var k in src) {
            src[k] = trim(src[k]);
            if (src[k]) {
                var cookie = src[k].split('=');
                for(var j in cookie) cookie[j] = trim(cookie[j]);

                if(cookie[0])
                    cookies[cookie[0]] = cookie[1] ? cookie[1] : null;
            } else src.splice(k, 1);
        }

        if(!name) return cookies;

        if(val) document.cookie = name + '=' + encodeURIComponent(val);
        else return cookies[name];

        return $;
    };

    $.removeCookie = function(name) {
        var cookies;
        if(name) {
            cookies = {};
            cookies[name] = null;
        }
        else cookies = $.cookie();

        for(var k in cookies)
            document.cookie = k + '=; expires=' + new Date + ';';
    };
})(jQuery);