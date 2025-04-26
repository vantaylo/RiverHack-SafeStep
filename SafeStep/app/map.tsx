import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MyMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Request the user's location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.01, // Adjust zoom level
          longitudeDelta: 0.01,
        });
      },
      (error) => {
        console.error('Error getting location: ', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={map_styles.container}>
      {location ? (
        <MapView
          style={map_styles.map}
          initialRegion={location}
        >
          {/* Add a marker at the user's location */}
          <Marker coordinate={location} />
        </MapView>
      ) : null}
    </View>
  );
};

export default MyMap;

const map_styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
