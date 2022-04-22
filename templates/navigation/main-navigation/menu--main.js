(function ($, Drupal) {
  Drupal.behaviors.header = {
    attach: function (context) {

      /* Main Navigation Menu */
      const menuMain = $('.menu--main', context);
      const mobileMenuToggle = $('.mobile-menu-toggle', context);
      const menuDropdown = $('.menu--main--dropdown', menuMain);
      const responsiveDropdownTrigger = $('.responsive-dropdown-trigger', menuMain);
      const pageBody = $(document.body);

      /* Toggle hamburger menu */
      mobileMenuToggle.on('click', function () {
        if($(this).hasClass('mobile-menu-open')) {
          removeResponsiveMenuStyles();
        }
        else {
          console.log(mobileMenuToggle);
          addResponsiveMenuStyles();
        }
      });

      /* Toggle styles for the navigation menu on small and medium sized screens */
      function addResponsiveMenuStyles() {
        pageBody.addClass('mobile-menu-open');
        mobileMenuToggle.addClass('mobile-menu-open');
      }

      function removeResponsiveMenuStyles() {
        pageBody.removeClass('mobile-menu-open');
        responsiveDropdownTrigger.removeClass('dropdown-arrow-down');
        menuDropdown.removeClass('visible');
        mobileMenuToggle.removeClass('mobile-menu-open');
      }

      /* Trigger dropdown menu from mobile (on click) */
      responsiveDropdownTrigger.each(function () {
        var triggerLink = $(this);
        triggerLink.once().on('click', function () {
          triggerLink.toggleClass('dropdown-arrow-down');
          let subMenuDropdown = triggerLink.next('.menu--main--dropdown');
          subMenuDropdown.toggleClass('visible');
        });
      });

      /* Remove responsive menu styles when resizing the browser window */
      $(window)
        .resize(function () {
          if($(window).width() >= 1280) {
            removeResponsiveMenuStyles();
          }
        });
    },
  };
})(jQuery, Drupal);
