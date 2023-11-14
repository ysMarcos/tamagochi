import { useState } from "react";
import axios from "../config/axios-config";
import { Alert, Button, SafeAreaView, TextInput } from "react-native";

const UpdatePet = ({ route, navigation }: any) => {
    const [name, setName] = useState<string>('');
    const { petId } = route.params;
    console.log(petId)
    const updatePet = async () => {
        try {
            await axios.put(`/pet/${petId}`, { name });

            Alert.alert(
                "Sucesso",
                "Pet atualizado com sucesso!",
                [{
                    onPress: () => navigation.navigate("Home")
                }]
            )
        } catch(error){
            console.log(error)
        }
    }
    return (
        <SafeAreaView>
            <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Nome do Pet"
            />
            <Button onPress={updatePet} title="Atualizar Pet" />
        </SafeAreaView>
    )
}

export default UpdatePet
