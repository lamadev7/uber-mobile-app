import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';

export default function NavFavourites() {
    const data = [
        {
            id: 12,
            icon: 'home',
            location: 'Home',
            destination: 'Code Street, London, UK'
        },
        {
            id: 13,
            icon: 'briefcase',
            location: 'Work',
            destination: 'Code Street, London, UK'
        },
        {
            id: 14,
            icon: 'briefcase',
            location: 'Parcel',
            destination: 'Code Street, London, UK'
        },
        {
            id: 15,
            icon: 'briefcase',
            location: 'Pathao',
            destination: 'Code Street, London, UK'
        },
    ]

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={() => (
                <View style={tailwind`flex items-center`}>
                    <View style={tailwind`w-[95%] border-[0.3px] border-gray-300`}></View>
                </View>
            )}
            renderItem={({ item }: any) => (
                <TouchableOpacity style={tailwind`flex-row items-center py-4`}>
                    <Icon
                        size={18}
                        color='white'
                        type='ionicon'
                        name={item?.icon}
                        style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
                    />
                    <View>
                        <Text style={tailwind`font-semibold`}>{item?.location}</Text>
                        <Text style={tailwind`text-gray-500`}>{item?.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}
