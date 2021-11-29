import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container : {
        backgroundColor : '#e0e0e0',
        borderWidth : 1,
        borderColor : '#bdbdbd',
        margin : 10,
        flexDirection : 'row',
    },
    image : {
        width : 100,
        minHeight :100,
        resizeMode : 'contain',
        backgroundColor : 'white',
    },
    body_container : {
        flex : 1,
        padding :5,
        justifyContent : 'space-between',
    },
    title : {
        fontWeight : 'bold',
        color :'black',
        fontSize : 18,
    },
    price : {
        textAlign : 'right',
        fontWeight : 'bold',
        fontSize :16,
        fontStyle :'italic'
    }
})