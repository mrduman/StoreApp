import AnimatedLottieView from "lottie-react-native";
import React from "react";



export default function Loading() {
    return <AnimatedLottieView source = {require ('../../asstes/loading.json')} autoPlay /> ;
}