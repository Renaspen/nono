import { View, Text, Dimensions } from 'react-native'
import Carousel,{pagination} from 'de-react-native-snap-carousel';
import { styles } from './productBanner.style';
import { userNavigation } from '@react-navigation/native';
import { screensName } from '../../utils';
import { styles } from '../productBanner';
import { useState } from 'react';
import { wishlistCtrl } from '../screens/wishlist/wishlistScreen';

export favorito reactComponent (){
    const deleteWishlist = async()=>{
        setLoading(True);
        await wishlistCtrl.delete(useId, productId);
    
    try{

    }catch(error){
        Toast.show("no se pudo eliminar",{
            position:Toast.positios.CENTER,
        });
    }
};
if(hasWishlist===undefined){
    return null
    
}
return(
      <IconButton icon="heart" style={styles.button} size={30} iconColor={hasWishlist ?"gray" : "blue"} 
      onPress={hasWishlist ? deleteWishlist : addWishlist}/>
    )
}