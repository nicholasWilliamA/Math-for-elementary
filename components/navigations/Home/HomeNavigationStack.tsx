import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AddScreen } from './AddScreen/AddScreen';
import { CalculationScreen } from './AddScreen/CalculationScreen';
import { HomeNavigationStackParams } from './HomeNavigationStackParams';
import { HomeScreen } from './HomeScreen';
import { MultiplicationsCalculationScreen } from './MultiplicationsScreen/MultiplicationsCalculationScreen';
import { MultiplicationsScreen } from './MultiplicationsScreen/MultiplicationsScreen';
import { SubstractionCalculationScreen } from './SubstractionScreen/SubstractionCalculationScreen';
import { SubstractionScreen } from './SubstractionScreen/SubstractionScreen';
import { DivisionCalculationScreen } from './DivisionsScreen/DivisionCalculationScreen';
import { DivisionScreen } from './DivisionsScreen/DivisionScreen';

const Stack = createNativeStackNavigator<HomeNavigationStackParams>();

export const HomeNavigationStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={noHeader}/>
            {/* Addition Group */}
            <Stack.Group>
                <Stack.Screen name="AddScreen" component={AddScreen} options={addScreenOption}/>
                <Stack.Screen name="CalculationScreen" component={CalculationScreen} options={calculationScreenOption}/>
            </Stack.Group>
            {/* Substraction Group */}
            <Stack.Group>
                <Stack.Screen name="SubstractionScreen" component={SubstractionScreen} options={substractionScreenOption}/>
                <Stack.Screen name="SubstractionCalculationScreen" component={SubstractionCalculationScreen} options={substractionCalculationOption}/>
            </Stack.Group>
            {/* Multiplication Group */}
            <Stack.Group>
                <Stack.Screen name="MultiplicationsScreen" component={MultiplicationsScreen} options={multiplicationsScreenOption}/>
                <Stack.Screen name="MultiplicationsCalculationScreen" component={MultiplicationsCalculationScreen} options={multiplicationsCalculationOption}/>
            </Stack.Group>
            {/* Division Group */}
            <Stack.Group>
                <Stack.Screen name="DivisionScreen" component={DivisionScreen} options={divisionScreenOption}/>
                <Stack.Screen name="DivisionCalculationScreen" component={DivisionCalculationScreen} options={divisionCalculationOption}/>
            </Stack.Group>
        </Stack.Navigator>
    );
};

const noHeader: NativeStackNavigationOptions = {
    headerShown: false,
};

const addScreenOption: NativeStackNavigationOptions = {
    title: 'Pertambahan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const calculationScreenOption: NativeStackNavigationOptions = {
    title: 'Soal Pertambahan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const substractionScreenOption: NativeStackNavigationOptions = {
    title: 'Pengurangan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const substractionCalculationOption: NativeStackNavigationOptions = {
    title: 'Soal Pengurangan',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const multiplicationsScreenOption: NativeStackNavigationOptions = {
    title: 'Perkalian',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const multiplicationsCalculationOption: NativeStackNavigationOptions = {
    title: 'Soal Perkalian',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const divisionScreenOption: NativeStackNavigationOptions = {
    title: 'Pembagian',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};

const divisionCalculationOption: NativeStackNavigationOptions = {
    title: 'Soal Pembagian',
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerTitleStyle: {
        color: '#333',
    },
};
