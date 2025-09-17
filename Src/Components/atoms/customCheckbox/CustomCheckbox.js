import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";



export default function CustomCheckbox({ label, checked, onChange }) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onChange}
        >
            <View style={[styles.box, checked && styles.boxChecked]} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
    box: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 4,
        marginRight: 10,
    },
    boxChecked: {
        backgroundColor: Colors.primary,
    },
    label: { color: Colors.text },
});
