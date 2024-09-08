import tw from 'twrnc';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useMap from './hooks/useMap';
import RideCard from './component/RideCard';
import MapContainer from '../../components/MapContainer';
import NavigateCard from './component/NavigateCard';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';

export default function Map() {
    const { mapRef, origin, destination, handleRedirectToHome } = useMap();
    const Stack = createNativeStackNavigator();

    return (
        <View>
            <TouchableOpacity
                onPress={handleRedirectToHome}
                style={tailwind`absolute left-7 top-18 z-999 bg-white p-4 rounded-full shadow-lg`}
            >
                <Icon name='menu' />
            </TouchableOpacity>
            {
                (origin || destination) && (
                    <View style={tw`h-1/2`}>
                        <MapContainer mapRef={mapRef} origin={origin} destination={destination} />
                    </View>
                )
            }
            {

                !origin && !destination && (
                    <View style={tw`h-1/2`}>
                        <MapContainer mapRef={mapRef} />
                    </View>
                )
            }
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='RideCard'
                        component={RideCard}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}
