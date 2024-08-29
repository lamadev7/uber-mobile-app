
import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

export default function TabIcon({ source, focused }: { source: ImageSourcePropType, focused: boolean }) {
    return (
        <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-green-500" : ""}`}>
            <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-green-500" : ""}`}>
                <Image
                    source={source}
                    tintColor="white"
                    className="h-7 w-7"
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}
