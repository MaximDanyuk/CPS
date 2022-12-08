import './style.css';
import './style.sass';
import Popup from '../components/Popup.js';
import {
  brandsButtonMore,
  servicesButton,
  technicButton,
  iconPhone,
  iconFeedback,
  burgerIcon,
} from '../utils/constants.js';

import checker from '../vendor/swiper/swiper.js';

checker();

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
  /// Находим скрытый родитель
  const hiddenArea = document.querySelector(hiddenElementsSelector);
  /// Находим текст кнопки
  const buttonText = document.querySelector(buttonTextSelector);
  /// Находим стрелку у кнопки
  const buttonMoreArrow = document.querySelector(buttonArrowSelector);
  /// Проходимся по всем скрытым и добавляем класс видимости
  hiddenArea.classList.toggle(visibleElementsSelector);
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
    hiddenElementsSelector: '.section__items-brands',
    visibleElementsSelector: 'section__items_visible',
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
    hiddenElementsSelector: '.technic__items',
    visibleElementsSelector: 'section__items_visible',
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

window.addEventListener('resize', () => {
  checker();
});
