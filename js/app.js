/* jshint esversion:6 */
/* globals jQuery, $, console, document */

var CatClicker = (function($) {
    
    'use strict';
    
    var DOM = {},
        count = 0;
    
    
    /* ========================== private methods ========================== */
    
    // cache DOM elements
    function cacheDom() {
        DOM.$catClicker = $('#cat-clicker');
        DOM.$catImage   = $(document.createElement('img'));
        DOM.$counter    = $(document.createElement('p'));
        
    }
    
    
    // bind events
    function bindEvents() {
        DOM.$catClicker.on('click', handleClick);
    }
    
    
    // cat click handler
    function handleClick(e) {
        count += 1;
        DOM.$counter
            .html(count);
    }
    
    
    // main renderer
    function render() {
        
        DOM.$catImage
            .attr('src', '../assets/kitten.jpg')
            .appendTo(DOM.$catClicker);
        
        DOM.$catClicker
            .append(DOM.$counter);

    }
    
    
    /* ========================== public methods =========================== */
    
    // public init method
    function init() {
        cacheDom();
        bindEvents();
        render();
    }
    
    
    /* ======================= export public methods ======================= */
    
    return {
        init: init
    };
    
    
}(jQuery));

$(document).ready(function () {
    
    CatClicker.init();
    
});