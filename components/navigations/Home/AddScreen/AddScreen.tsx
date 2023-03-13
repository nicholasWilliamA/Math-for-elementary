import { OutlinedTextInput } from '@Components/OutlinedTextInput';
import { HomeNavigationStackScreenProps } from '@Components/StackScreenProps';
import { Controller, useForm } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';

//saya suka lisa blekping

export const AddScreen: React.FC<HomeNavigationStackScreenProps<'AddScreen'>> = ({navigation}) => {
    const [minNumber, setMinNumber] = useState<number>(1);
    const additionFormSchema = z.object({
        loops: z.string({
            required_error: 'Harap masukkan jumlah soal',
        }).refine(i => Number(i) > 30 ? false : true, { message: 'Maksimal input 30' })
        .refine((i) => i.includes('.') || i.includes(',') || i.includes('-') || i.includes(' ') ? false : true, {
            message: 'Simbol tidak bisa dimasukkan sebagai input',
        })
        .refine(i => i === '' ? false : true, { message: 'Harap masukkan jumlah soal' })
        ,
        minimumNumber: z.string({
            required_error: 'Harap masukkan minimal pertambahan',
        }).refine(i => i === '' ? false : true, { message: 'Harap masukkan minimal pertambahan' }),
        maximumNumber: z.string({
            required_error: 'Harap masukkan maksimal pertambahan',
        }).refine(i => i === '' ? false : true, { message: 'Harap masukkan maksimal pertambahan' })
        .refine(i => Number(i) < minNumber ? false : true, { message: 'Maksimal pertambahan tidak bisa kurang dari minimal pertambahan'})
        ,
    });

    type NewAdditionForm = z.infer<typeof additionFormSchema>;

    const { control, handleSubmit, formState: { errors }, watch } = useForm<NewAdditionForm>({
        resolver: zodResolver(additionFormSchema),
    });

    function onSubmit(form: NewAdditionForm) {
        navigation.navigate('CalculationScreen', {
            maximumNumber: form.maximumNumber,
            loops: form.loops,
            minimumNumber: form.minimumNumber,
            runLoop: true,
        });
    }

    const minimumNumber = watch('minimumNumber');

    useEffect(() => {
        setMinNumber(Number(minimumNumber));
    }, [minimumNumber]);

    return (
        <View className="flex-1 bg-white">
            <View className="mt-2">
                <Controller control={control} name="loops" render={({field: {onChange, value}}) => (
                    <OutlinedTextInput
                        keyboardType="number-pad"
                        placeholder="Masukkan berapa soal yang ingin dibuat"
                        onChangeText={onChange}
                        value={value}
                    />
                )}/>
                {errors.loops && <Text className="mt-2 text-center text-red-600">{errors.loops.message}</Text>}
            </View>
            <View className="mt-6">
                <Controller control={control} name="minimumNumber" render={({field: {onChange, value}}) => (
                    <OutlinedTextInput
                        keyboardType="number-pad"
                        placeholder="Masukkan angka minimal pertambahan"
                        onChangeText={onChange}
                        value={value}
                    />
                )}/>
                {errors.minimumNumber && <Text className="mt-2 text-center text-red-600">{errors.minimumNumber.message}</Text>}
            </View>
            <View className="mt-6">
                <Controller control={control} name="maximumNumber" render={({field: {onChange, value}}) => (
                    <OutlinedTextInput
                        keyboardType="number-pad"
                        placeholder="Masukkan angka maksimal pertambahan"
                        onChangeText={onChange}
                        value={value}
                    />
                )}/>
                {errors.maximumNumber && <Text className="mt-2 text-center text-red-600">{errors.maximumNumber.message}</Text>}
            </View>

            <TouchableOpacity className="mt-8" onPress={handleSubmit(onSubmit)}>
                <View className="bg-slate-300 rounded self-center px-10 py-3">
                    <Text className="text-center font-bold">Buat Soal</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
