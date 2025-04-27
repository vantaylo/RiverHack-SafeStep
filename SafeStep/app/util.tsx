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

const getLocation = () => {const location : GPS = {
    latitude: 30.255886,
    longitude: -97.685076,
    direction: CompassDirection.North
  }
  return location;
} 

console.log(getLocation());


enum LightStatus{
  Green = 1,
  Yellow,
  Red
}
interface signalGroupObject{
  signalGroupId: CompassDirection,
  direction: string,
  signalPhase: LightStatus,
  timeRemaining: number,
}
interface intersectionObject {
  timestamp: number;
  intersectionId: number;
  intersectionName: string;
  signalGroups: Array<signalGroupObject>
}


const getIntersection = (data: string, loc: GPS) => {
  try {
    const cleanBlob: intersectionObject = JSON.parse(data);
    console.log(cleanBlob.signalGroups);
  } catch (error) {
    console.error("Invalid JSON string:", error);
  }
  

  //data.filter((data) => data.length > 6)
}

