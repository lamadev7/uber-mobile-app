import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../../redux/slices';

export default function useNav() {
    const navigation = useNavigation<any>();
    const origin = useSelector(selectOrigin);

    const [navItems, setNavItems] = useState([]);


    useEffect(() => {
        const items: any = [
            {
                id: 1,
                title: "Get a ride",
                image: require("../../../assets/taxi.png"),
                screen: "Map"
            },
            {
                id: 2,
                title: "Get a food",
                image: require("../../../assets/food.png"),
                screen: "Eat"
            },
            {
                id: 3,
                title: "Parcel Foods",
                image: require("../../../assets/logistics.png"),
                screen: "Parcel"
            },
        ];

        setNavItems(items);
    }, []);

    const handleRedirect = (route: string) => {
        if (route) navigation.navigate(route);
    }

    return {
        origin,
        navItems,
        handleRedirect,
    }
}
