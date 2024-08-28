import React from 'react';
import { Link } from 'expo-router';
import ReactNativeModal from "react-native-modal";
import { Image, ScrollView, Text, View } from 'react-native';

import { icons, images } from '@/constant';
import ButtonC from '@/components/ButtonC';
import useSignupC from './hooks/useSignupC';
import InputFieldC from '@/components/InputFieldC';

export default function SignUp() {
    const {
        form,
        verification,
        showSuccessModal,
        handleChange,
        onPressVerify,
        handleGoogleSignIn,
        handleRedirectToHome,
        handleCodeInputChange,
        handleVerifyModalHide,
    } = useSignupC();

    return (
        <ScrollView>
            <View className=''>
                <View className=''>
                    <Image source={images.signUpCar} className='w-full z-0 h-[250px]' />
                    <Text className='bottom-5 left-5 text-2xl font-JakartaSemiBold'>Create Your Account</Text>
                    <View className='p-5'>
                        <InputFieldC
                            label='Full Name'
                            value={form.name}
                            icon={icons.person}
                            placeholder="Enter your fullname"
                            onChangeText={(value) => handleChange("name", value)}
                        />
                        <InputFieldC
                            label='Email'
                            icon={icons.email}
                            value={form.email}
                            placeholder="Enter your email address"
                            onChangeText={(value) => handleChange("email", value)}
                        />

                        <InputFieldC
                            label='Password'
                            icon={icons.lock}
                            value={form.password}
                            placeholder="Enter your password"
                            onChangeText={(value) => handleChange("password", value)}
                        />
                        <ButtonC
                            title="Sign Up"
                            textStyle='text-white'
                            onPress={handleGoogleSignIn}
                            style='w-full border-blue-500 shadow-md shadow-neutral-400/70 bg-blue-500'
                        />

                        <View className='flex flex-row justify-center items-center gap-x-3'>
                            <View className='flex-1 h-[1px] bg-slate-300'></View>
                            <Text className='text-lg'>Or</Text>
                            <View className='flex-1 h-[1px] bg-slate-300'></View>
                        </View>

                        <ButtonC
                            style='w-full border-slate-300'
                            title="Login In With Google"
                            IconLeft={() => (
                                <Image source={icons.google} resizeMode='contain' className='w-5 h-5 mx-2' />
                            )}
                            onPress={handleGoogleSignIn}
                        />


                        <Link href="/sign-in" className='mt-5 text-lg text-general-200 text-center'>
                            <Text>Already have an account ? </Text>
                            <Text className='text-blue-600 font-semibold'>Log In</Text>
                        </Link>
                    </View>
                </View>

                <ReactNativeModal isVisible={verification.state === "pending"} onModalHide={handleVerifyModalHide}>
                    <View className='px-10 py-5 bg-white h-fit w-full rounded-2xl'>
                        <View className='mt-5'>
                            <Text className='text-2xl font-JakartaBold'>Verification</Text>
                            <Text className='mt-2 mb-5'>We've sent your verification code to {form.email}</Text>
                            <InputFieldC
                                label='Code'
                                icon={icons.lock}
                                placeholder='12345'
                                keyboardType='numeric'
                                onChangeText={handleCodeInputChange}
                            />

                            {
                                verification.error && (
                                    <Text className='text-red-500'>
                                        Something went wrong!
                                    </Text>
                                )
                            }

                            <ButtonC
                                title="Verify Email"
                                textStyle='text-white'
                                onPress={onPressVerify}
                                style='bg-blue-500 border-0 border-blue-500'
                            />
                        </View>
                    </View>
                </ReactNativeModal>

                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className='px-10 pt-10 pb-7 flex flex-row items-center justify-center bg-white h-fit w-full rounded-2xl'>
                        <View className='flex gap-5 justify-center items-center'>
                            <Image source={images.check} className='h-[60px] w-[60px]' />
                            <Text className='text-3xl font-JakartaBold'>Verified</Text>
                            <Text className='text-gray-400 font-Jakarta'>You have succesfully verified your account.</Text>
                            <ButtonC
                                title="Browse Home"
                                onPress={handleRedirectToHome}
                                textStyle='text-white text-[16px] font-Jakarta'
                                style="mt-10 ml-5 px-10 bg-blue-500 border-0 border-blue-500"
                            />
                        </View>
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    )
}
