import {Button, SafeAreaView, ScrollView, Text} from 'react-native';

const Home = ({route, navigation}: any) => {
    const {params} = route;
  return (
    <SafeAreaView>
        <ScrollView>
            <Text>OI</Text>
        </ScrollView>
        <Button onPress={() => {
                navigation.navigate("Population");
            }} title='Navegar para a tela populacao' />
    </SafeAreaView>
  );
};

export default Home;
