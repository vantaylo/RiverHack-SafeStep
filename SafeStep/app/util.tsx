//===========================================
// Config
//===========================================
//Minimum time for crossing
const crossingTime:number = 30;

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

const getLocation = () => {const location : GPS = {
    latitude: 30.255886,
    longitude: -97.685076,
    direction: CompassDirection.North
  }
  return location;
} 

//===========================================
// Get Intersection Code and helper objects
//===========================================

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

enum Status{
  Walk="Walk",
  Warning="Warning",
  Stop="STOP"
}

const getStatus = (data: signalGroupObject) =>{
  let status:Status;
  if(data.signalPhase == LightStatus.Green && data.timeRemaining >= crossingTime){
    status= Status.Walk;
  }
  else if (data.signalPhase == LightStatus.Red) {
    status= Status.Stop;
  } 
  else {
    status= Status.Warning;    
  }
 return status;
};


// let bleh:signalGroupObject = {signalGroupId: CompassDirection.East, direction:"East", signalPhase: LightStatus.Green, timeRemaining: 55};
// console.log( getStatus(bleh));
