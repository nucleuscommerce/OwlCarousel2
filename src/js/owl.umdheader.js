!(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(root, $);
        });
    } else if (typeof exports === 'object') {
        factory(root, require('jquery'));
    } else {
        factory(root, root.jQuery || root.Zepto);
    }
})(typeof window !== 'undefined' ? window : this, function(window, $) {
    'use strict';
