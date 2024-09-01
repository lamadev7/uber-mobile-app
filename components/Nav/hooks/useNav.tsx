import { useEffect, useState } from 'react';

export default function useNav() {
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const items: any = [
            {
                id: 1,
                title: "Get a ride",
                image: require("../../../assets/taxi.png"),
                screen: "MapScreen"
            },
            {
                id: 2,
                title: "Get a food",
                image: require("../../../assets/food.png"),
                screen: "EatsScreen"
            },
        ];

        setNavItems(items);
    }, []);

    return {
        navItems
    }
}
