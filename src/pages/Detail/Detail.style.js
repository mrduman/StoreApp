import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({

    container : {
        flex :1
    }, 
    inner_container: {
        padding : 10,
        
    }, 
    image : {
        width : deviceSize.width,
        height : deviceSize.height / 3,
        resizeMode : 'contain',
        backgroundColor : 'white'
    },
    title : {
        fontWeight : 'bold',
        fontSize :26,
        color : 'black'
    },
    description : {
        fontStyle : 'italic',
        fontSize : 18,
        color : 'black',
        marginVertical : 6
    },
    price : {
        fontWeight : 'bold',
        fontSize : 22,
        textAlign : 'right',
        margin : 10,
        color:'black'
    },
   
})