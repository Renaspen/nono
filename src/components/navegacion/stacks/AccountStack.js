import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../../screens/Account/AccountScreen";
import { ChangeNameScreen } from "../../screens/Account/ChangeNameScreen";
import { ChangeEmailScreen } from "../../screens/Account/ChangeEmailScreen";
import { ChangeUserNameScreen } from "../../screens/Account/ChangeUserNameScreen";
import { ChangePasswordScreen } from "../../screens/Account/ChangePasswordScreen";
import { screensName } from "../../../utils/screensName";

const Stack =  createNativeStackNavigator();

export function AccountStack (){
    return (
    <Stack.Navigator >
        <Stack.Screen name={screensName.account.account} component={AccountScreen} options={{headerShown: false}}/>
        <Stack.Screen name={screensName.account.changeName} component={ChangeNameScreen} options={{title:"cambiar nombre y apellido"}}/>
        <Stack.Screen name={screensName.account.changeEmail} component={ChangeEmailScreen} options={{title:"cambiar correo electronico"}}/>
        <Stack.Screen name={screensName.account.changeUsername} component={ChangeUserNameScreen} options={{title:"cambiar nombre de usuario"}}/>
        <Stack.Screen name={screensName.account.changePassword} component={ChangePasswordScreen} options={{title:"cambiar contraseña"}}/>

    </Stack.Navigator>
             
    )
} 