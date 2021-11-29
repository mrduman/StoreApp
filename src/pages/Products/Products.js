import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from './Products.style'
import Config from 'react-native-config'
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error  from "../../components/Error";

const Products = ({navigation}) => {

   const{data,loading,error} = useFetch(Config.API_URL)

   const handleProductSelect = (id) => {
       navigation.navigate('DetailPage' , {id})
   }


    const renderProduct = ({ item }) => <ProductCard product={item}  onSelect ={() => handleProductSelect(item.id)}/>

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error/>;
    }


    return (
       
            <FlatList data={data} renderItem={renderProduct} />
        
    )
}

export default Products;