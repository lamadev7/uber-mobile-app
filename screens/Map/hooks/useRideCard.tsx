import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../../redux/slices';

export default function useRideCard() {
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    const data = [
        {
            id: 1,
            title: "Uber-X-1",
            multiplier: 1,
            image: "https://links.papareact.com/3pn",
        },
        {
            id: 2,
            title: "Uber-X-2",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8",
        },
        {
            id: 3,
            title: "Uber-X-3",
            multiplier: 1.5,
            image: "https://links.papareact.com/7pf",
        },
    ];

    const [selectedRider, setSelectedRider] = useState<any>();

    const handleSelectRider = (id: any) => {
        console.log({ id })
        setSelectedRider(id);
    }

    return {
        data,
        selectedRider,
        travelTimeInformation,
        handleSelectRider,
    }
}
