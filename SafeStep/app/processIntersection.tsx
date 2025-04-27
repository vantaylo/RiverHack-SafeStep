import { getLocation } from './getLocation';
import { signalGroupObject, getIntersection, getIntersectionName } from './Components/getIntersection';
import { getStatus } from './getStatus';


//mocked intersection database
import mockedDB from '../mock/mock.json'

// types
enum CompassDirection {
  North = 1,
  East,
  South,
  West,
}
interface GPS {
  latitude: number;
  longitude: number;
  direction: CompassDirection;
}

//Easy all-in function for hook
export const processIntersection = () => {
  const loc = getLocation();
  //mocked file
  let pickRandomIntersection = mockedDB[Math.floor(Math.random() * mockedDB.length)];
  let intersectionName = getIntersectionName(JSON.stringify(pickRandomIntersection));
  const signal = getIntersection(JSON.stringify(pickRandomIntersection), loc);
  const status = getStatus(signal);
  return {status, intersectionName};
};
