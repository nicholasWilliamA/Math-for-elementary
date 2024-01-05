import { StyleSheet, View } from 'react-native';
import { HomeNavigationStackScreenProps } from '../../StackScreenProps';
import { MathematicalCard } from './components/MathematicalCard';

export const HomeScreen: React.FC<HomeNavigationStackScreenProps<'HomeScreen'>> = ({navigation}) => {
    return (
        <View style={style.container}>
            <View className="mt-[30%] flex-row justify-evenly">
                <MathematicalCard label="Pertambahan" icon="plus" onPress={() => navigation.navigate('AddScreen')}/>
                <MathematicalCard label="Pengurangan" icon="minus" onPress={() => navigation.navigate('SubstractionScreen')}/>
            </View>
            <View className="mt-[30%] flex-row justify-evenly">
                <MathematicalCard label="Perkalian" icon="cross" onPress={() => navigation.navigate('MultiplicationsScreen')}/>
                <MathematicalCard label="Pembagian" divide={true} onPress={() => navigation.navigate('DivisionScreen')}/>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

