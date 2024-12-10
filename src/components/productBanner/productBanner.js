import { View, Text, Dimensions } from 'react-native'
import Carousel,{pagination} from 'de-react-native-snap-carousel';
import { styles } from './productBanner.style';
import { userNavigation } from '@react-navigation/native';
import { screensName } from '../../utils';
import { styles } from '../productBanner';
import { useState } from 'react';
const width = Dimensions.get("window").width;
export default function productBanner(props) {
    const {banners}=props;
    const navigation = userNavigation();
    const [BannerActive,setBannerActive]= useState(second);
    const goToProduct = (id)=>{
      navigation.navigate(screensName.home.product,{productId:id});
    };
    const renderItem=({item})=>{
      const urlImage=item.atributes.banner.data.atributes.url;
    }
  return (
   <Pressable onPress= {()=>goToProduct(item.id)}>
    <Image source={{uri:urlImage}} style={styles.carousel}/>
   </Pressable>
  );
};
return(
  <View style={styles.container}>
    <Carousel layout="default"
    data={banners}
    sliderWidth={width}
    itemWidth={width}
    renderItem={renderItem}
    />
    <Pagination dotsLength={10}
    activeDotsIndex={3}
    inActiveDotsOpacity={0.6}
    inActiveDotsScale={0.6}
    containerStyles={styles.dotsContainer}
    dotsStyles={styles.dot}
    inActiveDotStyle
    />
  </View>
)