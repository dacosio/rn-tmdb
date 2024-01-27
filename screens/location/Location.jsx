import { StyleSheet, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const coordinates = {
    latitude: 49.225693,
    longitude: -123.107326,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My location"
  };
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>

      <Marker coordinate={coordinates} title={coordinates.title}/>
    </MapView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});
