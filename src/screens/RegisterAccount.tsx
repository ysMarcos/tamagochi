import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"

const Register = ({navigation}: any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const handleEmail = (text: string) => {
        setEmail(text)
    };

    const register = async () => {

        if(password !== passwordConfirmation){
            return Alert.alert(
                'Error',
                "As senhas devem ser iguais",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        if(email.length < 5){
            return Alert.alert(
                'Error',
                "O Email deve ter mais de 5 caracteres",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        if(password.length < 5){
            return Alert.alert(
                'Error',
                "A senhas deve ter mais de 5 caracteres",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        if(password !== passwordConfirmation){
            return Alert.alert(
                'Error',
                "As senhas devem ser iguais",
                [{
                    onPress: () => navigation.navigate('Register')
                }]
            )
        }
        try {
            const response = await axios.post("https://tamagochiapi-clpsampedro.b4a.run/register", {
                email,
                password
            });
            if( response.status === 200){
                Alert.alert(
                    "Sucesso",
                    "Sua Conta Criada com Sucesso",
                    [{
                        onPress: () => navigation.navigate("Login")
                    }]
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={style.inputView}>
            <TextInput
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                id="email"
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
            <TextInput
                value={passwordConfirmation}
                onChangeText={text => setPasswordConfirmation(text)}
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
