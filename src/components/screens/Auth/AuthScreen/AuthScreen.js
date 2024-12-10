import { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { LoginForm } from '../../../Auth/LoginForm/LoginForm';
import { RegisterForm } from '../../../Auth/LoginForm/RegisterForm/RegisterForm';
import logo from '../../../../../assets/logo.png';
import { styles } from './AuthScreen.styles';


export  function AuthScreen(){
    const [showLogin,setShowLogin]=useState(True);

    const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);

    useState
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "heading"}
            >
                {showLogin ? (
                    <LoginForm showRegister={onShowLoginRegister} />
                ): (
                    <RegisterForm showLogin={onShowLoginRegister}/>
                )}
            </KeyboardAvoidingView>
        </View>
    )
}