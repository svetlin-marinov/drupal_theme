(function ($, Drupal) {
  Drupal.behaviors.languageDropdown = {
    attach: function (context) {
      const languageBlock = $('.language-switcher-language-url', context);
      const headerContainer = $('.region-header__container', context);

      // Mobile version is displayed
      // Detect mobile devices - window.matchMedia('(hover: none) and (pointer: coarse)').matches
      if (window.matchMedia('(max-width: 1279px)').matches) {
        languageBlock.on('mouseenter', function() {
          // Scroll mobile menu to bottom to display language links
          headerContainer.scrollTop(headerContainer.prop('scrollHeight'));
        });
      }
    }
  }
})(jQuery, Drupal);
