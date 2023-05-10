import { CITY_NAME } from '../constants/constants.js';
import { createElement } from '../render.js';
import {getRandomArrayElement, humanizePointDueDate, humanizePointDueTime, getDiffFromDates } from '../utils.js';


function createCurrentOffer(offers) {
  return(
    offers
      .map((offer) => `<span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>`)
      .join('')
  );
}


function createEventTemplate(point, allOffers) {
  const { basePrice, dateFrom, dateTo, offers,type } = point;
  const availableOffers = allOffers.find((x) => x.type === type).offers;
  const currentOffers = availableOffers.filter((x) => offers.some((y) => y === x.id));

  return /*html*/ (`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${humanizePointDueDate(dateFrom)}</time>
    <div class="event__type">
      <img class="event__${type}-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
    </div>
    <h3 class="event__title">${type} ${getRandomArrayElement(CITY_NAME)}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${humanizePointDueTime(dateFrom)}</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">${humanizePointDueTime(dateTo)}</time>
      </p>
      <p class="event__duration">
      ${getDiffFromDates(dateFrom, dateTo)}
      </p>
    </div>
    <p class="event__price">
      €&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    <li class="event__offer">
    ${createCurrentOffer(currentOffers)}
    </li>
    </ul>
    <button class="event__favorite-btn event__favorite-btn--active" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`);
}

export default class TripEventView {
  constructor ({point, allOffers}) {
    this.point = point;
    this.allOffers = allOffers;
  }

  getTemplate() {
    return createEventTemplate(this.point, this.allOffers);
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
