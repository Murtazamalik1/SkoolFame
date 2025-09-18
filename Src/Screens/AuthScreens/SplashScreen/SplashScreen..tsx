import React, { useEffect } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import { SCREENS } from '../../../navigation/NavigationStrings';
import Images from "../../../constants/imagePath";
import COLORS from "../../../constants/colors";
import FONTS from "../../../constants/fonts";
import { useNavigation } from "@react-navigation/native";
import { getScaledFontSize } from "../../../constants/globalFunction";

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(SCREENS.LOGIN);
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground
            source={Images.Background}
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
        fontSize: getScaledFontSize(50),
        fontWeight: "900",
        color: COLORS.text,
        fontFamily: FONTS.logo,
    },
});

export default SplashScreen;
