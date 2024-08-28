import { router } from "expo-router";
import { onboarding } from "@/constant";
import { useMemo, useState } from "react";


export default function useOnboarding() {
    const [swipeIndex, setSwipeIndex] = useState<number>(0);
    const [onboardingData, setOnboardingData] = useState(onboarding);

    const onSkipPress = () => {
        const path: any = "/(auth)/sign-up";
        router.replace(path)
    }

    const onSwiperIndexChange = (index: number) => {
        setSwipeIndex(index);
    }

    const isLastSlide = useMemo(() => onboarding.length === (swipeIndex + 1), [swipeIndex]);

    return {
        swipeIndex,
        isLastSlide,
        onboardingData,
        onSkipPress,
        onSwiperIndexChange,
    }
}
