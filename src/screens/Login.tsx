import { useState } from "react"
import { Button, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Login = ({navigation}: any) => {
    const [text, setText] = useState<string>();
    const [hasError, setHasError] = useState(false);

    const passwordOnChangeInput = (value: string) => {
        if(value.length < 3){
            setHasError(true)
        } else{
            setHasError(false);
        }
        setText(value)
    }
    return (
        <SafeAreaView style={style.inputView}>
            <TextInput
                placeholder="Login"
                style={style.inputText}
            />
            <TextInput
                value={text}
                onChangeText={passwordOnChangeInput}
                placeholder="Senha"
                textContentType="password"
                secureTextEntry
                style={style.inputText}
            />
            <Button onPress={() => {
                navigation.navigate("Home");
            }}
            title="Login"
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
})
export default Login;
