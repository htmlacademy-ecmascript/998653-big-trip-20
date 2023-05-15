import AbstractView from '../framework/view/abstract-view.js';
import {TYPES} from '../constants/const.js';
import {humanizePointDueDateTime} from '../utils.js';

function createEventTypeTemplate(type) {
  return (
  /*html*/`<label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
      </label>`);
}

function createEventTypeList() {
  return(
    TYPES
      .map((type) => /*html*/` <div class="event__type-item">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type[0].toUpperCase() + type.slice(1)}</label>
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        `).join(''));
}

function createEventType(type) {
  return (
    /*html*/`<label class="event__label  event__type-output" for="event-destination-1">
      ${type}
     </label>`
  );
}

function createEventTypeName(name) {
  return (
    /*html*/`<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">`);
}

function createDestinationList(destinations) {
  return(
    destinations
      .map((destination) =>/*html*/`<option value="${destination.name}">${destination.name}</option>`)
  ).join('');
}

function createOffersList(offers) {
  return(
    offers
      .map((offer) => /*html*/ `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`)
  );
}

function createDestinationPictures(pictures) {
  return(
    pictures
      .map((picture) => /*html*/`<img class="event__photo" src="${picture.src}" alt="Event photo">`)
  );
}

function createEventAddTemplate (point, pointDestinations,pointOffers) {
  const {basePrice, dateFrom, dateTo, destination, type} = point;
  const pointDestination = pointDestinations.find((itemDestination) => (itemDestination.id === destination));
  const {description, name, pictures} = pointDestination;
  const pointOffersByType = pointOffers.find((pointOffer) => pointOffer.type === type).offers;

  return (
    /*html*/`<form class="event event--edit" action="#" method="post">
    <header class="event__header">
    <div class="event__type-wrapper">
      ${createEventTypeTemplate(type)}
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
          ${createEventTypeList(TYPES)}
        </div>
      </fieldset>
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    ${createEventType(type)}
    ${createEventTypeName(name)}
    <datalist id="destination-list-1">
    ${createDestinationList(pointDestinations)}
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointDueDateTime(dateFrom)}">
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
   <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointDueDateTime(dateTo)}">
</div>

<div class="event__field-group  event__field-group--price">
  <label class="event__label" for="event-price-1">
    <span class="visually-hidden">Price</span>
    €
  </label>
  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
</div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">

  <section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>

  <div class="event__available-offers">
  ${createOffersList(pointOffersByType)}
  </div>
</section>

<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${createDestinationPictures(pictures)}
    </div>
  </div>
</section>
</section>
</form>`);
}

export default class TripEventAddView extends AbstractView {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;


  constructor ({point, pointDestinations, pointOffers}) {
    super();

    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
  }

  get template() {
    return createEventAddTemplate(this.#point, this.#pointDestinations, this.#pointOffers);
  }
}


