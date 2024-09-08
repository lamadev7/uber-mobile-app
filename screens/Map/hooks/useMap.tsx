import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../../redux/slices';
import { useNavigation } from '@react-navigation/native';

export default function useMap() {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current?.fitToSuppliedMarkers(
            ["origin", "destination"],
            {
                edgePadding: {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50,
                }
            }
        );

        getTravelTime();

    }, [origin, destination]);

    const getTravelTime = async () => {
        try {
            const api = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin?.description}&units=imperial&key=${process.env.GOOGLE_MAPS_PLACES_API_KEY}`;

            let response: any = await fetch(api);
            response = await response.json();

            console.log({ response, env: process.env.GOOGLE_MAPS_PLACES_API_KEY, des: destination.description, orig: origin?.description })

            if (response?.rows[0]) dispatch(setTravelTimeInformation(response?.rows[0]?.elements[0]));
            else dispatch(setTravelTimeInformation({
                distance: { text: '203 Mi' },
                duration: { text: '54 Min' }
            }));
        } catch (error) {
            console.error(error)
        }
    }

    const handleRedirectToHome = () => {
        navigation.navigate("Home");
    }
    return {
        mapRef,
        origin,
        destination,
        handleRedirectToHome,
    }
}
