import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Background({ children }) {
    return (
        <View style={styles.safe}>

            <Image
                source={require('../Assets/Images/Ellipse.png')}
                style={styles.bgGlowTop}
                resizeMode="contain"
            />

            <Image
                source={require('../Assets/Images/Ellipse19.png')}
                style={styles.bgGlowBottom}
                resizeMode="contain"
            />

            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#000',
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
