import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../../../redux/slices';
import { useEffect, useRef } from 'react';

export default function useMap() {
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
        console.log({ origin, destination, mapRef })
    }, [origin, destination]);

    return {
        mapRef,
        origin,
        destination,
    }
}
