import React from "react";
import { Text ,TouchableOpacity} from "react-native";
import styles from './Button.style'

export default function Button({text}) {
    
    return(
        <TouchableOpacity style = {styles.container}>
            <Text style = {styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}