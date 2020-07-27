import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCLdoVS9hgWcjWXjS9BzyNN2LM3HT1n3G4"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}

export default Directions;
