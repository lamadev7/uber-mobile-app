import tw from 'twrnc';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import useMap from './hooks/useMap';

export default function Map() {
    const { origin } = useMap();

    return (
        <>
            {
                origin && (
                    <MapView
                        style={tw`flex-1`}
                        mapType='mutedStandard'
                        initialRegion={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            title="Origin"
                            identifier='origin'
                            description={origin.description}
                            coordinate={{
                                latitude: origin.location.lat,
                                longitude: origin.location.lng
                            }}
                        />

                    </MapView>
                )
            }
        </>
    )
}
