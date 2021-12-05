import {StyleSheet , Dimensions} from 'react-native'



export default StyleSheet.create ({

    container : {
        flex : 1,
        backgroundColor : '#64b5f6'
    },
   
    image : {
        height : Dimensions.get('window').height/3,
        width : Dimensions.get('window').width*0.7,
        alignSelf : 'center',
        right : 18,
        tintColor : 'white'
    }, 
    logo_container : {
        flex : 1,
        justifyContent : 'center'
        
    },
    body_container : {
        flex : 1,
        

    }
})