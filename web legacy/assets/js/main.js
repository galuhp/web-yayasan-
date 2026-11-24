
/* Static archive helpers */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Contact Form 7 is not backed by a server in this static copy.
    var forms = document.querySelectorAll('form.wpcf7-form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function (event) {
        event.preventDefault();
      });
    }

    // Lightweight slider used for the archive's project gallery.
    var sliders = document.querySelectorAll('[data-archive-slider]');
    for (var s = 0; s < sliders.length; s++) {
      (function (slider) {
        var slides = slider.querySelectorAll('.archive-slide');
        var dots = slider.querySelectorAll('[data-slide-to]');
        var prev = slider.querySelector('.archive-slider-prev');
        var next = slider.querySelector('.archive-slider-next');
        var current = 0;
        var timer = null;
        if (slides.length < 2) return;

        function show(index) {
          current = (index + slides.length) % slides.length;
          for (var i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('is-active', i === current);
          }
          for (var d = 0; d < dots.length; d++) {
            dots[d].classList.toggle('is-active', d === current);
          }
        }
        function start() {
          stop();
          timer = setInterval(function () { show(current + 1); }, 7000);
        }
        function stop() {
          if (timer) { clearInterval(timer); timer = null; }
        }
        if (prev) prev.addEventListener('click', function () { show(current - 1); start(); });
        if (next) next.addEventListener('click', function () { show(current + 1); start(); });
        for (var d = 0; d < dots.length; d++) {
          dots[d].addEventListener('click', function () {
            show(parseInt(this.getAttribute('data-slide-to'), 10));
            start();
          });
        }
        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', start);
        slider.addEventListener('focusin', stop);
        slider.addEventListener('focusout', start);
        start();
      })(sliders[s]);
    }
  });
})();
