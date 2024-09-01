
import tw from 'twrnc';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Nav from '../../components/Nav';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={tw`w-full p-5`}>
        <Image
          source={require("../../assets/uber.png")}
          style={tw`h-[90px] w-[90px]`}
          resizeMode='contain'
        />
        <Nav />
      </View>
    </SafeAreaView>
  )
}
