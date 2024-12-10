// es el mas importante hara que navege con login o restringe el acceso
import { View } from "react-native";
import { AuthScreen } from "../screens/Auth/AuthScreen/AuthScreen";
import { AppNavigation } from "./AppNavigation";


export function RootNavigation() {
    const user = null;

    return user ? <AppNavigation /> : <AuthScreen />;
}