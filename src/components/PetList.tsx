import { Alert, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper"
import axios from "../config/axios-config";

type PetType = {
    id: number;
    name?: string;
    restLevel?: number;
    foodLevel?: number;
    funLevel?: number;
    life?: number;
}

const PetList = ({id, name, restLevel, foodLevel, funLevel, life }: PetType) => {

    const deletePet = async () => {
        try {
            await axios.delete(`/pet/${id}`)
            Alert.alert(
                "Deletado!",
                "Pet deletado com sucesso"
            )
        } catch(error){
            console.log(error)
        }
    }

    return (
        <Card mode="contained" style={styles.cardContainer}>
            <Card.Content style={styles.cardContent}>
                <Avatar.Image size={100} source={require("../images/bunny.png")}/>
                <View style={styles.textContainer}>
                    <Text variant="titleMedium">{name}</Text>
                    <Text>Vida: {life}</Text>
                    <Text>Fome: {foodLevel}</Text>
                </View>
            </Card.Content>
            <Card.Actions>
                <Button onPress={deletePet}>Ok</Button>
            </Card.Actions>
        </Card>
    )
}

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

export default PetList;
