import {View,Text,TouchableWithoutFeedback,Image} from 'react-native';
import {React} from 'react';
import {styles} from './productStyle';
import {useNavigation} from '@react-navigation/native';
import {screensName} from '../../../../utils';

export default function product(){
    const {product}=props;
    const navigation = useNavigation(); 
    const nameImage = product.mainImage.data.atributes.url;
    const goToProduct =()=>{
        console.log(product.id);
        navigation.navigate(screenName.home.product,{productId:product.Id})
    }
    return(
        <TouchableWithoutFeedback onPres={goToProduct} >
            <View style={styles.container}>
                <View style={styles.product} >
                    <Image source={{uri:null}} style={styles.image} />
            <Text style={styles.name} numberOfLine={1} elipsizeMode="tail" >
                {product.title}
            </Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}