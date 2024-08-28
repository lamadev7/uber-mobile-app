
import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function Homepage() {
    const path: any = "/(auth)/onboarding";

    const {isSignedIn} = useAuth();
    console.log({isSignedIn})

    if(isSignedIn){
        return <Redirect href="/(root)/(tabs)/component/home"/>;
    }


    return <Redirect href={path} />;
}
