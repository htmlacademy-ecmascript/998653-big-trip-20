(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=v;var y=function(t){return t instanceof E},b=function t(e,n,i){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;g[o]=e,s=o}return!i&&s&&($=s),s||!i&&$},M=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},D=_;D.l=b,D.i=y,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,u=!!D.u(e)||e,f=D.p(t),h=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case c:return u?h(1,0):h(31,11);case l:return u?h(1,m):h(0,m+1);case o:var g=this.$locale().weekStart||0,y=(v<g?v+7:v)-g;return h(u?_-y:_+(6-y),m);case a:case d:return p($+"Hours",0);case r:return p($+"Minutes",1);case s:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,u=D.p(t),f="set"+(this.$u?"UTC":""),h=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[c]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[i]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],p=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var v=this.clone().set(d,1);v.$d[h](p),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(n,u){var d,f=this;n=Number(n);var h=D.p(u),p=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===a)return p(1);if(h===o)return p(7);var v=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,m=this.$d.getTime()+n*v;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return D.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,f){var h,p=D.p(d),v=M(n),m=(v.utcOffset()-this.utcOffset())*t,_=this-v,$=D.m(this,v);return $=(h={},h[c]=$/12,h[l]=$,h[u]=$/3,h[o]=(_-m)/6048e5,h[a]=(_-m)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[p]||_,f?$:D.a($)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=E.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,E,M),t.$i=!0),M},M.locale=b,M.isDayjs=y,M.unix=function(t){return M(1e3*t)},M.en=g[$],M.Ls=g,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof $},f=function(t,e,n){return new $(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},v=function(t){return p(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*c[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/o),t%=o,this.$d.months=v(t/l),t%=l,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/s),t%=s,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||o.negative,u=s.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(i[t])}))},m.as=function(t){return this.$ms/c[h(t)]},m.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/c[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var i;return i=e?t*c[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return f(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;n.insertAdjacentElement(i,e.getElement())}var s=n(484);const r=36e5,a={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECKIN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"},o={[a.TAXI]:"Taxi",[a.BUS]:"bus",[a.TRAIN]:"train",[a.SHIP]:"ship",[a.DRIVE]:"drive",[a.FLIGHT]:"flight",[a.CHECKIN]:"check-in",[a.SIGHTSEEING]:"sightseeing",[a.RESTAURANT]:"restaurant"},l="DD/MM/YY  HH:mm",u="HH:mm",c={basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:!1,offers:[],type:"flight"},d=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],f=["Chamonix","Geneva","Amsterdam","Helsinki","Oslo","Kopenhagen","Den Haag","Rotterdam","Moscow"],h=["A true asian pearl, with crowded streets, with a beautiful old town","With a beautiful old town, middle-eastern paradise","Its a beautiful old town"];var p=n(646);function v(t){return t?s(t).format(l):""}function m(t){return t?s(t).format(u):""}function _(t,e){const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e));return Math.floor(n+Math.random()*(i-n+1))}function $(t){return t[_(0,t.length-1)]}s.extend(p);let g=s().subtract(_(0,5),"day").toDate();function y(t){let{next:e}=t;const n=_(0,5),i=_(1,5),r=_(0,59);return e&&(g=s(g).add(r,"minute").add(i,"hour").add(n,"day").toDate()),g}class b{constructor(t){let{point:e,pointDestinations:n,pointOffers:i}=t;this.point=e,this.pointDestinations=n,this.pointOffers=i}getTemplate(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,destination:l,type:u}=t,c=e.find((t=>t.id===l)),{description:d,name:f,pictures:h}=c;return`<form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__${u}-icon" width="17" height="17" src="img/icons/${u}.png" alt="Event ${u}icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${Object.values(a).map((t=>`<div class="event__type-item">\n    <input id="event-${t}-taxi-1" class="event__${t}-input  visually-hidden" type="radio" name="event-type" value=${t}>\n    <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${o[t]}</label>\n      </div>`)).join("")};\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">${u}</label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${f}" list="destination-list-1">\n        <datalist id="destination-list-1">\n        ${p=e,p.map((t=>`<option value=${t.id}>${t.name}</option>`)).join()}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${v(s)}">\n        —\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${v(r)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          €\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=\n          ${i}>\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n\n    <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n\n      ${function(t,e){return e.find((t=>t.type==t.type)).offers.map((e=>`<div class="event__offer-selector">\n          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${t.offers.includes(e.id)?"checked":""}>\n          <label class="event__offer-label" for="event-offer-luggage-1">\n           <span class="event__offer-title">${e.title}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${e.price}</span>\n          </label>\n        </div>`)).join("")}(t,n)}\n\n      </div>\n    </section>\n\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${d}</p>\n    <div class="event__photos-container">\n    <div class="event__photos-tape">\n\n    ${function(t){return t.map((t=>`<img class="event__photo" src=${t.src} alt="Event photo">`))}(h)}\n\n    </div>\n  </div>\n  </section>\n</section>\n\n</form>`;var p}(this.point,this.pointDestinations,this.pointOffers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class M{constructor(t){let{point:e,pointDestination:n,pointOffers:i}=t;this.point=e,this.pointDestination=n,this.pointOffers=i}getTemplate(){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;const{basePrice:i,dateFrom:a,dateTo:o,type:l}=t,{name:u}=e;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${a}">${d=a,d?s(d).format("D MMM"):""}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event ${l} icon">\n    </div>\n    <h3 class="event__title">${l} ${u}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${a}">${m(a)}</time>\n        —\n        <time class="event__end-time" datetime="${o}">${m(o)}</time>\n      </p>\n      <p class="event__duration">\n      ${function(t,e){const n=s(e).diff(s(t));let i=0;switch(!0){case n>=864e5:i=s.duration(n).format("DD[D] HH[H] mm[M]");break;case n>=r:i=s.duration(n).format("HH[H] mm[M]");break;case n<r:i=s.duration(n).format("mm[M]")}return i}(a,o)}\n      </p>\n    </div>\n    <p class="event__price">\n      €&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    <li class="event__offer">\n    ${function(t){return t.map((t=>`<li class="event__offer">\n          <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </li>`)).join("")}(n)}\n    </li>\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`;var d}(this.point,this.pointDestination,this.pointOffers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class D{element=null;getTemplate(){return'<ul class="trip-events__list">\n    </ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class E{element=null;getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n    <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class S{element=null;getTemplate(){return'<form class="trip-filters" action="#" method="get">\n<div class="trip-filters__filter">\n  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">\n  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n</div>\n\n<div class="trip-filters__filter">\n  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n</div>\n\n<button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class w{element=null;getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}let T=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const O=document.querySelector(".trip-main"),H=document.querySelector(".trip-events"),k=new class{destinations=[];offers=[];points=[];constructor(){this.destinations=this.generateDestinantions(),this.offers=this.generateOffers(),this.points=this.generatePoints()}getDestinantions(){return this.destinations}getOffers(){return this.offers}getPoints(){return this.points}generateDestinantions(){return Array.from({length:4},(()=>(()=>{const t=$(f);return{id:T(),description:$(h),name:t,pictures:[{src:`https://loremflickr.com/248/152?random=${T()}`,description:`${t} description`},{src:`https://loremflickr.com/248/152?random=${T()}`,description:`${t} description`},{src:`https://loremflickr.com/248/152?random=${T()}`,description:`${t} description`},{src:`https://loremflickr.com/248/152?random=${T()}`,description:`${t} description`}]}})()))}generateOffers(){return d.map((t=>({type:t,offers:Array.from({length:_(0,6)},(()=>(t=>({id:T(),title:`Offer ${t}`,price:_(1,.2)}))(t)))})))}generatePoints(){return Array.from({length:15},(()=>{const t=$(d),e=$(this.destinations),n=_(0,1),i=this.offers.find((e=>e.type===t)),s=n?i.offers.slice(0,_(0,6)).map((t=>t.id)):[];return((t,e,n)=>({id:T(),basePrice:_(1,2),dateFrom:y({next:!1}),dateTo:y({next:!0}),destination:e,isFavorite:!!_(0,1),offers:n,type:t}))(t,e.id,s)}))}},x=new class{constructor(t){this.service=t,this.destinations=this.service.getDestinantions()}get(){return this.destinations}getById(t){return this.destinations.find((e=>e.id===t))}}(k),C=new class{constructor(t){this.service=t,this.offers=this.service.getOffers()}get(){return this.offers}getByType(t){return this.offers.find((e=>e.type===t)).offers}}(k),I=new class{constructor(t){this.service=t,this.points=this.service.getPoints()}get(){return this.points}}(k),Y=new class{tripEventListComponent=new D;constructor(t){let{tripMainContainer:e,tripEventsContainer:n,destinationsModel:i,offersModel:s,pointsModel:r}=t;this.tripMainContainer=e,this.tripEventsContainer=n,this.destinationsModel=i,this.offersModel=s,this.pointsModel=r,this.points=[...r.get()]}init(){i(new E,this.tripMainContainer,t.AFTERBEGIN),i(new S,this.tripMainContainer),i(new w,this.tripEventsContainer),i(new b({point:this.points[0],pointDestinations:this.destinationsModel.get(),pointOffers:this.offersModel.get()}),this.tripEventsContainer,t.BEFOREEND),i(this.tripEventListComponent,this.tripEventsContainer),this.points.forEach((t=>{i(new M({point:t,pointDestination:this.destinationsModel.getById(t.destination),pointOffers:this.offersModel.getByType(t.type)}),this.tripEventListComponent.getElement())}))}}({tripMainContainer:O,tripEventsContainer:H,destinationsModel:x,offersModel:C,pointsModel:I});Y.init()})()})();
//# sourceMappingURL=bundle04a82a17affe32c08aa2.js.map