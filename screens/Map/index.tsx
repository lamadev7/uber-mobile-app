import tw from 'twrnc';
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useMap from './hooks/useMap';
import RideCard from './component/RideCard';
import MapContainer from '../../components/MapContainer';
import NavigateCard from './component/NavigateCard';

export default function Map() {
    const { mapRef, origin, destination } = useMap();
    const Stack = createNativeStackNavigator();

    return (
        <View>
            {
                (origin || destination) && (
                    <View style={tw`h-1/2`}>
                        <MapContainer mapRef={mapRef} origin={origin} destination={destination} />
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
