import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../Screens/SplashScreen/SplashScreen";
import LoginScreen from "../../Screens/AuthScreens/LoginScreen/LoginScreen";
import ForgetPasswordScreen from '../../Screens/AuthScreens/ForgetPassword/ForgetPasswordScreen'
import OtpScreen from '../../Screens/AuthScreens/OtpScreen/OtpScreen'
import ResetPasswordScreen from "../../Screens/AuthScreens/ResetPasswordScreen/ResetPasswordScreen"
import SignUpScreen from '../../Screens/AuthScreens/SignUpScreen/SignUpScreen'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
            <Stack.Screen name="Otp" component={OtpScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}
