import axios from '../config/axios-config';
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const Game = ({ route, navigation}: any) => {
    const { petId } = route.params;
    console.log(petId)
    const tossCoin = async () => {
        try{
            await axios.post(`/pet/${petId}/play`);
            if (Math.random() < 0.9){
                Alert.alert(
                    "Eu Ganhei!",
                    "Muito facil hehe.",
                    [{
                        onPress: () => navigation.navigate("Home")
                    }]
                )
            } else {
                Alert.alert(
                    "Eu Perdi!",
                    "Jogo comprado!",
                    [{
                        onPress: () => navigation.navigate("Home")
                    }]
                )
            }
        } catch(error){
            console.log(error)
        }
    };

    return (
        <Button onPress={tossCoin} style={style.center}><Text style={style.buttonText}>Coin flip!</Text></Button>
    );
}

const style = StyleSheet.create({
    center: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#6750a4',
        margin: 15,
        borderRadius: 15
    },
    buttonText: {
        color: '#fff'
    }
})

export default Game;
