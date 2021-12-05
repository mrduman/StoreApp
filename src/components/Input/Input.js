import React from "react";
import { View, TextInput } from "react-native";
import styles from './Input.style'

export default function Input({placeholder , onChangeText}) {

    return(
        <View style = {styles.container}>
            <TextInput placeholder = {placeholder} onChangeText = {onChangeText} />
        </View>
    )
    
}