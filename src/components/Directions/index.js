import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyC0gAJ33Bp1R4CGX8ytZh-cIEU-1JulKj0"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}

export default Directions;
