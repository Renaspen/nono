import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import { globalStyles } from "../../../../Styles/indexs";
import { initialValues, validationSchema } from "./RegisterForm.form";

export function RegisterForm(props){
    const {showLogin} = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange:false,
        onSubmit:async (formValue) => {
          try{
            const{email,username,password}=formValue;
            await authControl.register(email,username,password);
            showLogin();
          }catch(error){
            Toast.show("error al registrar el usuario")
            position: Toast.positions.CENTER
          }
            console.log("formulario enviar");
            console.log(formValue);
        },
    });
    return(
        <View>
        <TextInput 
            label="Correo electronico"
            style={globalStyles.form.input} 
            autoCapitalize="none"
            onChangeText={(text)=> formik.setFieldValue("email",text)}
            value={formik.values.email}
            error={formik.errors.email}
        />        
        <TextInput 
            label="Nombre de usuario"
            style={globalStyles.form.input} 
            autoCapitalize="none"
            onChangeText={(text)=> formik.setFieldValue("username",text)}
            value={formik.values.username}
            error={formik.errors.username}
        />
        <TextInput 
            label="Contraseña"
            style={globalStyles.form.input} 
            secureTextEntry
            onChangeText={(text)=> formik.setFieldValue("password",text)}
            value={formik.values.password}
            error={formik.errors.password}
        />
        <TextInput 
        label="Repetir contraseña"
        style={globalStyles.form.input} 
        secureTextEntry
        onChangeText={(text)=> formik.setFieldValue("repeatPassword",text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
        />

        <Button 
            mode="contained" 
            style={globalStyles.form.btnSubmit}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        >
            Registrarse</Button>
        <Button mode="text" style={globalStyles.form.btnText} labelStyle={globalStyles.form.btnTextLabel }onPress={showLogin}>Iniciar sesion</Button>
        </View>
    )
}