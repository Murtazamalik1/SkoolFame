import React, { useEffect } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import { SCREENS } from "../../navigation/navigationStrings/NavigationStrings";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace(SCREENS.LOGIN);
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground
            source={require("../../assets/Images/Maskgroup.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.logoText}>Skoolfame</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logoText: {
        fontSize: 50,
        fontWeight: "900",
        color: "#ffffff",
        fontFamily: "cursive",
    },
});

export default SplashScreen;
