(function ($, Drupal, once) {
  Drupal.behaviors.forms = {
    attach: function (context) {
      // Toggle password visibility
      const passwordField = $('input[type="password"]', context);
      const showPasswordButton = $('<span class="show-password icon-icon--show"></span>');

      once('passwordVisibility', passwordField).forEach((value) => {
        $(value).after(showPasswordButton);
      });

      function toggleType(elm) {
        if (elm.prop('type') === 'password') {
          elm.prop('type', 'text');
        } else {
          elm.prop('type', 'password');
        }
      }

      showPasswordButton.on('click', function() {
        $(this).toggleClass(['icon-icon--show', 'icon-icon--hide']);
        toggleType($(this).prev());
      });
    },
  };
})(jQuery, Drupal, once);
