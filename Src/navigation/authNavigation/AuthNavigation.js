import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../navigationStrings/NavigationStrings";

import SplashScreen from "../../screens/splashScreen/SplashScreen";
import LoginScreen from "../../screens/authScreens/loginScreen/LoginScreen";
import ForgetPasswordScreen from "../../screens/authScreens/forgetPassword/ForgetPasswordScreen";
import OtpScreen from "../../screens/authScreens/otpScreen/OtpScreen";
import ResetPasswordScreen from "../../screens/authScreens/resetPasswordScreen/ResetPasswordScreen";
import SignUpScreen from "../../screens/authScreens/signUpScreen/SignUpScreen";

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
