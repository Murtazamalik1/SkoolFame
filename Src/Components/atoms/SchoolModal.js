import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { getScaledFontSize } from '../../constants/globalFunction';


export default function SchoolModal({
    visible,
    onClose,
    title,
    children,
    animationType = 'slide'
}) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType={animationType}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    modalContainer: {
        backgroundColor: COLORS.text,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
        height: '53%',
    },

    modalTitle: {
        fontSize: getScaledFontSize(18),
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 12,
    },

});
