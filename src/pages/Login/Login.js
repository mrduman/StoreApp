import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from './Login.style'

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.image} source={require('../../asstes/logo-icon.png')} />
            </View>
            <Input placeholder='Text to Username' />
            <Input placeholder='Text to Password' />
            <Button text='Login' />
            <View style={styles.body_container}>
                <Text></Text>
            </View>
        </View>
    )

}