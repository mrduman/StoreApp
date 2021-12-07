import React from "react";
import { View, TextInput } from "react-native";
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Input({placeholder , onChangeText, value,onBlur, iconName, hidePassword}) {

    return(
        <View style = {styles.container}>
            <TextInput
             placeholder = {placeholder} 
             onChangeText = {onChangeText} 
             value = {value}
             onBlur = {onBlur}
             style = {styles.input}
             secureTextEntry = {hidePassword}
             
             
             />
             <Icon name = {iconName} size = {27} style = {{top : 11 }} />
        </View>
    )
    
}