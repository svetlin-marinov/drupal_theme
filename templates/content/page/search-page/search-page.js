(function ($, Drupal) {
  Drupal.behaviors.stickySearch = {
    attach: function (context) {
      let headerBelowElement = $('#header').get(0);
      let viewFilterSearch = $('.search-bar-styles', context);
      let prevRatio = 0.0;

      function createObserver() {
        let observer;

        observer = new IntersectionObserver(handleIntersect);
        observer.observe(headerBelowElement);
      }

      function handleIntersect(entries) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > prevRatio) {
            viewFilterSearch.removeClass('sticky');
          } else {
            // entry.intersectionRatio == 0
            viewFilterSearch.addClass('sticky');
          }

          prevRatio = entry.intersectionRatio;
        });
      }

      createObserver();
    },
  };
})(jQuery, Drupal);