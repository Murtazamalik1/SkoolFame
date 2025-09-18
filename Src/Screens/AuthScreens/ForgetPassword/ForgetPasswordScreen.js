import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../navigation/NavigationStrings';
import CustomInput from '../../../components/atoms/CustomInput';
import CustomButton from '../../../components/atoms/CustomButton';
import Colors from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import WrapperContainer from '../../../components/wrapperContainer/WrapperContainer';
import { getScaledFontSize } from '../../../constants/globalFunction';

export default function ForgetPasswordScreen() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <WrapperContainer>
            <Background>
                <View style={styles.container}>
                    <Text style={styles.logo}>Skoolfame</Text>
                    <Text style={styles.heading}>Forget Password</Text>

                    <View style={styles.form}>
                        <CustomInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter email"
                            keyboardType="email-address"
                        />

                        <CustomButton
                            title="Send"
                            onPress={() => navigation.navigate(SCREENS.OTPSCREEN)}
                        />
                    </View>
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
        paddingTop: 50,
    },

    logo: {
        marginTop: 100,
        fontSize: getScaledFontSize(50),
        color: Colors.text,
        fontFamily: FONTS.logo,
        marginBottom: 8,
    },

    heading: {
        fontFamily: FONTS.Poppins,
        fontWeight: '400',
        fontSize: getScaledFontSize(22),
        lineHeight: 28,
        color: Colors.text,
        marginTop: 50,
        marginBottom: 18,
    },

    form: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },

});
