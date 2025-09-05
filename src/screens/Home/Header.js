import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

import logo from '../../../assets/logo.png';

export default function Header(){
    return <View>
        <Image source={logo} />
        <text>Olá, Jorge! </text>
        <Text>Encontre os melhores produtores</Text>

    </View>
}

const styles = StyleSheet.create({

});