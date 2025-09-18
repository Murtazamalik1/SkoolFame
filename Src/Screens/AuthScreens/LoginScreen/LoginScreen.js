import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../navigation/NavigationStrings';
import CustomInput from '../../../components/atoms/CustomInput';
import Images from '../../../constants/imagePath';
import CustomCheckbox from '../../../components/atoms/CustomCheckbox';
import Icons from '../../../constants/iconPath';
import CustomButton from '../../../components/atoms/CustomButton';
import WrapperContainer from '../../../components/wrapperContainer/WrapperContainer';
import { getScaledFontSize } from '../../../constants/globalFunction'
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigation = useNavigation();

    /** Handlers */
    const handleRememberToggle = () => {
        setRemember(!remember);
    };

    const handleForgotPassword = () => {
        navigation.navigate(SCREENS.FORGOT_PASSWORD);
    };

    const handleSignIn = () => {
        console.log('Sign In Pressed');
    };

    const handleSignup = () => {
        navigation.navigate(SCREENS.SIGNUP);
    };

    const handleAppleLogin = () => {
        console.log('Apple Login Pressed');
    };


    return (
        <WrapperContainer>
            <Image source={Images.ellipse} style={styles.bgGlowTop} resizeMode="contain" />
            <Image source={Images.ellipse19} style={styles.bgGlowBottom} resizeMode="contain" />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Text style={styles.logo}>Skoolfame</Text>
                    <Text style={styles.signin}>Sign In</Text>

                    <View style={styles.form}>
                        {/* Email */}
                        <CustomInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter email"
                            keyboardType="email-address"
                        />

                        {/* Password */}
                        <CustomInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password"
                            secureTextEntry
                        />

                        {/* CheckBox */}
                        <View style={styles.rowBetween}>
                            <CustomCheckbox
                                label="Remember me"
                                checked={remember}
                                onChange={handleRememberToggle}
                            />
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text style={styles.forgot}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Sign In Button */}
                        <CustomButton
                            title="Sign In"
                            onPress={handleSignIn}
                        />

                        <View style={styles.orRow}>
                            <View style={styles.hr} />
                            <Text style={styles.orText}>Or</Text>
                            <View style={styles.hr} />
                        </View>

                        {/* Apple Login */}
                        <TouchableOpacity
                            style={styles.appleBtn}
                            activeOpacity={0.85}
                            onPress={handleAppleLogin}
                        >
                            <Image source={Icons.appleIcon} style={styles.appleIcon} />
                            <Text style={styles.appleText}>Sign In with Apple ID</Text>
                        </TouchableOpacity>

                        {/* Signup Navigation */}
                        <View style={styles.signupRow}>
                            <Text style={styles.noAcc}>Don't have any account? </Text>
                            <TouchableOpacity onPress={handleSignup}>
                                <Text style={styles.signup}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </WrapperContainer>
    );
}

const styles = StyleSheet.create({

    bgGlowTop: {
        position: 'absolute',
        alignSelf: 'center',
        width: 400,
        height: 400,
        opacity: 0.9,
        top: 10,
    },

    bgGlowBottom: {
        position: 'absolute',
        alignSelf: 'center',
        width: 500,
        height: 500,
        bottom: 60,
        right: 20,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 22,
        paddingVertical: 40,
    },

    container: {
        alignItems: 'center',
    },

    logo: {
        fontSize: getScaledFontSize(50),
        color: COLORS.text,
        fontFamily: FONTS.logo,
        marginBottom: 8,
        top: -20
    },

    signin: {
        color: COLORS.text,
        fontSize: getScaledFontSize(18),
        marginTop: 18,
        marginBottom: 18,
    },

    form: {
        width: '100%',
        alignItems: 'center',
        top: 25
    },

    rowBetween: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
    },

    forgot: {
        color: COLORS.PrimaryText,
    },

    orRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 18,
    },

    hr: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.darkgray,
    },

    orText: {
        marginHorizontal: 12,
        color: COLORS.text,
    },

    appleBtn: {
        width: '100%',
        height: 52,
        borderRadius: 12,
        backgroundColor: COLORS.text,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    appleIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
        resizeMode: 'contain',
    },

    appleText: {
        flex: 1,
        textAlign: 'center',
        color: COLORS.background,
        fontWeight: '600',
    },

    signupRow: {
        flexDirection: 'row',
        marginTop: 18,
    },

    noAcc: {
        color: COLORS.text,
    },

    signup: {
        color: COLORS.PrimaryText,
    },

});
