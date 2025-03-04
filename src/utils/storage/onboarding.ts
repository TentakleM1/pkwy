import SecureStorage from 'react-native-fast-secure-storage';
import { ONBOARDING_KEY } from 'src/constants/storage';

export const getOnboardingStorage = () => {
    const isOnboarding = SecureStorage.getItemSync(ONBOARDING_KEY);
    if(isOnboarding) {
        return true;
    }
    return false;
};

export const setOnboardingStorage = (isOnboarding: boolean) => {
    SecureStorage.setItemSync(ONBOARDING_KEY, JSON.stringify(isOnboarding));
};
