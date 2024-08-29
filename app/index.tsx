
import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function Homepage() {
    const path: any = "/(auth)/onboarding";

    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <Redirect href="/(root)/(tabs)/home" />;
    }


    return <Redirect href={path} />;
}
