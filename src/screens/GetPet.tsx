import { useCallback, useEffect, useState } from "react";
import axios from "../config/axios-config";
import { Alert, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";



const GetPet = ({ route, navigation }: any) => {
    const [pet, setPet] = useState<any>();
    const { petId } = route.params;

    const getPet = async () => {
        try {
            const response = await axios.get(`/pet/${petId}`);
            console.log("BBBBBBB", response.data)
            setPet(response.data);
        } catch(error){
            console.log(error)
        }
    };

    const feedPet = async (id: number) => {
        try {
            await axios.post(`/pet/${id}/food`)
            Alert.alert(
                "Ao mosso!",
                "Pet alimentado com sucesso",
                [{
                    onPress: () => navigation.navigate("Home")
                }]
            )
        } catch(error){
            console.log(error)
        }
    }

    const restPet = async (id: number) => {
        try {
            await axios.post(`/pet/${id}/rest`)
            Alert.alert(
                "A mimir",
                "ZZZZzzzzzz",
                [{
                    onPress: () => navigation.navigate("Home")
                }]
            )
        } catch(error){
            console.log(error)
        }
    }

    const play = async (id: number) => {
        Alert.alert(
            "Vamos jogar!",
            "Você é cara e eu coroa!",
            [{
                onPress: () => navigation.navigate("Game", {
                    petId: id
                })
            }]
        )
        }

        useFocusEffect(
            useCallback(() => {
                getPet();
                return () => {
                    getPet();
                }
            }, [])
        )

    return (
        <SafeAreaView>
            <Card mode="elevated">
                <Card.Cover source={require("../images/bunny.png")} />
                <Card.Content>
                <View style={style.container}>
                        <Text style={style.containerTitleText}>{pet?.name}</Text>
                    </View>
                    <View style={style.container}>
                        <Text style={style.containerItem}>Vida: {pet?.life}</Text>
                    </View>
                    <View style={style.container}>
                        <Text style={style.containerItem}>Fome: {pet?.foodLevel}</Text>
                    </View>
                    <View style={style.container}>
                        <Text style={style.containerItem}>Diversão: {pet?.funLevel}</Text>
                    </View>
                    <View style={style.container}>
                        <Text style={style.containerItem}>Descanso: {pet?.restLevel}</Text>
                    </View>
                </Card.Content>
                <Card.Actions style={style.cardActionsContainer}>
                    <Button style={style.botao} onPress={() => feedPet(petId)}>
                        <Text style={style.textBotao}>Alimentar</Text>
                    </Button>
                    <Button style={style.botao} onPress={() => restPet(petId)}>
                        <Text style={style.textBotao}>Dormir</Text>
                    </Button>
                    <Button style={style.botao} onPress={() => play(petId)}>
                        <Text style={style.textBotao}>Brincar</Text>
                    </Button>
                </Card.Actions>
            </Card>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    containerTitle: {
        fontSize: 18
    },
    containerItem: {
        fontSize: 15,
        marginLeft: 20
    },
    cardActionsContainer: {
        alignItems: 'center'
    },
    botao: {
        backgroundColor: "#6750a4",
        width: '30%',
        alignContent: 'center'
    },
    textBotao: {
        color: "#fff"
    },
    containerTitleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default GetPet;
