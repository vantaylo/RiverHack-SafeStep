//===========================================
// Get Intersection Code and helper objects
//===========================================
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
