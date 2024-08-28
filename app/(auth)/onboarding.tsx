import React, { useRef } from 'react';
import Swiper from "react-native-swiper";
import ButtonC from '@/components/ButtonC';
import useOnboarding from './hooks/useOnboarding';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding() {
    const swiperRef = useRef<Swiper>(null);
    const { isLastSlide, onboardingData, onSkipPress, onSwiperIndexChange } = useOnboarding();

    return (
        <SafeAreaView className='flex h-full items-center justify-between'>
            <TouchableOpacity className='flex w-full items-end p-5' onPress={onSkipPress}>
                <Text className='text-md font-Jakarta'>Skip</Text>
            </TouchableOpacity>

            <Swiper
                loop={false}
                ref={swiperRef}
                onIndexChanged={onSwiperIndexChange}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286ff]" />}
            >
                {
                    onboardingData?.map((item, index) => (
                        <View key={index}>
                            <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
                            <View className='flex items-center mt-10 mb-3'>
                                <Text className='mx-10 text-center text-3xl font-bold'>{item.title}</Text>
                            </View>
                            <View className='flex items-center'>
                                <Text className='mx-10 text-center text-lg font-semibold font-JakartaSemiBold text-[#858585]'>{item.description}</Text>
                            </View>
                        </View>
                    ))
                }
            </Swiper>
            <ButtonC title={isLastSlide ? "Get Started" : "Next"} style="w-5/12 mt-10 border-white bg-blue-500" textStyle="text-white" />
        </SafeAreaView>
    )
}
