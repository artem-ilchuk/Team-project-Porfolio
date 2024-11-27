import './js/faq.js';
import './js/mob_menu.js';
import './js/my_projects.js';
import './js/theme_switcher.js';
import './js/work_together.js';
import './js/reviews';

let hellopreloader = document.querySelector('.preloader');
function fadeOutnojquery(el) {
  el.style.opacity = 1;
  let interhellopreloader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      hellopreloader.style.display = 'none';
    }
  }, 20);
}

window.onload = function () {
  setTimeout(function () {
    fadeOutnojquery(hellopreloader);
  }, 2500);
};
