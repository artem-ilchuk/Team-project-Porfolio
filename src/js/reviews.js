import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../css/styles/reviews.css';

import axios from 'axios';

const guard = document.querySelector('.js-load-reviews');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(handlePagination, options);
observer.observe(guard);
function handlePagination(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      observer.unobserve(guard);
      try {
        await loadReviews();
        launchSwiper();
      } catch (error) {
        alert(error.message);
      }
    }
  });
}

async function loadReviews() {
  await axios
    .get('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      createGallery(response.data);
    })
    .catch(() => {
      iziToastMes('Reviews not found');
      const gallery = document.querySelector('.swiper-wrapper');
      gallery.insertAdjacentHTML(
        'beforeend',
        '<li class="not-found"><p class="not-found-text">Not Found</p></li>'
      );
    });
}

function createGallery(data) {
  const gallery = document.querySelector('.swiper-wrapper');
  let markup = data
    .map(
      slide => `
    <li class="swiper-slide">
        <p class="review-text">
          ${slide.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${slide.avatar_url}" alt="Autor: ${slide.author}">
          <p class="review-author">${slide.author}</p>
        </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function launchSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',      
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    mousewheel: {
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1280: { slidesPerView: 2 },
    },
  });
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function iziToastMes(message, color = 'red') {
  iziToast.show({
    icon: 'icon-person',
    message: message,
    color: color,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX
    transitionOut: 'flipOutX', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
    closeOnClick: true,
    displayMode: 'replace', // once, replace
    timeout: 3000,
  });
}
