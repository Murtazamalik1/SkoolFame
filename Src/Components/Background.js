import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Images from '../constants/imagePath'
import COLORS from '../constants/colors';

export default function Background({ children }) {
    return (
        <View style={styles.safe}>
            <Image source={Images.ellipse} style={styles.bgGlowTop} resizeMode="contain" />
            <Image source={Images.ellipse19} style={styles.bgGlowBottom} resizeMode="contain" />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLORS.background,
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
        right: 20,
    },

});
