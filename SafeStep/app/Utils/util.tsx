//===========================================
// Config
//===========================================
//Minimum time for crossing
const crossingTime:number = 30;

//mocked intersection database
import mockedDB from '../MockData/mock.json'
//==============================================
// Get Location Mocked Code and helper objects
//==============================================

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
function getRandomEnumValue(): CompassDirection {
  const enumValues = Object.values(CompassDirection).filter(
    (value) => typeof value === "number"
  );
  return enumValues[Math.floor(Math.random() * enumValues.length)] as CompassDirection;
}
const randomDirection = getRandomEnumValue();

export const getLocation = () => {const location : GPS = {
    latitude: 30.255886,
    longitude: -97.685076,
    direction: randomDirection
  }
  return location;
} 

//===========================================
// Get Intersection Code and helper objects
//===========================================

enum LightStatus{
  Green = "Green",
  Yellow= "Yellow",
  Red   = "Red"
}
export interface signalGroupObject{
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

export const getIntersectionName = (data: string) => {return JSON.parse(data).intersectionName;};

export const getIntersection = (data: string, loc: GPS) => {
  //on error return constructed signalGroup that is always a red light
  try {
    const instance: intersectionObject = JSON.parse(data);
    let status = instance.signalGroups.find(
      (group)=> group.signalGroupId === loc.direction
    );
    return status || {signalGroupId: CompassDirection.East, direction:"East", signalPhase: LightStatus.Red, timeRemaining: 55};
    
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return {signalGroupId: CompassDirection.East, direction:"East", signalPhase: LightStatus.Red, timeRemaining: 55};
  }
}


//===========================================
// Get Status Code and helper objects
//===========================================

export enum Status{
  Walk="Walk",
  Warning="Warning",
  Stop="STOP"
}

export const getStatus = (data: signalGroupObject) =>{
  let status:Status;
  if(data.signalPhase === LightStatus.Green && data.timeRemaining >= crossingTime){
    status= Status.Walk;
  }
  else if (data.signalPhase === LightStatus.Red) {
    status= Status.Stop;
  } 
  else {
    status= Status.Warning;    
  }
 return status;
};

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
