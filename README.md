Overview
========

jquery.cookie is a simple extension for jquery to manage your cookies.

How to use
==========

You can get access to your cookie value by name using

    $.cookie('cookie_name');

You can set cookies by calling

    $.cookie('cookie_name', 'cookie_value');

If you want to set few cookies, you can use

    $.cookie('cookie_name', 'cookie_value').cookie('another_cookie', 'another_cookie_value');

If you need to specify additional params like cookie lifetime, domain, path, sucure, you can pass them direclty after the cookie value like this:

    $.cookie(
        'cookie_name',  // cookie name
        'cookie_value', // cookie value
        180,            // cookie duration in seconds
        'example.com',  // cookie domain
        '/',            // cookie path
        false           // cookie secure
    );

You can get all cookies in array with names of cookies as keys just by calling:

    $.cookie();

To remove cookie with specified name just use

    $.removeCookie('cookie_name');

or remove all cookies with

    $.removeCookie();