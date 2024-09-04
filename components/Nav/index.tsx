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
            data={navItems}
            keyExtractor={((item: any) => item.id)}
            renderItem={({ item }: any) => (
                <TouchableOpacity
                    style={twrc`bg-gray-200 px-7 py-4 mr-2 ${!origin ? 'opacity-60' : ''}`}
                    onPress={() => handleRedirect(item.screen)}
                >
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="contain"
                            style={twrc`w-[60px] h-[60px]`}
                        />
                    </View>
                    <Text style={twrc`mt-4 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        color='white'
                        type='antdesign'
                        name='arrowright'
                        style={twrc`bg-black p-2 rounded-full w-[38px] h-[38px] mt-4 ${!origin ? 'opacity-60' : ''}`}
                    />
                </TouchableOpacity>
            )}
        />
    )
}
