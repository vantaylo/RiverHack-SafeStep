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
