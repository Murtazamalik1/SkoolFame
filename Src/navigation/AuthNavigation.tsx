import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./NavigationStrings";

import SplashScreen from "../screens/authScreens/SplashScreen/SplashScreen.";
import LoginScreen from "../screens/authScreens/LoginScreen/LoginScreen";
import ForgetPasswordScreen from "../screens/authScreens/ForgetPassword/ForgetPasswordScreen";
import OtpScreen from "../screens/authScreens/OtpScreen/OtpScreen";
import ResetPasswordScreen from "../screens/authScreens/ResetPasswordScreen/ResetPasswordScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.WELCOME} component={SplashScreen} />
            <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
            <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgetPasswordScreen} />
            <Stack.Screen name={SCREENS.OTPSCREEN} component={OtpScreen} />
            <Stack.Screen name={SCREENS.RESET_PASSWORD} component={ResetPasswordScreen} />
            <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
        </Stack.Navigator>
    );
}
