import { useSelector } from 'react-redux'
import { selectOrigin } from '../../../redux/slices'

export default function useMap() {
    const origin = useSelector(selectOrigin);

    return {
        origin
    }
}
