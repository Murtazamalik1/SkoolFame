import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Modal,
    FlatList,
    Alert,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Entypo';
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export default function SignUpScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [education, setEducation] = useState('');
    const [school, setSchool] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [licenseAccepted, setLicenseAccepted] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // Modal
    const [requestModalVisible, setRequestModalVisible] = useState(false);
    const [reqSchoolName, setReqSchoolName] = useState('');
    const [reqAddress, setReqAddress] = useState('');

    const schoolList = [
        'SVG International School',
        'St. Mary’s School',
        'St. Josef School',
        'New Elementary School',
        'Cambridge High School',
    ];

    const handleSelectSchool = (item) => {
        setSchool(item);
        setModalVisible(false);
    };

    const handleSendRequest = () => {
        if (!reqSchoolName || !reqAddress) {
            Alert.alert("Error", "Please enter school name and address");
            return;
        }
        console.log("Request Sent:", reqSchoolName, reqAddress);
        Alert.alert("Success", "School request sent successfully!");
        setReqSchoolName('');
        setReqAddress('');
        setRequestModalVisible(false);
    };

    return (

        <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
            {/* Background Images */}
            <Image
                source={require('../../../Assets/Images/Ellipse.png')}
                style={styles.bgGlowTop}
                resizeMode="contain"
            />
            <Image
                source={require('../../../Assets/Images/Ellipse18.png')}
                style={styles.bgGlowTopLeft}
                resizeMode="contain"
            />
            <Image
                source={require('../../../Assets/Images/Ellipse19.png')}
                style={styles.bgGlowBottom}
                resizeMode="contain"
            />

            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.logo}>Skoolfame</Text>
                <Text style={styles.heading}>Sign Up</Text>

                <View style={styles.form}>
                    {/* Form*/}
                    <View style={styles.row}>
                        <TextInput
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First name"
                            placeholderTextColor="#bdbdbd"
                            style={[styles.input, { flex: 1, marginRight: 6 }]}
                        />
                        <TextInput
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last name"
                            placeholderTextColor="#bdbdbd"
                            style={[styles.input, { flex: 1, marginLeft: 6 }]}
                        />
                    </View>

                    {/* Education */}
                    <TextInput
                        value={education}
                        onChangeText={setEducation}
                        placeholder="Select educational level"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                    />

                    {/* School Dropdown */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setModalVisible(true)}
                        style={[
                            styles.input,
                            { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                        ]}
                    >
                        <Text style={{ color: school ? '#fff' : '#bdbdbd', fontSize: 16 }}>
                            {school || 'Select High School'}
                        </Text>
                        <Icon name="chevron-down" size={20} color="#fff" />
                    </TouchableOpacity>

                    {/* School Selection Modal */}
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>Select High School</Text>
                                <FlatList
                                    data={schoolList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => handleSelectSchool(item)}
                                            style={styles.option}
                                        >
                                            <Text style={styles.optionText}>{item}</Text>
                                            <View
                                                style={[styles.radioCircle, school === item && styles.radioSelected]}
                                            />
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>

                    {/* Email */}
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email address"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                        keyboardType="email-address"
                    />

                    {/* Password */}
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                        secureTextEntry
                    />

                    {/* Confirm Password */}
                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Password Again"
                        placeholderTextColor="#bdbdbd"
                        style={styles.input}
                        secureTextEntry
                    />

                    {/* Request for School */}
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end', marginVertical: 8 }}
                        onPress={() => setRequestModalVisible(true)}
                    >
                        <Text style={styles.link}>Request for school?</Text>
                    </TouchableOpacity>

                    {/* Privacy */}
                    <View style={styles.checkboxRow}>
                        <TouchableOpacity
                            style={[styles.checkbox, privacyAccepted && styles.checkboxChecked]}
                            onPress={() => setPrivacyAccepted(!privacyAccepted)}
                        />
                        <Text style={styles.checkboxText}>
                            I accept the Privacy Policy and Terms & Conditions
                        </Text>
                    </View>

                    {/* License */}
                    <View style={styles.checkboxRow}>
                        <TouchableOpacity
                            style={[styles.checkbox, licenseAccepted && styles.checkboxChecked]}
                            onPress={() => setLicenseAccepted(!licenseAccepted)}
                        />
                        <Text style={styles.checkboxText}>End user license agreement</Text>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                        <Text style={styles.primaryBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* School Modal */}
            <Modal
                visible={requestModalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setRequestModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.requestModalContainer}>
                        <Text style={styles.modalTitle}>Request for school</Text>

                        <TextInput
                            value={reqSchoolName}
                            onChangeText={setReqSchoolName}
                            placeholder="School name"
                            placeholderTextColor="#bdbdbd"
                            style={styles.requestInput}
                        />

                        <TextInput
                            value={reqAddress}
                            onChangeText={setReqAddress}
                            placeholder="Address"
                            placeholderTextColor="#bdbdbd"
                            style={styles.requestInput}
                        />

                        <TouchableOpacity style={styles.requestBtn} onPress={handleSendRequest}>
                            <Text style={styles.requestBtnText}>Send Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safe: {
        flex: 1,
        backgroundColor: '#000'
    },

    bgGlowTop: {
        position: 'absolute',
        alignSelf: 'center',
        width: 200,
        height: 200
    },

    bgGlowTopLeft: {
        position: 'absolute',
        top: height * 0.03,
        width: '100%'
    },

    bgGlowBottom: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 150,
        right: 40
    },

    scroll: {
        paddingHorizontal: 22,
        paddingTop: 40,
        paddingBottom: 40
    },

    logo: {
        fontSize: 32,
        color: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        marginBottom: 20
    },

    heading: {
        fontWeight: '400',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        top: 30
    },

    form: {
        width: '100%',
        top: 15
    },

    row: {
        flexDirection: 'row',
        width: '100%'
    },

    input: {
        flex: 1,
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.18)',
        paddingHorizontal: 18,
        color: '#fff',
        marginVertical: 6,
        backgroundColor: 'rgba(255,255,255,0.02)',
    },

    link: {
        fontSize: 13,
        color: '#0085FF',
        fontWeight: '400',
        lineHeight: 20
    },

    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6
    },

    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff',
        marginRight: 8
    },

    checkboxChecked: {
        backgroundColor: '#F2E03A',
        borderColor: '#F2E03A'
    },

    checkboxText: {
        color: '#fff',
        fontSize: 13
    },

    primaryBtn: {
        width: '100%',
        height: 48,
        borderRadius: 14,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E03A',
    },

    primaryBtnText: {
        color: '#111',
        fontSize: 16,
        fontWeight: '600'
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    modalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
        height: '50%'
    },

    modalTitle: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 16,
        color: '#000'
    },

    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    optionText: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
        lineHeight: 20
    },

    radioCircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: '#bbb'
    },

    radioSelected: {
        borderColor: '#F2E03A',
        backgroundColor: '#F2E03A'
    },

    requestModalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
        minHeight: '32%',
        alignItems: 'center'
    },

    requestInput: {
        width: '100%',
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 18,
        color: '#000',
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
    },

    requestBtn: {
        width: '100%',
        height: 48,
        borderRadius: 14,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E03A',
    },

    requestBtnText: {
        color: '#111',
        fontSize: 16,
        fontWeight: '600'
    },

});

