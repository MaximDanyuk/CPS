const brandsButtonMore = document.querySelector(".brands__more");
const servicesButton = document.querySelector(".services__button");

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

brandsButtonMore.addEventListener("click", () =>
  showMore({
    hiddenElementsSelector: ".section__item_invisible",
    visibleElementsSelector: "section__item_visible",
    buttonArrowSelector: ".brands__icon",
    servicesIconSelector: "services__icon_rotate",
    buttonTextSelector: ".brands__link-text",
    newButtonText: "Скрыть",
    oldButtonText: "Показать все",
  })
);

servicesButton.addEventListener("click", () =>
  showMore({
    hiddenElementsSelector: ".section__text-box_hidden",
    visibleElementsSelector: "section__text_visible",
    buttonArrowSelector: ".services__icon",
    servicesIconSelector: "services__icon_rotate",
    buttonTextSelector: ".services__link-text",
    newButtonText: "Скрыть",
    oldButtonText: "Показать все",
  })
);
