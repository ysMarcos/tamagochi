import axios from "axios";
import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import userStore from "../userStore";


const Login = ({navigation}: any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const store = userStore();

    const login = async () => {
        console.log(email)
        console.log(password)
        try{
            const response = await axios.post( "https://tamagochiapi-clpsampedro.b4a.run/login",
            {
                email,
                password
            }
        );
        if(response.status !== 200) {
            Alert.alert(
                'Error',
                "Email ou Senha Inválidos",
                [{
                    onPress: () => navigation.navigate('Login')
                }]
            )
        }
        if(response.status === 200) {
            const token = response.data.token;
            store.setToken(token);
            navigation.navigate("Home");
        }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <SafeAreaView style={style.inputView}>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
                style={style.inputText}
            />
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Senha"
                textContentType="password"
                secureTextEntry
                style={style.inputText}
            />
            <Button onPress={login}
                title="Login"
            />
            <Button onPress={() => {
                navigation.navigate("Register");
            }}
                title="Criar uma conta"
            />
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    inputView: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#ffd4dd"
    },
    inputText: {
        width: '75%',
        padding: 25,
        margin: 5,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 25
    },
    button: {
        margin: 5
    }
})
export default Login;
