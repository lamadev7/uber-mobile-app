import { useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";
import { fetchAPI } from "@/utility";
import { useSignUp } from "@clerk/clerk-expo";

export default function useSignupC() {
    const { isLoaded, signUp, setActive } = useSignUp();

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [verification, setVerification] = useState({ state: 'default', error: '', code: '' });

    const handleChange = (key: string, value: string) => {
        setForm({ ...form, [key]: value })
    }

    const handleGoogleSignIn = async () => {
        if (!isLoaded) return;

        try {
            await signUp.create({
                emailAddress: form.email,
                password: form.password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setVerification({ ...verification, state: 'pending' });
        } catch (err: any) {
            Alert.alert('Error', err.errors[0].longMessage);
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: verification.code,
            })

            if (completeSignUp.status === 'complete') {
                await fetchAPI("/(api)/user", {
                    method: "POST",
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        clerkId: completeSignUp.createdUserId
                    })
                })

                await setActive({ session: completeSignUp.createdSessionId })
                setVerification({ ...verification, state: 'success' });
            } else {
                setVerification({ ...verification, error: 'Verification failed!', state: 'failed' });
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (err: any) {
            setVerification({ ...verification, error: err.errors[0].longMessage, state: 'failed' });
        }
    }

    const handleVerifyModalHide = () => {
        if (verification.state === "success") setShowSuccessModal(true);
    }

    const handleCodeInputChange = (code: string) => {
        setVerification({ ...verification, code });
    }

    const handleRedirectToHome = () => {
        router.push("/(root)/(tabs)/home");
        setShowSuccessModal(false);
    }


    return {
        form,
        verification,
        showSuccessModal,
        handleChange,
        onPressVerify,
        handleGoogleSignIn,
        handleRedirectToHome,
        handleCodeInputChange,
        handleVerifyModalHide,
    }
}
