(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.adminLinksToggle = {
    attach: function (context) {
      $('.local-tasks--toggle', context).on('click', function(){
        $(this).siblings('ul.tabs').toggleClass(['hidden', 'visible']);
      });
    }
  };
})(jQuery, Drupal);