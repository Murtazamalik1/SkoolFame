import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <Image
                source={require('../../../Assets/Images/Ellipse.png')}
                style={styles.bgGlowTop}
                resizeMode="contain"
            />

            <Image
                source={require('../../../Assets/Images/Ellipse19.png')}
                style={styles.bgGlowBottom}
                resizeMode="contain"
            />

            <View style={styles.container}>
                <Text style={styles.logo}>Skoolfame</Text>
                <Text style={styles.signin}>Sign In</Text>

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

                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                        secureTextEntry
                    />

                    <View style={styles.rowBetween}>
                        <View style={styles.rememberRow}>
                            <View style={styles.checkbox} />
                            <Text style={styles.rememberText}>Remember me</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                            <Text style={styles.forgot}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                        <Text style={styles.primaryBtnText}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={styles.orRow}>
                        <View style={styles.hr} />
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.hr} />
                    </View>

                    <TouchableOpacity style={styles.appleBtn} activeOpacity={0.85}>
                        <Image
                            source={require('../../../Assets/Images/Vector.png')}
                            style={styles.appleIcon}
                        />
                        <Text style={styles.appleText}>Sign In with Apple ID</Text>
                    </TouchableOpacity>

                    <View style={styles.signupRow}>
                        <Text style={styles.noAcc}>Don't have any account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.signup}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safe: {
        flex: 1,
        backgroundColor: '#000'
    },

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
        right: 20
    },

    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingTop: 28,
        top: 70
    },

    logo: {
        marginTop: 16,
        fontSize: 50,
        color: '#fff',
        fontFamily: "cursive",
        marginBottom: 8,
    },

    signin: {
        color: '#fff',
        fontSize: 18,
        marginTop: 18,
        marginBottom: 18,
        top: 20
    },

    form: {
        width: '100%',
        alignItems: 'center',
        top: 50
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

    rowBetween: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
    },

    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.25)',
        marginRight: 8,
    },

    rememberText: {
        color: '#ddd'
    },

    forgot: {
        color: '#0085FF'
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
        fontWeight: '600'
    },

    orRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 18
    },

    hr: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },

    orText: {
        marginHorizontal: 12,
        color: '#cfcfcf'
    },

    appleBtn: {
        width: '100%',
        height: 52,
        borderRadius: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    appleIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
        resizeMode: 'contain'
    },

    appleText: {
        flex: 1,
        textAlign: 'center',
        color: '#111',
        fontWeight: '600'
    },

    signupRow: {
        flexDirection: 'row',
        marginTop: 18
    },

    noAcc: {
        color: '#cfcfcf'
    },

    signup: {
        color: '#0085FF'
    },
});
