import { Button, View } from "react-native";
import axios from "axios";
import { useState } from "react";

const RandomActivity = () => {
    const [ randomActivity, setRandomActivity ] = useState();
    console.log(randomActivity)
    const fetchApi = async () => {
        try {
            const { data } = await axios.get('http://www.boredapi.com/api/activity/');
            setRandomActivity(data)
            console.log(data);
        } catch(err){
            console.log(err)
        }
    }

    return (
        <View>
            <Button title={"Get random activity"} onPress={fetchApi}/>
        </View>
    );
}

export default RandomActivity;
