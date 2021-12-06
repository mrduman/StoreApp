import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from './Login.style'
import { Formik } from 'formik'

export default function Login() {

    function handleLogin(values) {
        console.log(values)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.image} source={require('../../asstes/logo-icon.png')} />
            </View>

            <Formik
              initialValues = {{username : '' , password : ''}} 
              onSubmit = {handleLogin}
            >
                
              {({handleChange,handleSubmit,values}) =>  (<View style={styles.body_container}>

                    <Input 
                    placeholder='Text to Username' 
                    value = {values.username}
                    onChangeText = {handleChange('username')}
                    />
                    <Input 
                    placeholder='Text to Password'
                     value = {values.password}
                     onChangeText = {handleChange('password')}
                    />

                    <Button text='Login' onPress = {handleSubmit} />
                </View>)}
            </Formik>
        </View>
    )

}
