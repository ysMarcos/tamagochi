import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PopulationProps = {
    year: string;
    population: number;
}

const ListItem = ({population}: any) => {
    return (
        <View>
            <Text>{population[0].Population}</Text>
            <Text>{population["year"]}</Text>
        </View>
    )
}

export const PopulacaoPage = () => {
    const [populacao, setpopulacao] = useState();
    const [ loading, setLoading ] = useState(false);

    const getPopulacaoData = useCallback( async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            setpopulacao(data);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getPopulacaoData();
        console.log(populacao)
    }, []);

    return (
        <SafeAreaView>
        {
            loading === true ?
            <ActivityIndicator size={"large"} /> :
            <FlatList data={populacao} renderItem={({item}) => <ListItem population={item} />
            } />
        }
        </SafeAreaView>
    )
}
