import React from 'react';
import { ButtonProps } from '@/types/type';
import { Text, TouchableOpacity } from 'react-native';

export default function ButtonC(props: ButtonProps) {
    const {
        title,
        onPress,
        IconLeft,
        IconRight,
        style,
        textStyle,
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`my-5 h-[50px] border rounded-full flex flex-row gap-x-2 justify-center items-center ${style}`}
        >
            {IconLeft && <IconLeft />}
            <Text className={`text-lg font-semibold ${textStyle}`}>{title}</Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    )
}
