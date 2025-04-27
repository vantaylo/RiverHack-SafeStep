import { signalGroupObject } from "./getIntersection";
//===========================================
// Config
//===========================================
//Minimum time for crossing
const crossingTime:number = 30;
//===========================================
// Get Status Code and helper objects
//===========================================
enum LightStatus{
    Green = "Green",
    Yellow= "Yellow",
    Red   = "Red"
}

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