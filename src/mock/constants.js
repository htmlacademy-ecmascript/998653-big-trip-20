const POINT_COUNT = 3;

const PointType = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECKIN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

const PointTypeDescription = {
  [PointType.TAXI]: 'Taxi',
  [PointType.BUS]: 'bus',
  [PointType.TRAIN]: 'train',
  [PointType.SHIP]: 'ship',
  [PointType.DRIVE]: 'drive',
  [PointType.FLIGHT]: 'flight',
  [PointType.CHECKIN]: 'check-in',
  [PointType.SIGHTSEEING]: 'sightseeing',
  [PointType.RESTAURANT]: 'restaurant',
};
const CITY_NAME = ['Chamonix', 'Geneva', 'Amsterdam', 'Helsinki', 'Oslo', 'Kopenhagen', 'Den Haag', 'Rotterdam', 'Saint Petersburg', 'Moscow', 'Sochi', 'Tokio', 'Kioto', 'Nagasaki', 'Hiroshima', 'Berlin', 'Munich', 'Frankfurt', 'Vien', 'Rome', 'Naples', 'Venice', 'Milan', 'Monaco', 'Paris', 'Barcelona', 'Valencia', 'Madrid'];

const CITY_DESCRIPTION = [
  'a true asian pearl, with crowded streets, with a beautiful old town',
  'with a beautiful old town, middle-eastern paradise',
  'with a beautiful old town, middle-eastern paradise',
  'a true asian pearl, in a middle of Europe, with a beautiful old town',
  'with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East',
  'with crowded streets, in a middle of Europe, famous for its crowded street markets with the best street food in Asia',
  'a true asian pearl, in a middle of Europe, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
  'pictures',
  'ith a beautiful old town',
  'is a beautiful city, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
  'pictures'
];

const PICTURE_DESCRIPTION = [
  'Chamonix biggest supermarket',
  'Geneva kindergarten',
  'Amsterdam central station',
  'Helsinki kindergarten',
  'Oslo city centre',
  'Kopenhagen parliament building',
  'Den Haag city centre',
  'Rotterdam kindergarten',
  'Saint Petersburg parliament building'
];

const OFFER_TITLE = [
  'Choose VIP area',
  'With air conditioning',
  'With automatic transmission',
  'Business lounge',
  'Add luggage',
  'Upgrade to business class',
  'Choose seats',
  'Choose meal',
  'Order a meal from the restaurant',
  'Add breakfast',
  'Choose the time of check-out',
  'Wake up at a certain time'
];

export{PointType,PointTypeDescription, CITY_NAME, CITY_DESCRIPTION, PICTURE_DESCRIPTION, OFFER_TITLE, POINT_COUNT };
