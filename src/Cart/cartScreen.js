import {View, Text} from 'react-native';
import { Style } from '../Cart/cartScreenStyle';
import { useCart } from '../Hooks';
import { useEffect } from 'react';
export function cartScreen(){
    const [product, setProduct] = useState(null);
    const {cart} = useCart();
    console.log(cart);
    useEffect(()=>{})
    return(
        <View>
            <Text>cartScreen</Text>
        </View>
    )
}