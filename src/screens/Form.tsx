import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";

const Form = ({navigation}: any) => {
    const [text, setText] = useState<string>();
    const [hasError, setHasError] = useState(false);

const onChangeInput = (value: string) => {
    if ( value.length >= 6 ){
        setHasError(false);
    } else {
        setHasError(true);
    }
    setText(value)
}

    return (
        <SafeAreaView>
            <TextInput value={text} onChangeText={onChangeInput}/>
            {
                hasError ? <Text>Digite pelo menos 6 caracteres</Text> : null
            }

            <Button onPress={() => {
                navigation.navigate("Home", {
                    id: 1
                });
            }} title='Navegar para a tela home' />

        </SafeAreaView>
    );

}

export default Form;
