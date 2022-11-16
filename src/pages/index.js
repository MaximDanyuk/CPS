import './style.css';
import Popup from '../components/Popup.js';
import {
  brandsButtonMore,
  servicesButton,
  technicButton,
  iconPhone,
  iconFeedback,
  burgerIcon,
} from '../utils/constants.js';

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/// Функция раскрытия доп информации
function showMore({
  hiddenElementsSelector,
  visibleElementsSelector,
  buttonArrowSelector,
  servicesIconSelector,
  buttonTextSelector,
  newButtonText,
  oldButtonText,
}) {
  /// Находим все скрытые элементы
  const hiddenItems = Array.from(
    document.querySelectorAll(hiddenElementsSelector)
  );
  /// Находим текст кнопки
  const buttonText = document.querySelector(buttonTextSelector);
  /// Находим стрелку у кнопки
  const buttonMoreArrow = document.querySelector(buttonArrowSelector);
  /// Проходимся по всем скрытым и добавляем класс видимости
  hiddenItems.forEach((elem) => elem.classList.toggle(visibleElementsSelector));
  /// Переворачиваем стрелку
  buttonMoreArrow.classList.toggle(servicesIconSelector);
  /// Если стрелка перевернутая, т е кнопку нажали, текст меняем на текст открытой кнопки
  /// Если класса нет, т е нажали повторно- возвращаем старый текст
  buttonMoreArrow.classList.contains(servicesIconSelector)
    ? (buttonText.textContent = newButtonText)
    : (buttonText.textContent = oldButtonText);
}

brandsButtonMore.addEventListener('click', () =>
  showMore({
    hiddenElementsSelector: '.section__item_invisible',
    visibleElementsSelector: 'section__item_visible',
    buttonArrowSelector: '.brands__icon',
    servicesIconSelector: 'services__icon_rotate',
    buttonTextSelector: '.brands__link-text',
    newButtonText: 'Скрыть',
    oldButtonText: 'Показать все',
  })
);

servicesButton.addEventListener('click', () =>
  showMore({
    hiddenElementsSelector: '.section__text-box',
    visibleElementsSelector: 'section__text-box_visible',
    buttonArrowSelector: '.services__icon',
    servicesIconSelector: 'services__icon_rotate',
    buttonTextSelector: '.services__link-text',
    newButtonText: 'Скрыть',
    oldButtonText: 'Показать все',
  })
);

technicButton.addEventListener('click', () =>
  showMore({
    hiddenElementsSelector: '.technic__item_invisible',
    visibleElementsSelector: 'technic__item_visible',
    buttonArrowSelector: '.technic__icon',
    servicesIconSelector: 'services__icon_rotate',
    buttonTextSelector: '.technic__link-text',
    newButtonText: 'Скрыть',
    oldButtonText: 'Показать все',
  })
);

/// Создаем из объекта модалки
const phoneCallPopup = new Popup('.phone-modal');
phoneCallPopup.setEventListeners();

const feedbackPopup = new Popup('.phone-modal');
feedbackPopup.setEventListeners();

const burgerPopup = new Popup('.menu-modal');
burgerPopup.setEventListeners();

/// Открываем из объекта модалки
iconPhone.addEventListener('click', () => {
  phoneCallPopup.open();
});

iconFeedback.addEventListener('click', () => {
  feedbackPopup.open();
});

burgerIcon.addEventListener('click', () => {
  burgerPopup.open();
});

new Swiper('.section-slider', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  dynamicBullets: true,

  slideToClickedSlide: true,

  loop: true,

  keyboard: {
    enabled: true,

    onlyInViewport: true,
  },

  slidesPerView: 'auto',

  initialSlide: 1,

  freeMode: true,

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти на слайд {{index}}',
    containerMessage: 'Это слайдер брендов, с которыми мы работаем',
    notificationClass: 'swiper-notification',
  },

  enabled: true,
  breakpoints: {
    320: {
      slidesPerGroup: 1,
    },
    600: {
      slidesPerGroup: 3,
    },

    738: {
      enabled: false,
    },
  },
});

if (window.matchMedia('(min-width: 738px)').matches) {
  document.querySelector('.section-brands').classList.remove('section-slider');
  document.querySelector('.technic').classList.remove('section-slider');
  let slideLists = Array.from(document.querySelectorAll('.section__items'));
  let slideElements = Array.from(document.querySelectorAll('.section__item'));

  slideLists.forEach((elem) => elem.classList.remove('swiper-wrapper'));
  slideElements.forEach((elem) => elem.classList.remove('swiper-slide'));
} else {
  document.querySelector('.section-brands').classList.add('section-slider');
  document.querySelector('.technic').classList.add('section-slider');
  let slideLists = Array.from(document.querySelectorAll('.section__items'));
  let slideElements = Array.from(document.querySelectorAll('.section__item'));

  slideLists.forEach((elem) => elem.classList.add('swiper-wrapper'));
  slideElements.forEach((elem) => elem.classList.add('swiper-slide'));
}
