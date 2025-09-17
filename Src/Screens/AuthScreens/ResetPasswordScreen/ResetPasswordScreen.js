import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../components/Background';
import CustomButton from '../../../components/atoms/customButton/CustomButton';
import CustomInput from '../../../components/atoms/customInput/CustomInput';
import Colors from '../../../constants/colors/Colors';
import FONTS from '../../../constants/fonts/Fonts';

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
        fontSize: 50,
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
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 20,
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
