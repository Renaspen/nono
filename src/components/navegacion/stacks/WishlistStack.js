import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { wishlistScreen } from "../../screens/wishlist/wishlistScreen";
import { screensName } from "../../../utils/screensName";

const Stack =  createNativeStackNavigator();

export function WishlistStack(){
    return(// solo tendra una pagina por ello solo un stack
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={screensName.wishlist.wishlist}
                component={wishlistScreen}
            />
        </Stack.Navigator>
    )
}