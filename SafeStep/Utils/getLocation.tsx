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