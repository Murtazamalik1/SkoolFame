import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";

export default function CustomButton({ title, onPress, style, textStyle }) {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            activeOpacity={0.85}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 48,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        marginVertical: 10,
        marginTop: 25,
    },
    text: {
        color: "#111",
        fontSize: 16,
        fontWeight: "600",
    },
});
