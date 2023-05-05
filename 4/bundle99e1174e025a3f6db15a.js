(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",c="quarter",u="year",f="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:u,w:l,d:a,D:f,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",y={};y[b]=v;var g=function(e){return e instanceof E},$=function e(t,n,i){var s;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;y[l]=t,s=l}return!i&&s&&(b=s),s||!i&&b},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},w=m;w.l=$,w.i=g,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=v.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===d)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!w.u(t)||t,d=w.p(e),p=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},h=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,_=this.$M,m=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return c?p(1,0):p(31,11);case o:return c?p(1,_):p(0,_+1);case l:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return p(c?m-g:m+(6-g),_);case a:case f:return h(b+"Hours",0);case r:return h(b+"Minutes",1);case s:return h(b+"Seconds",2);case i:return h(b+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var l,c=w.p(e),d="set"+(this.$u?"UTC":""),p=(l={},l[a]=d+"Date",l[f]=d+"Date",l[o]=d+"Month",l[u]=d+"FullYear",l[r]=d+"Hours",l[s]=d+"Minutes",l[i]=d+"Seconds",l[n]=d+"Milliseconds",l)[c],h=c===a?this.$D+(t-this.$W):t;if(c===o||c===u){var v=this.clone().set(f,1);v.$d[p](h),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(n,c){var f,d=this;n=Number(n);var p=w.p(c),h=function(e){var t=M(d);return w.w(t.date(t.date()+Math.round(e*n)),d)};if(p===o)return this.set(o,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===a)return h(1);if(p===l)return h(7);var v=(f={},f[s]=e,f[r]=t,f[i]=1e3,f)[p]||1,_=this.$d.getTime()+n*v;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},f=function(e){return w.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,o,2),ddd:u(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:w.s(r,2,"0"),h:f(1),hh:f(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(e,t){return t||v[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,f,d){var p,h=w.p(f),v=M(n),_=(v.utcOffset()-this.utcOffset())*e,m=this-v,b=w.m(this,v);return b=(p={},p[u]=b/12,p[o]=b,p[c]=b/3,p[l]=(m-_)/6048e5,p[a]=(m-_)/864e5,p[r]=m/t,p[s]=m/e,p[i]=m/1e3,p)[h]||m,d?b:w.a(b)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return y[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),D=E.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,E,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=y[b],M.Ls=y,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(()=>{"use strict";const e={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(t,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.BEFOREEND;n.insertAdjacentElement(i,t.getElement())}class s{constructor(e){let{point:t,offers:n,destinations:i}=e;this.point=t,this.offers=n,this.destinations=i}getTemplate(){return function(e,t,n){const{basePrice:i,dateFrom:s,dateTo:r,type:a}=e;return`<form class="event event--edit" action="#" method="post">\n<header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__${a}-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event ${a}icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${function(e){return e.map((e=>`<div class="event__type-item">\n      <input id="event-type-${e.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-${e.type}" value=${e.type}>\n      <label class="event__type-label  event__type-label--${e.type}" for="event-${e.type}-taxi-1">${e.type}</label>\n      </div>`)).join("")}(t)};\n      </fieldset>\n    </div>\n  </div>\n\n  <div class="event__field-group  event__field-group--destination">\n    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${a} list="destination-list-1">\n    <label class="event__label  event__type-output" for="event-destination-1">\n    </label>\n    <datalist id="destination-list-1">\n    ${function(e){return e.map((e=>`<option value=${e.name}></option>`)).join()}(n)}\n    </datalist>\n    </div>\n\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n    —\n    <label class="visually-hidden" for="event-end-time-1">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n  </div>\n\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      €\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n  </div>\n\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Delete</button>\n  <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>\n</header>\n<section class="event__details">\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n    <div class="event__available-offers">\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">\n        <label class="event__offer-label" for="event-offer-luggage-1">\n          <span class="event__offer-title">Add luggage</span>\n          +€&nbsp;\n          <span class="event__offer-price">50</span>\n        </label>\n      </div>\n\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked="">\n        <label class="event__offer-label" for="event-offer-comfort-1">\n          <span class="event__offer-title">Switch to comfort</span>\n          +€&nbsp;\n          <span class="event__offer-price">80</span>\n        </label>\n      </div>\n\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n        <label class="event__offer-label" for="event-offer-meal-1">\n          <span class="event__offer-title">Add meal</span>\n          +€&nbsp;\n          <span class="event__offer-price">15</span>\n        </label>\n      </div>\n\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n        <label class="event__offer-label" for="event-offer-seats-1">\n          <span class="event__offer-title">Choose seats</span>\n          +€&nbsp;\n          <span class="event__offer-price">5</span>\n        </label>\n      </div>\n\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n        <label class="event__offer-label" for="event-offer-train-1">\n          <span class="event__offer-title">Travel by train</span>\n          +€&nbsp;\n          <span class="event__offer-price">40</span>\n        </label>\n      </div>\n    </div>\n  </section>\n\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n  </section>\n</section>\n</form>`}(this.point,this.offers,this.destinations)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=n(484);const a={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECKIN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"},l=["Chamonix","Geneva","Amsterdam","Helsinki","Oslo","Kopenhagen","Den Haag","Rotterdam","Saint Petersburg","Moscow","Sochi","Tokio","Kioto","Nagasaki","Hiroshima","Berlin","Munich","Frankfurt","Vien","Rome","Naples","Venice","Milan","Monaco","Paris","Barcelona","Valencia","Madrid"],o=["a true asian pearl, with crowded streets, with a beautiful old town","with a beautiful old town, middle-eastern paradise","with a beautiful old town, middle-eastern paradise","a true asian pearl, in a middle of Europe, with a beautiful old town","with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East","with crowded streets, in a middle of Europe, famous for its crowded street markets with the best street food in Asia","a true asian pearl, in a middle of Europe, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.","pictures","ith a beautiful old town","is a beautiful city, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.","pictures"],c=["Chamonix biggest supermarket","Geneva kindergarten","Amsterdam central station","Helsinki kindergarten","Oslo city centre","Kopenhagen parliament building","Den Haag city centre","Rotterdam kindergarten","Saint Petersburg parliament building"],u=["Choose VIP area","With air conditioning","With automatic transmission","Business lounge","Add luggage","Upgrade to business class","Choose seats","Choose meal","Order a meal from the restaurant","Add breakfast","Choose the time of check-out","Wake up at a certain time"],f="h:m";function d(e){return e[Math.floor(Math.random()*e.length)]}function p(e){return e?r(e).format(f):""}const h=(e,t)=>{const n=e-.5+Math.random()*(t-e+1);return Math.round(n)};class v{constructor(e){let{point:t}=e;this.point=t}getTemplate(){return function(e){const{basePrice:t,dateFrom:n,offers:i,type:s}=e;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${a=n,a?r(a).format("D MMM"):""}</time>\n    <div class="event__type">\n      <img class="event__${s}-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event ${s} icon">\n    </div>\n    <h3 class="event__title">${s} ${d(l)}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${p(r())}</time>\n        —\n        <time class="event__end-time" datetime="2019-03-18T11:00">${p(r().hour(3))}</time>\n      </p>\n      <p class="event__duration">30M</p>\n    </div>\n    <p class="event__price">\n      €&nbsp;<span class="event__price-value">${t}</span>\n    </p>\n\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${function(e){return e.map((e=>`<li class="event__offer">\n                              <span class="event__offer-title">${e.title}</span>\n                              +€&nbsp;\n                              <span class="event__offer-price">${e.price}</span>\n                            </li>`)).join(" ")}(i)}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`;var a}(this.point)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{element=null;getTemplate(){return'<ul class="trip-events__list">\n    </ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class m{element=null;getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{element=null;getTemplate(){return'<form class="trip-filters" action="#" method="get">\n<div class="trip-filters__filter">\n  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">\n  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n</div>\n\n<button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{element=null;getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}let g=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");const $=()=>d(Array.from(Object.values(a))),M=()=>Array.from({length:9},((e,t)=>({id:g(),title:d(u),price:1200}))),w=document.querySelector(".trip-main"),E=document.querySelector(".trip-events"),D=new class{offers=Array.from({length:9},((e,t)=>({type:$(),offers:M()})));points=Array.from({length:9},((e,t)=>({id:g(),basePrice:h(100,2e3),dateFrom:r(),dateTo:r().hour(17),destination:g(),isFavorite:!1,offers:M(),type:$()})));destinations=Array.from({length:9},((e,t)=>({id:g(),description:d(o),name:d(l),pictures:[{src:`https://loremflickr.com/248/152?r=${Math.random()}`,description:d(c)}]})));getOffer(){return this.offer}getOffers(){return this.offers}getPoints(){return this.points}getDestinations(){return this.destinations}},S=new class{tripEventListComponent=new _;constructor(e){let{tripMainContainer:t,tripEventsContainer:n,pointModel:i}=e;this.tripMainContainer=t,this.tripEventsContainer=n,this.pointModel=i}init(){this.boardPoints=[...this.pointModel.getPoints()],this.boardOffers=[...this.pointModel.getOffers()],this.boardDestinations=[...this.pointModel.getDestinations()],i(new m,this.tripMainContainer,e.AFTERBEGIN),i(new b,this.tripMainContainer),i(new y,this.tripEventsContainer),i(new s({point:this.boardPoints[0],offers:this.boardOffers,destinations:this.boardDestinations}),this.tripEventsContainer,e.BEFOREEND),i(this.tripEventListComponent,this.tripEventsContainer);for(let e=0;e<this.boardPoints.length;e++)i(new v({point:this.boardPoints[e]}),this.tripEventListComponent.getElement())}}({tripMainContainer:w,tripEventsContainer:E,pointModel:D});S.init()})()})();
//# sourceMappingURL=bundle99e1174e025a3f6db15a.js.map