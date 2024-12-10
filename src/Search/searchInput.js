import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-paper';
import {styles} from './searchInputStyle';
export function searchInput(props){
    return(
        <View style={styles.container} >
            <View style={styles.container2} >
            <SearchBar placeholder="Buscar receta..." autoCapitalize="none" style={styles.searchBar} />
        </View>
        </View>
    )
}