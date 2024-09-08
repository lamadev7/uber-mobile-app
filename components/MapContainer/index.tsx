import React from 'react';
import tailwind from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function MapContainer({ mapRef, origin, destination }: any) {

    return (
        <MapView
            ref={mapRef}
            style={tailwind`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin?.location?.lat ?? 100,
                longitude: origin?.location?.lng ?? 100,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {
                origin && (
                    <Marker
                        title="Origin"
                        identifier='origin'
                        description={origin.description}
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                    />

                )
            }

            {
                destination && (
                    <Marker
                        title="Destination"
                        identifier='destination'
                        description={destination.description}
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                    />
                )
            }

            {/* {
                origin && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={process.env.GOOGLE_MAPS_PLACES_API_KEY}
                        strokeWidth={3}
                        strokeColor='black'
                    />
                )
            } */}
        </MapView>
    )
}
