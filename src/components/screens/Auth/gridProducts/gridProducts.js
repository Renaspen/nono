import { View, Text } from 'react-native';
import { styles } from 'greatProductStyle';
import { map } from './gridProductStyle';
import { product } from './gridProducts'
export function gridProducts(props){
    const {title,products}=props;
    return (
        <View style={styles.container} >
            {title&&<text style={styles.title} >
                {title}
                </text>}
                <View style={styles.gridContainer} >
                    {map(products,(item)=>{
                        product.id=item.id;
                            const product = item.atributes;
                        console.log(product);
                        return(
                           <product key={product.id} product={product} />
                        )
                    })}
                </View>
        </View>

     )
}
