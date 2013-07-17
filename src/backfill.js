/*
 * backfill.js
 * 
 *
 * Copyright (c) 2013 Lewis Nixon
 * Licensed under the MIT license.
 */

// see http://coding.smashingmagazine.com/2011/10/11/essential-jquery-Dropmenu-patterns/
// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other Dropmenus 
// that are not closed properly.
;(function ( $ ) {

  // Create the defaults once
  var backfill = 'backfill',
      defaults = {
        marginTop: 0,
        marginBottom: 0
      };

  // The actual Dropmenu constructor
  function Backfill( element, options ) {

    this.element = element;

    // jQuery has an extend method that merges the 
    // contents of two or more objects, storing the 
    // result in the first object. The first object 
    // is generally empty because we don't want to alter 
    // the default options for future instances of the Dropmenu
    this.options = $.extend( {}, defaults, options) ;
    
    this._defaults = defaults;
    this._name = dropmenu;
    
    this.init();
  }

  Backfill.prototype.init = function () {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options
    console.log("this.options is ", this.options);

  }

  $.fn[backfill] = function ( options ) {
    return this.each(function (i) {
      new Backfill( this, options );
    });
  };

})( jQuery );