import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";

export default function CustomInput({
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    keyboardType = "default",
    style,
}) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={Colors.placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[styles.input, style]}
        />
    );
}

const styles = StyleSheet.create({

    input: {
        width: "100%",
        height: 48,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 18,
        color: Colors.text,
        marginVertical: 8,
        backgroundColor: Colors.inputBg,

    },
});
