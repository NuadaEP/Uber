import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCD_811GmrjMKLCC2_kqKKB_AfgZpfbk_8"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}

export default Directions;
