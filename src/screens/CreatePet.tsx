import { useState } from "react";
import axios from "../config/axios-config";
import { Alert, Button, SafeAreaView, TextInput } from "react-native";

const CreatePet = ({ navigation }: any) => {
    const [name, setName] = useState<string>('');

    const createPet = async () => {
        try {
            await axios.post("/pet", { name });

            Alert.alert(
                "Sucesso",
                "Pet criado com sucesso!",
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
            <Button onPress={createPet} title="Criar Pet" />
        </SafeAreaView>
    )
}

export default CreatePet
