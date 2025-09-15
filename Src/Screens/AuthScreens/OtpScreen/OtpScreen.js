import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../Components/Background';

export default function OtpScreen() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const refs = {};

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < otp.length - 1) {
            const nextInput = `otp${index + 1}`;
            if (refs[nextInput]) refs[nextInput].focus();
        }
    };

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.logo}>Skoolfame</Text>
                <Text style={styles.heading}>Enter OTP</Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={ref => (refs[`otp${index}`] = ref)}
                            value={digit}
                            onChangeText={value => handleOtpChange(value, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            style={styles.otpInput}
                        />
                    ))}
                </View>

                {/* New Text Above Verify Button */}
                <View style={styles.resendRow}>
                    <Text style={styles.resendLabel}>Didn't receive code? </Text>
                    <TouchableOpacity>
                        <Text style={styles.resendLink}>Resend</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                    <Text style={styles.primaryBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </Background>
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
        fontSize: 50,
        color: '#fff',
        fontFamily: "cursive",
        marginBottom: 24,
    },

    heading: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: -0.24,
        color: '#fff',
        marginBottom: 50,
        top: 20
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
        borderColor: 'rgba(255,255,255,0.3)',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },

    resendRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        top: 40

    },

    resendLabel: {
        color: '#ccc',
        fontSize: 14,
    },

    resendLink: {
        color: '#0085FF',
        fontSize: 14,
    },

    primaryBtn: {
        width: '100%',
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E03A',
        marginBottom: 20,
        top: 50
    },

    primaryBtnText: {
        color: '#111',
        fontSize: 16,
        fontWeight: '600',
    },

});
