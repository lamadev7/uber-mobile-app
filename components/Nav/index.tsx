import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import twrc from 'twrnc';
import useNav from './hooks/useNav';
import { Icon } from 'react-native-elements';

export default function Nav() {
    const { origin, navItems, handleRedirect } = useNav();

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={navItems}
            keyExtractor={((item: any) => item.id)}
            renderItem={({ item }: any) => (
                <TouchableOpacity
                    disabled={!origin}
                    onPress={() => handleRedirect(item.screen)}
                    style={twrc`bg-gray-200 px-7 py-4 mr-2 ${!origin ? 'opacity-60' : ''}`}
                >
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="contain"
                            style={twrc`w-[50px] h-[50px]`}
                        />
                    </View>
                    <Text style={twrc`mt-4 font-semibold`}>{item.title}</Text>
                    <Icon
                        color='white'
                        type='antdesign'
                        name='arrowright'
                        style={twrc`bg-gray-600 rounded-full w-[35px] h-[35px] flex flex-row justify-center items-center mt-3 ${!origin ? 'opacity-60' : ''}`}
                    />
                </TouchableOpacity>
            )}
        />
    )
}
