(function($) {
  'use strict';  
    
    $('.zoom_img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
   
    new WOW().init();
    
})(window.jQuery);   