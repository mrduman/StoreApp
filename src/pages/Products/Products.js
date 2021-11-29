import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from './Products.style'
import Config from 'react-native-config'
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const Products = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)



    async function fetchData() {
        try {

            const { data: productData } = await axios.get(Config.API_URL);
            setData(productData)
            setLoading(false)

        } catch (err) {
            setError(err.message)
            setLoading(false)

        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    const renderProduct = ({ item }) => <ProductCard product={item} />

    if (loading) {
        return <ActivityIndicator size='large' />
    }

    if (error) {
        return <Text>{error}</Text>
    }


    return (
        <View style={styles.container} >
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;