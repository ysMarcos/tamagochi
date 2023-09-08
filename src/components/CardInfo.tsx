import { Button, View } from "react-native"

type CardInfoProps = {
    activity: string;
    type: string;
    price: number;
    participants: number;
}

const CardInfo = () => {

    return (
        <View>
            <Button title='Get random activity' />
        </View>
    )
}

export default CardInfo;
