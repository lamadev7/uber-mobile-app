import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../../redux/slices";

export default function useHome() {
    const dispatch = useDispatch();

    const handleLocationSelect = (data: any, details: any) => {
        if (details) {
            dispatch(setOrigin({
                location: details?.geometry?.location,
                description: data?.description
            }));
            dispatch(setDestination(null));
        }
    }

    return {
        handleLocationSelect,
    }
}
