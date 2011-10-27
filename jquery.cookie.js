(function($){
    $.cookie = function(name, val) {
        var trim = function(str){
            return str.replace(/(^\s+)|(\s+$)/g, '');
        };

        var cookies = [], src = document.cookie.split(';');
        for(var k in src) {
            src[k] = trim(src[k]);
            if (src[k]) {
                var cookie = src[k].split('=');
                for(var j in cookie) cookie[j] = trim(cookie[j]);
                cookies[cookie[0]] = cookie[1] ? cookie[1] : null;
            } else src.splice(k, 1);
        }

        if(val) {
            document.cookie = name + '=' + encodeURIComponent(val);
            alert('cookie "' + name + '" set to "' + val + '"');
        } else return cookies[name];

        return $;
    };
})(jQuery);