import { createElement } from '../render.js';
function createEventNewTemplate () {
  return (
    /*html*/ `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>
    <p class="trip-events__msg">Click New Event to create your first point</p>
    <!--
    Значение отображаемого текста зависит от выбранного фильтра:
      * Everthing – 'Click New Event to create your first point'
      * Past — 'There are no past events now';
      * Present — 'There are no present events now';
      * Future — 'There are no future events now'.
    -->
</section>`);
}

export default class TripEventNew {
  constructor ({point, pointDestination, pointOffers}) {
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createEventNewTemplate (this.point, this.pointDestination, this.pointOffers);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }


}
