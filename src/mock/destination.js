import { nanoid } from 'nanoid';
import { getRandomValue } from '../utils.js';
import { CITIES, DESCRIPTION } from './const.js';


const generateDestination = () => {
  const city = getRandomValue(CITIES);

  return {
    id: nanoid(),
    description: getRandomValue(DESCRIPTION),
    name: city,
    pictures : [
      {
        src: `https://loremflickr.com/248/152?random=${nanoid()}`,
        description: `${city} description`
      }
    ]
  };
};

export { generateDestination };