import React from 'react';
import { InputFieldProps } from '@/types/type';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function InputFieldC({
    icon,
    label,
    placeholder,
    ...props
}: InputFieldProps) {
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className='w-full mb-5'>
                    <Text className='mb-2 text-lg font-JakartaSemiBold'>{label}</Text>
                    <View className='p-4 flex flex-row items-center bg-blue-50 rounded-full focus:border-primary-500'>
                        {icon && <Image source={icon} className="w-6 h-6 ml-2 mr-4" />}
                        <TextInput
                            {...props}
                            placeholder={placeholder}
                            className='font-JakartaSemiBold text-[15px]'
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
