import React, {useMemo} from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function Search() {
  const query = useMemo(
    () => ({
      key: 'AIzaSyCLdoVS9hgWcjWXjS9BzyNN2LM3HT1n3G4',
      language: 'pt',
    }),
    [],
  );

  const textInputProps = useMemo(
    () => ({
      autoCapitalize: 'none',
      autoCorrect: false,
    }),
    [],
  );

  const style = useMemo(
    () => ({
      container: {
        position: 'absolute',
        top: Platform.select({ios: 60, android: 40}),
        width: '100%',
      },
      textInputContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 54,
        marginHorizontal: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0,
      },
      textInput: {
        height: 54,
        margin: 0,
        borderRadius: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {x: 0, y: 0},
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 18,
      },
      listView: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {x: 0, y: 0},
        shadowRadius: 15,
        marginTop: 10,
      },
      description: {
        fontSize: 16,
      },
      row: {
        padding: 10,
        heigth: 58,
      },
    }),
    [],
  );

  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      placeholderTextColor="#333"
      onPress={() => {}}
      query={query}
      textInputProps={textInputProps}
      fetchDetails
      enablePoweredByContainer={false}
      styles={style}
    />
  );
}

export default Search;
