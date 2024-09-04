import { useDispatch } from 'react-redux';
import { setDestination } from '../../../redux/slices';
import { useNavigation } from '@react-navigation/native';


export default function useNavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const handleDestinationLocationPress = (data: any, details: any) => {
        dispatch(setDestination({
            location: details?.geometry?.location,
            description: data?.description
        }));
        navigation.navigate("RideCard");
    }

    return {
        handleDestinationLocationPress,
    }
}
