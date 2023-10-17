import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import userStore from '../userStore';
import { useCallback, useEffect, useState } from 'react';
import axios from '../config/axios-config';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Card, Button, Text } from 'react-native-paper';

type PetType = {
    id: number;
    name: string;
    restLevel: number;
    foodLevel: number;
    funLevel: number;
    life: number;
}

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
        <FlatList
            data={pets}
            renderItem={ ({item}) => (
                <Card mode="contained" style={styles.cardContainer}>
            <Card.Content style={styles.cardContent}>
                <Avatar.Image size={100} source={require("../images/bunny.png")}/>
                <View style={styles.textContainer}>
                    <Text variant="titleMedium">{item.name}</Text>
                    <Text>Vida: {item.life}</Text>
                    <Text>Fome: {item.foodLevel}</Text>
                </View>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => deletePet(item.id)}>Deletar</Button>
            </Card.Actions>
        </Card>
            )}
        />
        <Button onPress={() => {
            navigation.navigate("CreatePet")
        }}>+</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 6
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    textContainer: {
        gap: 4
    }
})

export default Home;
