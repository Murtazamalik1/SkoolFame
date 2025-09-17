import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Modal
} from 'react-native';
import Images from '../../../constants/image/imagePath';
import CustomInput from '../../../components/atoms/customInput/CustomInput';
import Icon from 'react-native-vector-icons/Entypo';
import CustomModal from '../../../components/atoms/customModal/CustomModal';
import CustomCheckbox from '../../../components/atoms/customCheckbox/CustomCheckbox';
import { showToast } from '../../../components/atoms/toastMessage/ToastMessage';
import { Dimensions } from 'react-native';
import CustomButton from '../../../components/atoms/customButton/CustomButton';
import WrapperContainer from '../../../components/wrapperContainer/WrapperContainer';
import Colors from '../../../constants/colors/Colors';
import Font from '../../../constants/fonts/Fonts'

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
            showToast("Please enter school name and address");
            return;
        }
        console.log("Request Sent:", reqSchoolName, reqAddress);
        showToast("School request sent successfully!");
        setReqSchoolName('');
        setReqAddress('');
        setRequestModalVisible(false);
    };

    return (
        <WrapperContainer>
            {/* Background Images */}
            <Image source={Images.ellipse} style={styles.bgGlowTop} resizeMode="contain" />
            <Image source={Images.ellipse18} style={styles.bgGlowTopLeft} resizeMode="contain" />
            <Image source={Images.ellipse19} style={styles.bgGlowBottom} resizeMode="contain" />

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
                    <CustomInput
                        value={education}
                        onChangeText={setEducation}
                        placeholder="Select educational level"
                    />

                    {/* School Dropdown */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setModalVisible(true)}
                        style={styles.schoolDropdown}
                    >
                        <Text
                            style={[
                                styles.schoolText,
                                school ? styles.schoolSelected : styles.schoolPlaceholder,
                            ]}
                        >
                            {school || 'Select High School'}
                        </Text>

                        <Icon name="chevron-down" size={20} color="#fff" />
                    </TouchableOpacity>

                    {/* School Selection Modal */}
                    <CustomModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        title="Select High School"
                    >
                        <FlatList
                            data={schoolList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleSelectSchool(item)}
                                    style={styles.option}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                    <View style={[styles.radioCircle, school === item && styles.radioSelected]} />
                                </TouchableOpacity>
                            )}
                        />
                    </CustomModal>

                    <CustomInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email address"
                        keyboardType="email-address"
                    />

                    {/* Password */}
                    <CustomInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                    />

                    {/* Confirm Password */}
                    <CustomInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Password Again"
                        secureTextEntry
                    />

                    {/* Request for School */}
                    <TouchableOpacity
                        style={styles.requestLink}
                        onPress={() => setRequestModalVisible(true)}
                    >
                        <Text style={styles.link}>Request for school?</Text>
                    </TouchableOpacity>

                    {/* Checkboxes */}
                    <CustomCheckbox
                        label="I accept the Privacy Policy and Terms & Conditions"
                        checked={privacyAccepted}
                        onChange={() => setPrivacyAccepted(!privacyAccepted)}
                    />
                    <CustomCheckbox
                        label="End user license agreement"
                        checked={licenseAccepted}
                        onChange={() => setLicenseAccepted(!licenseAccepted)}
                    />

                    {/* Sign Up Button */}
                    <CustomButton
                        title="Sign Up"
                        onPress={() => console.log('Sign Up In Pressed')}
                    />
                </View>
            </ScrollView>

            {/* Request School Modal */}
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

                        <CustomButton
                            title="Send Request"
                            onPress={handleSendRequest}
                            style={{ marginTop: 20 }}
                        />

                    </View>
                </View>
            </Modal>
        </WrapperContainer>
    );
}

const styles = StyleSheet.create({

    bgGlowTop: {
        position: 'absolute',
        alignSelf: 'center',
        width: 200,
        height: 200,
    },

    bgGlowTopLeft: {
        position: 'absolute',
        top: height * 0.03,
        width: '100%',
    },

    bgGlowBottom: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 150,
        right: 40,
    },

    schoolPlaceholder: {
        color: Colors.placeholderTextColor,
    },

    scroll: {
        paddingHorizontal: 22,
        paddingTop: 40,
        paddingBottom: 40,
    },

    logo: {
        fontSize: 32,
        color: Colors.text,
        fontFamily: Font.logo,
        textAlign: 'center',
        marginBottom: 20,
    },

    heading: {
        fontWeight: '400',
        fontSize: 20,
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 40,
        top: 30,
    },

    form: {
        width: '100%',
        top: 15,
    },

    row: {
        flexDirection: 'row',
        width: '100%',
    },

    rowInputLeft: {
        flex: 1,
        marginRight: 6,
    },

    rowInputRight: {
        flex: 1,
        marginLeft: 6,
    },

    input: {
        flex: 1,
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 18,
        color: Colors.text,
        marginVertical: 6,
        backgroundColor: Colors.backgroundColor,
    },

    schoolDropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 18,
        color: Colors.text,
        marginVertical: 6,
        backgroundColor: Colors.backgroundColor,
    },

    schoolText: {
        color: Colors.text,
        fontSize: 16,
    },

    schoolSelected: {
        color: Colors.text,
    },

    requestLink: {
        alignSelf: 'flex-end',
        marginVertical: 8,
    },

    link: {
        fontSize: 13,
        color: Colors.PrimaryText,
        fontWeight: '400',
        lineHeight: 20,
    },


    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderBottomColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    optionText: {
        fontSize: 20,
        color: Colors.background,
        fontWeight: '500',
        lineHeight: 20,
    },

    radioCircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: '#bbb',
    },

    radioSelected: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    requestModalContainer: {
        backgroundColor: Colors.text,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 16,
        minHeight: '32%',
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 16,
        color: '#000',
    },

    requestInput: {
        width: '100%',
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 18,
        color: Colors.background,
        marginVertical: 8,
        backgroundColor: Colors.LightGray,
    },

});

