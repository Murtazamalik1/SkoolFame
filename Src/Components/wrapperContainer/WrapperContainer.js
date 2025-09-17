
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WrapperContainer({
    children,
    statusBarColor = "transparent",
    barStyle = "light-content",
    backgroundColor = "#000",
}) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                barStyle={barStyle}
                translucent
                backgroundColor={statusBarColor}
            />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
