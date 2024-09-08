import React from 'react';
import tailwind from 'twrnc';
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import useNavigateCard from '../hooks/useNavigateCard';
import NavFavourites from '../../../components/NavFavourites';

export default function NavigateCard() {
    const { handleDestinationLocationPress, handleNavigateTo } = useNavigateCard();

    return (
        <View style={tailwind`flex-1 pt-5 pb-10 justify-between`}>
            <View>
                <Text style={tailwind`pb-5 text-center text-xl`}>Good Morning, Parbat</Text>
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
                                textInput: { fontSize: 14, paddingLeft: 20 }
                            }}
                        />
                    </View>
                    <NavFavourites />
                </View>
            </View>
            <View style={tailwind`flex flex-row justify-evenly px-3 py-4`}>
                <TouchableOpacity onPress={() => handleNavigateTo("RideCard")} style={tailwind`flex flex-row gap-2 bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon type='font-awesome' name='car' color='white' size={16} />
                    <Text style={tailwind`text-white`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`flex flex-row gap-2 w-24 px-4 py-3 rounded-full`}>
                    <Icon type='font-awesome' name='car' color='black' size={16} />
                    <Text style={tailwind``}>Eats</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
