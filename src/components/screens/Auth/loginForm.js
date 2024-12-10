import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { globalStyles } from '../../Styles/styleIndex'; 
import { initialValues } from './LoginForm/RegisterForm/registerForm.form';
import { validationSchema } from './LoginForm/RegisterForm/loginForm.form';

export function loginForm() {
  const {showRegister}=props;
  const formik = userFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onsubmit: async (formValue)=> {
     try{console.log(formValue);

     } catch (error){
      Toast.show("Usuario o contraseña incorrecta",{
        position: Toast.positions.CENTER,
      });
     }
    }
  });
  return (
    <View>
      <TextInput 
      label="correo electronico" 
      style={globalStyles.form.input} 
      autoCapitalize='none'
      onChangeText={(text)=>formik.setFieldValue("email,text")}
      value= {formik.values.email}
      error= {formik.errors.error}
      />
      <TextInput 
      label="contraseña"  
      style={globalStyles.form.input} 
      secureTextEntry
      onChangeText={(text)=>formik.setFieldValue("password,text")}
      value= {formik.values.password}
      error= {formik.errors.error}/>
      <Button 
      mode="container"
      style={globalStyles.form.btnSubmit} onPress={formik.handleSubmit} loading={formik.isSubmitting} > Comenzar </Button>
      <Button
       mode="text"
       style={globalStyles.form.btnText}
       labelStyle={globalStyles.form.btnTextLabel}
       onPress={showRegister} >
        Registrarse </Button>
      </View>

  )
}