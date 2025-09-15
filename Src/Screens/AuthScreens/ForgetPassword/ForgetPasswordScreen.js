import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../Components/Background';
import { useNavigation } from '@react-navigation/native';


export default function ForgetPasswordScreen() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.logo}>Skoolfame</Text>
                <Text style={styles.heading}>Forget Password</Text>

                <View style={styles.form}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter email"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}
                        onPress={() => navigation.navigate('Otp')}>
                        <Text style={styles.primaryBtnText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingTop: 50,
    },

    logo: {
        marginTop: 100,
        fontSize: 50,
        color: '#fff',
        fontFamily: "cursive",
        marginBottom: 8,
    },

    heading: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 28,
        color: '#fff',
        marginTop: 50,
        marginBottom: 18,
    },

    form: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },

    input: {
        width: '100%',
        height: 48,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.18)',
        paddingHorizontal: 18,
        color: '#fff',
        marginVertical: 8,
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
