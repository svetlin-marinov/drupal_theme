(function ($, Drupal) {
  Drupal.behaviors.page404 = {
    attach: function (context) {

      /* DOM elements */
      let searchForm = $('.page-error--form', context);
      let searchInput = $('.form-item--search-input', searchForm);
      let resetButton = $('[type="reset"]', searchForm);

      /* Hide the default clear button when typing in the search field */
      function toggleresetButton(input) {
        if (input.val() !== '') {
          resetButton.removeClass('hidden');
        } else {
          resetButton.addClass('hidden');
        }
      }

      // Hide reset button initially
      toggleresetButton(searchInput);

      searchInput.on('keyup focusout blur', function () {
        toggleresetButton($(this));
      });

      resetButton.on('click', function(){
        $(this).addClass('hidden');
      });
    },
  };
})(jQuery, Drupal);
