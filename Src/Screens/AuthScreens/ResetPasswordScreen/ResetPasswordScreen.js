import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../Components/Background';

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
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Create new password"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                            secureTextEntry
                        />

                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Re-enter new password"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                            <Text style={styles.primaryBtnText}>Sign In</Text>
                        </TouchableOpacity>
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
        color: '#fff',
        fontFamily: "cursive",
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
        color: '#fff',
        marginBottom: 40,
    },

    form: {
        width: '100%',
        alignItems: 'center',
    },

    input: {
        width: '100%',
        height: 48,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.18)',
        paddingHorizontal: 18,
        color: '#fff',
        marginVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.02)',
    },

    primaryBtn: {
        width: '100%',
        height: 48,
        borderRadius: 14,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E03A',
    },

    primaryBtnText: {
        color: '#111',
        fontSize: 16,
        fontWeight: '600',
    },

});
