import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function Search() {
  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      placeholderTextColor="#333"
      onPress={() => {}}
      query={{
        key: 'AIzaSyCLdoVS9hgWcjWXjS9BzyNN2LM3HT1n3G4',
        language: 'pt',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      fetchDetails
      enablePoweredByContainer={false}
    />
  );
}

export default Search;
