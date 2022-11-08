const brandsButtonMore = document.querySelector(".brands__more");
const servicesButton = document.querySelector(".services__button");

function showMore(
  hiddenElementsSelector,
  visibleElementsSelector,
  buttonArrowSelector
) {
  const hiddenItems = Array.from(
    document.querySelectorAll(hiddenElementsSelector)
  );

  hiddenItems.forEach((elem) => elem.classList.toggle(visibleElementsSelector));

  const buttonMoreArrow = document.querySelector(buttonArrowSelector);
  buttonMoreArrow.classList.toggle("services__icon_rotate");
}

brandsButtonMore.addEventListener("click", () =>
  showMore(".brands__item_invisible", "brands__item_visible", ".brands__icon")
);

servicesButton.addEventListener("click", () =>
  showMore(".services__text", "services__text_visible", ".services__icon")
);
