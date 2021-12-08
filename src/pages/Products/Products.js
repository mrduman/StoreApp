import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import styles from './Products.style'
import Config from 'react-native-config'
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch, useSelector } from "react-redux";



const Products = ({ navigation }) => {

    const { data, loading, error } = useFetch(Config.API_URL)
    const user = useSelector(s => s.user);

    const handleProductSelect = (id) => {
        navigation.navigate('DetailPage', { id })
    }


    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }


    return (

        <View style = {{padding : 2}}>
            <Text style = {{fontWeight : 'bold' , color : 'black', fontSize : 22}} >Hello : {user.name.firstname}</Text>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;