import AbstractView from '../framework/view/abstract-view.js';

function createLoadingMessageTemplate() {
  return (
    `<p class="trip-events__msg">
      Loading...
    </p>`
  );
}

export default class TripEventLoadingComponent extends AbstractView {
  get template() {
    return createLoadingMessageTemplate();
  }
}
