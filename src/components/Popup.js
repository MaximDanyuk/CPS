export default class Popup {
  constructor(popupSelector) {
    /// Passing the popup selector
    this._popup = document.querySelector(popupSelector);
    /// Change the context for the method
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  /// Open method
  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  /// Closing method
  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  /// Closing method by Escape
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  /// Closing method by Overlay
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
  /// Hang all closures
  setEventListeners() {
    const closeButton = this._popup.querySelector(".modal__close_btn");
    closeButton.addEventListener("click", this.close.bind(this));
    this._popup.addEventListener("click", this._handleOverlayClose.bind(this));
  }
}
