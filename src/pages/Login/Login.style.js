import {StyleSheet , Dimensions} from 'react-native'



export default StyleSheet.create ({

    container : {
        flex : 1,
        backgroundColor : '#64b5f6'
    },
    logo_container : {},
    image : {
        height : Dimensions.get('window').height/3,
        width : Dimensions.get('window').width*0.7,
        alignSelf : 'center',
        right : 14,
        tintColor : 'white'
    },
    body_container : {}
})