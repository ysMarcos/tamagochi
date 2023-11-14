import { Alert, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useCallback, useState } from 'react';
import axios from '../config/axios-config';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Card, Button, Text } from 'react-native-paper';

const Home = ({navigation}: any) => {
    const [ pets, setPets ] = useState();

    const getPets = async () => {
        try{
            const { data } = await axios.get("/pets");
            console.log(data)
            setPets(data.pets);
        } catch(error){
            console.log(error);
        }
    }

    const deletePet = async (id: number) => {
        try {
            await axios.delete(`/pet/${id}`)
            Alert.alert(
                "Deletado!",
                "Pet deletado com sucesso",
                [{
                    onPress: () => getPets()
                }]
            )
        } catch(error){
            console.log(error)
        }
    }

    const feedPet = async (id: number) => {
        try {
            await axios.post(`/pet/${id}/food`)
            Alert.alert(
                "Ao mosso!",
                "Pet alimentado com sucesso",
                [{
                    onPress: () => getPets()
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
                    onPress: () => getPets()
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
            getPets();
            return () => {
                getPets();
            }
        }, [])
    )


  return (
    <SafeAreaView>
        <Button onPress={() => {
            navigation.navigate("CreatePet")
        }}>+</Button>
        <FlatList
            data={pets}
            renderItem={ ({item}) => (
            <Card mode="contained" style={styles.cardContainer}>
                <Card.Content style={styles.cardContent}>
                    <View style={styles.topHeader}>
                        <Button onPress={() => navigation.navigate("GetPet", {
                            petId: item.id
                        })}>Ver</Button>
                        <Button onPress={() => deletePet(item.id)}>Deletar</Button>
                        <Button onPress={() => navigation.navigate("UpdatePet", {
                            petId: item.id
                        })}>Editar</Button>
                    </View>
                    <Avatar.Image size={100} source={require("../images/bunny.png")}/>
                    <View style={styles.textContainer}>
                        <Text variant="titleMedium">{item.name}</Text>
                        <Text>Vida: {item.life}</Text>
                        <Text>Fome: {item.foodLevel}</Text>
                    </View>
                </Card.Content>
                <Card.Actions style={styles.cardActionsContainer}>
                    <Button style={styles.botao} onPress={() => feedPet(item.id)}>
                        <Text style={styles.textBotao}>Alimentar</Text>
                    </Button>
                    <Button style={styles.botao} onPress={() => restPet(item.id)}>
                        <Text style={styles.textBotao}>Dormir</Text>
                    </Button>
                    <Button style={styles.botao} onPress={() => play(item.id)}>
                        <Text style={styles.textBotao}>Brincar</Text>
                    </Button>
                </Card.Actions>
            </Card>
            )}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 6,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
    },
    textContainer: {
        gap: 4
    },
    topHeader: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center'
        // width: '35%'
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
    }
})

export default Home;
