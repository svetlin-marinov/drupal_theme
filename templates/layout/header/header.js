(function ($, Drupal, once) {
  Drupal.behaviors.header = {
    attach: function (context) {

      /* Main Navigation Menu */
      const menuMain = $('.menu--main', context);
      const closeMenu = $('.menu-close-icon', context);
      const hamburgerToggle = $('.hamburger-menu', context);
      const menuDropdown = $('.menu--main--dropdown', menuMain);
      const subMenu = $('.sub-menu', menuMain);
      const responsiveDropdownTrigger = $('.responsive-dropdown-trigger', menuMain);
      const pageBody = $(document.body);

      /* Calculate number of list items in dropdown, and add a class to determine the number of columns (on large screens only) */
      subMenu.each(function () {
        var numChildren = Math.ceil($(this).children('li').length);
        if (numChildren <= 6) {
          $(this).addClass('one-col');
        } else if (numChildren > 6 && numChildren <= 12) {
          $(this).addClass('two-cols');
        } else {
          $(this).addClass('three-cols');
        }
      });

      /* Toggle hamburger menu */
      hamburgerToggle.on('click', function () {
        addResponsiveMenuStyles();
      });

      closeMenu.on('click', function () {
        removeResponsiveMenuStyles();
      });

      /* Toggle styles for the navigation menu on small and medium sized screens */
      function addResponsiveMenuStyles() {
        pageBody.addClass('mobile-menu-open');
      }

      function removeResponsiveMenuStyles() {
        pageBody.removeClass('mobile-menu-open');
        responsiveDropdownTrigger.removeClass('dropdown-arrow-down');
        menuDropdown.removeClass('visible');
      }

      /* Trigger dropdown menu from mobile (on click) */
      responsiveDropdownTrigger.each(function () {
        var triggerLink = $(this);
        // triggerLink.once().on('click', function () {
        $(once('triggerLink', triggerLink)).on('click', function () {
          triggerLink.toggleClass('dropdown-arrow-down');
          var subMenuDropdown = triggerLink.next('.menu--main--dropdown');
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
})(jQuery, Drupal, once);
