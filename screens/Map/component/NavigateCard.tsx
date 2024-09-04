import React from 'react';
import tailwind from 'twrnc';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import useNavigateCard from '../hooks/useNavigateCard';

export default function NavigateCard() {
    const { handleDestinationLocationPress } = useNavigateCard();

    return (
        <View style={tailwind`flex-1 `}>
            <Text style={tailwind`py-5 text-center text-xl`}>Good Morning, Parbat</Text>
            <View style={tailwind`flex-shrink px-5`}>
                <View>
                    <GooglePlacesAutocomplete
                        debounce={400}
                        fetchDetails={true}
                        placeholder='Where to ?'
                        enablePoweredByContainer={false}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        onPress={handleDestinationLocationPress}
                        query={{
                            key: process.env.GOOGLE_MAPS_PLACES_API_KEY,
                            language: 'en',
                        }}
                        styles={{
                            container: { flex: 0 },
                            textInput: { fontSize: 16 }
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
