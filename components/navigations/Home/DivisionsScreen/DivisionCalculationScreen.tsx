import { OutlinedTextInput } from '@Components/OutlinedTextInput';
import { HomeNavigationStackScreenProps } from '@Components/StackScreenProps';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Answers, Calculation } from '../SubstractionScreen/SubstractionCalculationScreen';
import { Entypo } from '@expo/vector-icons';

export const DivisionCalculationScreen: React.FC<HomeNavigationStackScreenProps<'DivisionCalculationScreen'>> = ({route}) => {

    const { loops, minimumNumber, maximumNumber } = route.params;
    const [ inputAnswer, setInputAnswer ] = useState<Answers[]>([]);
    const [ question ] = useState<Calculation[]>([]);
    const [ correct, setCorrect ] = useState<boolean[]>([]);
    const arrayInput : Answers[] = Array(Number(loops));
    const [ ready, setReady ] = useState(false);

    function generateData(){
        for (let i = 1; i <= Number(loops); i++){
            const maxNum = Math.floor(Math.random() * Number(maximumNumber)) + Number(minimumNumber);
            const minNum = Math.floor(Math.random() * Number(maxNum)) + Number(1);
            const newData: Calculation = {
                loops: i,
                minNumber: minNum,
                maxNumber: maxNum,
            };
            question.push(newData);
        }
    }

    function calculateData(datas: Calculation[]){
        const answer: number[] = [];
        for (let i = 0; i < Number(loops); i++){
            const minNumber: number = datas[i]?.minNumber;
            const maxNumber: number = datas[i]?.maxNumber;
            const result = maxNumber / minNumber;
            answer.push(result);
        }
        return answer;
    }

    function onSubmit(form: Answers[]) {
        setInputAnswer(form);
        const answer = calculateData(question);
        const calculateAnswer = answer.map((item, index) => {
            if (item === Number(form[index]?.answer)){
                return true;
            }
            return false;
        });
        setCorrect(calculateAnswer);
    }

    function renderReadyButton(){
        return (
            <TouchableOpacity onPress={() => {setReady(true); generateData(); setInputAnswer(arrayInput);}} className="mt-[80%]">
                <View className="bg-slate-300 rounded self-center px-10 py-3">
                    <Text className="text-center font-bold">Mulai</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View className="flex-1 bg-white">
            {!ready && renderReadyButton()}
            {ready && <FlatList
                data={question}
                renderItem={({ item, index }) =>
                <>
                    <View className="ml-4 flex-row mt-6">
                        <Text className="text-xl mt-2">{item.loops}.</Text>
                        <Text className="text-xl mt-2 ml-4">{item.maxNumber} / {item.minNumber} = </Text>
                        <OutlinedTextInput
                            className="mt-2 w-[30%]"
                            keyboardType="number-pad"
                            placeholder="Jawaban"
                            key={index}
                            onChangeText={(txt) => {
                                const test: Answers = {
                                    id: index,
                                    answer: txt,
                                };
                                inputAnswer.fill(test, index, index + 1);
                            }}
                        />
                        <View className="mt-4 ml-2">
                            {correct[index] && <Entypo name="check" size={24} color="green"/>}
                            {!correct[index] && correct.length !== 0 && <Entypo name="cross" size={24} color="red" />}
                            {correct.length === 0 && <></>}
                        </View>
                    </View>
                </>
                }
                keyExtractor={(_, index) => 'list' + index}
            />}
            {ready && <TouchableOpacity onPress={() => {onSubmit(inputAnswer);}}>
                <View className="bg-slate-300 rounded self-center px-10 py-3">
                    <Text className="text-center font-bold">Check jawaban</Text>
                </View>
            </TouchableOpacity>}
        </View>
    );
};
