import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../../components/Background';
import CustomButton from '../../../components/atoms/CustomButton';
import CustomInput from '../../../components/atoms/CustomInput';
import Colors from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import { getScaledFontSize } from '../../../constants/globalFunction';

export default function ResetPasswordScreen() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Background>
            <View style={styles.container}>

                <View style={styles.logoWrapper}>
                    <Text style={styles.logo}>Skoolfame</Text>
                </View>

                {/* Content (heading + form)*/}
                <View style={styles.content}>
                    <Text style={styles.heading}>Reset Password</Text>

                    <View style={styles.form}>
                        <CustomInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Create new password"
                            secureTextEntry
                        />

                        <CustomInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Re-enter new password"
                            secureTextEntry
                        />

                        <CustomButton
                            title="Sign In"
                            onPress={() => console.log("Password Reset Submitted")}
                        />

                    </View>
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 22,
    },

    logoWrapper: {
        alignItems: 'center',
    },

    logo: {
        fontSize: getScaledFontSize(50),
        color: Colors.text,
        fontFamily: FONTS.logo,
        top: 160
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    heading: {
        fontFamily: FONTS.Poppins,
        fontWeight: '400',
        fontSize: getScaledFontSize(20),
        lineHeight: 20,
        letterSpacing: -0.24,
        color: Colors.text,
        marginBottom: 40,
    },

    form: {
        width: '100%',
        alignItems: 'center',
    },

});
