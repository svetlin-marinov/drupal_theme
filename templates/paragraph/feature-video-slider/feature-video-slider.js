(function ($, Drupal, once) {
  Drupal.behaviors.featureVideoSlider = {
    attach: function (context) {
      let sliderDirection = 'ltr';

      if($('body').hasClass('rtl')) {
        sliderDirection = 'rtl';
      }

      const primarySplideOptions = {
        perPage: 4,
        pagination: false,
        gap: '16px',
        padding: 0,
        trimSpace: true,
        lazyLoad: 'nearby',
        direction: sliderDirection,
        breakpoints: {
          1024: {
            destroy: true,
          }
        },
      };

      // $('.feature-video-slider-items', context).once('splideFeatureVideoSliderItems').each(function () {
      once('splideFeatureVideoSliderItems', '.feature-video-slider-items', context).forEach(
        (value) => {
          var $primarySliderWrapper = $(value);
          var primarySlider = new Splide(
            $primarySliderWrapper.get(0),
            primarySplideOptions
          );
          primarySlider.mount();
        });
    },
  };
})(jQuery, Drupal, once);
