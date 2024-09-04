
import tw from 'twrnc';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Nav from '../../components/Nav';
import useHome from './hooks/useHome';

export default function Home() {
  const { handleLocationSelect } = useHome();

  return (
    <SafeAreaView>
      <View style={tw`w-full p-5`}>
        <Image
          source={require("../../assets/uber.png")}
          style={tw`h-[90px] w-[90px]`}
          resizeMode='contain'
        />

        <GooglePlacesAutocomplete
          debounce={400}
          minLength={2}
          placeholder='Search'
          fetchDetails={true}
          onPress={handleLocationSelect}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          query={{
            key: process.env.GOOGLE_MAPS_PLACES_API_KEY,
            language: 'en',
          }}
          styles={{
            container: {
              flex: 0,
              paddingBottom: 25
            },
            textInput: {
              fontSize: 18
            }
          }}
        />
        <Nav />
      </View>
    </SafeAreaView>
  )
}
