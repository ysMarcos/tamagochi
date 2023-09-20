import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"

const Register = ({navigation}: any) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

    const onChangeEmailInput = (value: string) => {
        if(value.length < 3){
            return Alert.alert(
                'Error',
                "Preencha o email",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        setEmail(value)
    }
    const onChangePasswordInput = (value: string) => {
        if(value.length < 3){
            return Alert.alert(
                'Error',
                "Preencha a senha",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        setPassword(value)
    }
    const onChangePasswordConfirmationInput = (value: string) => {
        if(value.length < 3){
            return Alert.alert(
                'Error',
                "Preencha a confirmação de senha",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        setPasswordConfirmation(value);
    }
    const register = () => {

        axios({
            method: 'post',
            url: "https://tamagochiapi-clpsampedro.b4a.run/register",
            data: {
                email,
                password
            }
        }).then( (response) => {
            if(password !== passwordConfirmation){
                return Alert.alert(
                    'Error',
                    "As senhas devem ser iguais",
                    [{
                        onPress: () => navigation.navigate('Register')
                    }]
                )
            }
            if(response.status !== 200){
            return Alert.alert(
                'Error',
                response.data.message,
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
            }
            Alert.alert(
                "Sucesso!",
                "Conta criada com sucesso",
                [{
                    onPress:()=>navigation.navigate("Login")
                }])
        })
    }

    return (
        <SafeAreaView style={style.inputView}>
            <TextInput
                value={email}
                //onChangeText={onChangeEmailInput}
                placeholder="Email"
                id="email"
                style={style.inputText}
            />
            <TextInput
                value={password}
                //onChangeText={onChangePasswordInput}
                placeholder="Senha"
                textContentType="password"
                secureTextEntry
                style={style.inputText}
            />
            <TextInput
                value={passwordConfirmation}
                //onChangeText={onChangePasswordConfirmationInput}
                placeholder="Confirmação de Senha"
                textContentType="password"
                secureTextEntry
                style={style.inputText}
            />

            <Button onPress={register}
                title="Criar conta"
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
    }
});
export default Register;
