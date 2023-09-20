import axios from "axios";
import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Login = ({navigation}: any) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onChangeEmailInput = (value: string) => {
        if(value.length < 3){
            return;
        }
        setEmail(value)
    }
    const onChangePasswordInput = (value: string) => {
        if(value.length < 3){
            return;
        }
        setPassword(value)
    }
    const login = () => {
        axios({
            method: 'post',
            url: "https://tamagochiapi-clpsampedro.b4a.run/login",
            data: {
                email,
                password
            }
        }).then( (response) => {
            console.log(response)
            if(response.status !== 200){
            return Alert.alert(
                'Error',
                response.data.message,
                [{
                    onPress: () => navigation.navigate('Login')
                }]
            )
            }
            return navigation.navigate("Home");
        })
    }
    return (
        <SafeAreaView style={style.inputView}>
            <TextInput
                value={email}
                onChangeText={onChangeEmailInput}
                placeholder="Email"
                textContentType="emailAddress"
                style={style.inputText}
            />
            <TextInput
                value={password}
                onChangeText={onChangePasswordInput}
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
