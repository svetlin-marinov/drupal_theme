(function ($, Drupal) {
  Drupal.behaviors.localActions = {
    attach: function (context) {
      const block = $('.block-local-actions-block', context),
        ddControls = $('.dropdown-controls', block);
      let text = $('.is-active', block).text();

      ddControls.once().text(text);
    },
  };
})(jQuery, Drupal);