import React from "react";
import { View, Text, Image } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from './Detail.style'
import Config from "react-native-config";
import Loading from "../../components/Loading";

export default function Detail({ route }) {

    const { id } = route.params;
    const { loading, error, data } = useFetch(`${Config.API_URL}/${id}`)
    console.log(id)

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    )

}