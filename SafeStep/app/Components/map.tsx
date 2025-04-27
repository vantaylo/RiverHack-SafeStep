import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet } from "react-native";
;import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const location = () => {
  Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );}

  export default location;

// const MyMap = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     if (hasLocationPermission)
//     // Request the user's location
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({
//           latitude,
//           longitude,
//           latitudeDelta: 0.01, // Adjust zoom level
//           longitudeDelta: 0.01,
//         });
//       },
//       (error) => {
//         console.error('Error getting location: ', error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   }, []);

//   return (
//      location
//   );
// };

// export default location;

// const map_styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });
