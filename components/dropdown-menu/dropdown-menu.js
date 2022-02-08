(function ($, Drupal) {
  Drupal.behaviors.dropDownMenu = {
    attach: function (context) {

      /* Toggle the Dropdown Menu in the navigation menu */
      const dropdownControls = $('.dropdown-controls', context),
        dropwdownMenu = $('.dropdown-menu'),
        classOpenDropdownControls = 'dropdown-controls-open',
        classOpenDropDown = 'dropdown-menu-open';

      // $(once('ddClasses', dropdownControls)).on('click', function () {
      dropdownControls.once('ddClasses').on('click', function () {
        $('.dropdown-menu-open').removeClass(classOpenDropDown);
        if($(this).hasClass(classOpenDropdownControls)) {
          $(this).removeClass(classOpenDropdownControls).next().removeClass(classOpenDropDown);
        }
        else {
          $('.dropdown-controls').removeClass(classOpenDropdownControls);
          $(this).addClass(classOpenDropdownControls).next().addClass(classOpenDropDown);
        }
      });

      // Click outside dropdown controls will close dropdown menu.
      $('body').on('click',function(event) {
        if(!$(event.target).closest('.dropdown-controls, .dropdown-navigation--controls--text, .flatpicker-range, .flatpickr-calendar, .crop-filter--search').length) {
          dropdownControls.removeClass(classOpenDropdownControls);
          dropwdownMenu.removeClass(classOpenDropDown);
        }
      });

      $(window).on('resize', function() {
        dropdownControls.removeClass(classOpenDropdownControls);
        dropwdownMenu.removeClass(classOpenDropDown);
      });
    },
  }
})(jQuery, Drupal);
