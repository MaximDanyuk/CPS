import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliders = document.querySelectorAll('.section-slider');

let mySwipers = []; // Масив со слайдерами

function sliderinit() {
  sliders.forEach((slider) => {
    if (!slider.swiper) {
      mySwipers = new Swiper('.section-slider', {
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        dynamicBullets: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        slidesPerView: 'auto',
        initialSlide: 1,
        freeMode: true,
        centeredSlides: true,
      });
    } else {
      return;
    }
  });

  document
    .querySelectorAll('.swiper-pagination')
    .forEach((el) => el.classList.remove('swiper-pagination_invisible'));
}

function sliderDestroy() {
  // удаляем все слайдеры
  sliders.forEach((slider, index) => {
    if (slider.swiper && mySwipers.length) {
      mySwipers[index].destroy(true, true);
    }
  });

  document
    .querySelectorAll('.swiper-pagination')
    .forEach((el) => el.classList.add('swiper-pagination_invisible'));
}

export default function checker() {
  if (window.matchMedia('(min-width: 738px)').matches) {
    sliderDestroy();
  } else {
    sliderinit();
  }
}
