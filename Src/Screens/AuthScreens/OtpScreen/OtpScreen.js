import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../navigation/NavigationStrings';
import FONTS from '../../../constants/fonts';
import CustomButton from '../../../components/atoms/CustomButton';
import WrapperContainer from '../../../components/wrapperContainer/WrapperContainer';
import { getScaledFontSize } from '../../../constants/globalFunction';
import COLORS from '../../../constants/colors';

export default function OtpScreen() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const navigation = useNavigation();

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <WrapperContainer>
            <Background>
                <View style={styles.container}>
                    <Text style={styles.logo}>Skoolfame</Text>
                    <Text style={styles.heading}>Enter OTP</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={ref => (inputRefs.current[index] = ref)}
                                value={digit}
                                onChangeText={value => handleOtpChange(value, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                style={styles.otpInput}
                            />
                        ))}
                    </View>

                    <View style={styles.resendRow}>
                        <Text style={styles.resendLabel}>Didn't receive code? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(SCREENS.RESET_PASSWORD)}>
                            <Text style={styles.resendLink}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    <CustomButton
                        title="Submit"
                        onPress={() => {
                            console.log('OTP submitted');
                        }}
                    />
                </View>
            </Background>
        </WrapperContainer>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingTop: 180,
    },

    logo: {
        fontSize: getScaledFontSize(50),
        color: COLORS.text,
        fontFamily: FONTS.logo,
        marginBottom: 24,
    },

    heading: {
        fontFamily: FONTS.Poppins,
        fontWeight: '400',
        fontSize: getScaledFontSize(20),
        lineHeight: 20,
        letterSpacing: -0.24,
        color: COLORS.text,
        marginBottom: 50,
        top: 30
    },

    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
        top: 30

    },

    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        textAlign: 'center',
        color: COLORS.text,
        fontSize: getScaledFontSize(20),
        backgroundColor: COLORS.INPUT_BACKGROUND,
    },

    resendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 60,
        top: 40
    },

    resendLabel: {
        color: COLORS.text,
        fontSize: getScaledFontSize(20),
    },

    resendLink: {
        color: COLORS.PrimaryText,
        fontSize: getScaledFontSize(14),
    },

});
