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


const getIntersection = (data: string, loc: GPS) => {
  try {
    const cleanBlob: intersectionObject = JSON.parse(data);
    let status = cleanBlob.signalGroups.find(
      (group)=> group.signalGroupId === loc.direction
    );
    return status;

  } catch (error) {
    console.error("Invalid JSON string:", error);
  }
  
  return null;
}


//===========================================
// Get Status Code and helper objects
//===========================================

enum Status{
  Walk,
  Warning,
  Stop
}

const getStatus = (data: signalGroupObject) =>{
 return Status.Stop;
};
