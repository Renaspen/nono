import {scrollView} from 'react-native';
import {search, statusBar} from '../components';

export function layouts(props){
    const {children, hideSearch=false}=props;
    return(
        <>
        <StatusBar backgroundColor= "#f1f0f2" barStyle="light-content" />
        {!highSearch&& <SearchBar.Inpunt/> }
        <scrollView> {children} </scrollView>
        </>
    )
}