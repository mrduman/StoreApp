import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from './Login.style'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import usePost from "../../hooks/usePost";
import Config from "react-native-config";

import { useDispatch } from "react-redux";



export default function Login({ navigation }) {

    const { data, error, loading, post } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post(Config.API_AUTH_URL + '/login', values);
    }

    if (error) {
        Alert.alert('Store', 'There is a Error');
    }

    if (data) {
        if (data.status === 'Error') {

            Alert.alert('Store', 'User have not found')
        }
        else {
            dispatch({type : 'SET_USER' , payload : {user}})
            navigation.navigate('ProductsPage')
        }
    }


    console.log(data)

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2)
            .max(50)
            .required('Required'),
        password: Yup.string()
            .required()
            .min(4)
            .max(20)

    })

   

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.image} source={require('../../asstes/logo-icon.png')} />
            </View>

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={SignupSchema}

            >

                {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.body_container}>
                            <Input
                                placeholder='Text to Username'
                                value={values.username}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('ussername')}
                                iconName={'account'}
                            />
                            <Text style={styles.text}>{touched.username && errors.username}</Text>


                            <Input
                                placeholder='Text to Password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                iconName={'key'}
                                hidePassword
                            />

                            <Text style={styles.text}>{touched.password && errors.password}</Text>

                            <Button text='Login' onPress={handleSubmit} loading={loading} />
                        </View>
                    </TouchableWithoutFeedback>)}
            </Formik>
        </View>
    )

}

const user = 
{"address":{"geolocation":{"lat":"50.3467","long":"-20.1310"},
"city":"San Antonio",
"street":"Hunters Creek Dr",
"number":6454,
"zipcode":"98234-1734"},
"id":4,
"email":"don@gmail.com",
"username":"donero",
"password":"ewedon",
"name":{"firstname":"don","lastname":"romer"},
"phone":"1-765-789-6734","__v":0}