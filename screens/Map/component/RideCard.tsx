import React from 'react';
import tailwind from 'twrnc';
import { Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import useRideCard from '../hooks/useRideCard';

export default function RideCard() {
    const { data, selectedRider, travelTimeInformation, handleSelectRider, } = useRideCard();
    const navigation = useNavigation<any>();

    console.log({ travelTimeInformation })
    return (
        <View style={tailwind`p-2 h-full`}>
            <View style={tailwind`pt-2 pb-4 flex flex-row items-center justify-center relative`}>
                <TouchableOpacity style={tailwind`absolute left-1`} onPress={() => navigation.navigate("NavigateCard")}>
                    <Icon name='chevron-left' type='fontawesome' size={30} />
                </TouchableOpacity>
                <Text style={tailwind`text-center text-lg`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item: any) => item?.id}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        onPress={() => handleSelectRider(item)}
                        style={tailwind`pl-4 pr-6 flex-row justify-between items-center rounded-lg ${selectedRider?.id === item?.id ? "bg-gray-200" : ""}`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 89,
                                resizeMode: 'contain'
                            }}
                            source={{ uri: item?.image }}
                        />
                        <View style={tailwind`-ml-10`}>
                            <Text style={tailwind`text-[16px] font-semibold`}>{item?.title}</Text>
                            <Text style={tailwind`text-black mt-1 text-sm text-gray-800`}>{travelTimeInformation?.duration?.text} Travel time</Text>
                        </View>
                        <Text style={tailwind`text-md font-semibold`}>$99</Text>
                    </TouchableOpacity>
                )}
            />

            {
                selectedRider && (
                    <View style={tailwind`relative bottom-8`}>
                        <TouchableOpacity style={tailwind`bg-black py-3 rounded-md`}>
                            <Text style={tailwind`text-center text-xl text-white`}>Choose {selectedRider?.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}
