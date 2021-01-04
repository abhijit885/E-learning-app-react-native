import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import PhoneInput from "react-native-phone-number-input";

//import PhoneInput from 'react-native-phone-input'
//import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'
import { RadioButton } from 'react-native-paper';
import IconIcon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons';
import Picker from '../Components/Picker'

const ScreenCreateprofilebasicinformation = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    //const [value, setValue] = React.useState()

    // constructor(props) {
    //     super(props);
    //     //global.Currentstate = navigation.state.routeName;
    //     // this.state = { setData: '' };
    //     this.state = {
    //         // token: '',
    //         productArray: [],
    //         isLoading: true

    //       }
    // }
    const textnumber = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                phonenumber: val,
                isValiedphonenumber: true,
            });
        } else {
            setData({
                ...data,
                isValiedphonenumber: null,
            });
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Creat Instructor's Profile</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#5a00b5", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#5a00b5", borderRadius: 50, paddingLeft: 3.7, paddingTop: .6 }}><Icon name="lock-closed-outline" size={25} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Subject/Skills</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 4, paddingTop: 3 }}><Icon name="cog" size={25} color="#ffffff" backgroundColor="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Accounting Information</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 4.5, paddingTop: 3.5 }}><Icon name="calendar" size={22} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{
                        backgroundColor: "2cd383", paddingBottom: 20,
                        position: 'absolute'
                    }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 6.5, paddingTop: 5.5 }}><IconIcon name="check" size={20} color="#ffffff" /></View></View></View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Name</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Nick Name(Max 15 Latter)</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Nick Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Phone No</Text>
                </View>
                <View style={{ borderWidth: 0.6, borderRadius: 1.5, borderColor: '#505050', marginHorizontal: 10, height: 55 }}>
                    <PhoneInput style={styles.phonestyle}
                        // ref={phoneInput}
                        // defaultValue={value}
                        // defaultCode="DM"
                        // onChangeText={(text) => {
                        //   setValue(text);
                        // }}
                        // onChangeFormattedText={(number) => {
                        //     textnumber(number)
                        // }}
                        placeholder="0123456789"
                    //textContainerStyle="height=10"
                    />

                    {/* <PhoneInput /> */}

                    {/* <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} /> */}
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Email</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="abcd@gmail.com"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>D.O.B</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="10/07/1997"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Gender</Text>
                </View>
                {/* <View style={{ flexDirection: 'column' }}>
                        <RadioButton.Group style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', paddingLeft: 50 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton value="Male" />
                                    <Text style={{ paddingTop: 8 }}>First</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton value="Female" />
                                    <Text style={{ paddingTop: 8 }}>Second</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View> */}
                <View style={{ flexDirection: 'row', paddingLeft: 50 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        // style={{ colour:'#900' }}
                        />
                        <Text style={{ paddingTop: 8 }}>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ paddingTop: 8 }}>Female</Text>
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Language Spek (Max 3)</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Ex-English"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Experience in Years</Text>
                </View>
                <Picker />
                <View style={styles.lineStyle} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Qualification</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Univercity/Collage/Institution</Text>
                </View >
                <View style={styles.action}>
                    <TextInput
                        placeholder="Collage Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Degree/Certificate</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Degree Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Year</Text>
                </View>
                <Picker />
                <TouchableOpacity style={{
                    height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                    padding: 1,
                    backgroundColor: '#fffff', borderRadius: 5, marginLeft: 10, marginTop: 10, marginBottom: 5, borderRadius: 5, borderWidth: 1, borderColor: '#5a287d'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="add" size={20} color="#9700e3" />
                        <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Add</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ margin: 10 }}>
                    <Text>One Line About Me</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>About Me</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={{ height: 70 }}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Profile Photo</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity style={{
                        height: 45, width: '100%',
                        padding: 5,
                        backgroundColor: '#e6a000', borderRadius: 5
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'white', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 8 }}>Click hear Uplode Photo</Text>
                            <View style={{ paddingTop: 6 }}>
                                <IconIcon name="upload" size={23} color="#ffffff" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Uplode Introductory Video</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity style={{
                        height: 45, width: '100%',
                        padding: 5,
                        backgroundColor: '#e6a000', borderRadius: 5
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'white', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 8 }}>Click hear Uplode Video</Text>
                            <View style={{ paddingTop: 6 }}>
                                <IconIcon name="upload" size={23} color="#ffffff" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add Address</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Street</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Pin</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>State</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>City</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Country</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={styles.lineStyle} />
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>My Links</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Youtube</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={{ height: 40 }}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                    <View style={{ position: 'absolute', paddingLeft: 340, paddingTop: 7 }}>
                        <IconIcon name="youtube" size={21} color="#fc3536" />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Twiter</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //  placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                    <View style={{ position: 'absolute', paddingLeft: 340, paddingTop: 7 }}>
                        <IconIcon name="twitter" size={21} color="#23b3f8" />
                    </View>
                    {/*                     
                    <View style={{ alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <IconIcon name="twiter" size={23} color="#900" />
                    </View> */}
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Facebook</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //  placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                    <View style={{ position: 'absolute', paddingLeft: 340, paddingTop: 7 }}>
                        <IconIcon name="facebook-square" size={21} color="#46639c" />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Blogs</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //  placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                    <View style={{ position: 'absolute', paddingLeft: 340, paddingTop: 7 }}>
                        <Icon name="ellipse-outline" size={21} color="#fdc107" />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Website</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                    <View style={{ position: 'absolute', paddingLeft: 340, paddingTop: 7 }}>
                        <IconIcon name="globe" size={21} color="#90bb7c" />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Others Link</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Link</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //  placeholder="Your First name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View>
                    <View style={{ paddingTop: 30, alignItems: 'flex-start', marginRight: 5 }}>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                            padding: 1,
                            backgroundColor: '#fffff', borderRadius: 5, marginLeft: 10, borderRadius: 5, borderWidth: 1, borderColor: '#5a287d'
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="add" size={20} color="#9700e3" />
                                <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', paddingTop: 30, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5 }}>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                            padding: 1,
                            backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#7300ff', marginRight: 15, marginLeft: 30
                        }} onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={{ fontSize: 13, color: '#7300ff', fontWeight: 'bold' }}>Discurd</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '33%', padding: 1, backgroundColor: '#d51c6d', borderRadius: 5
                        }} onPress={() => navigation.navigate("ScreenCreatProfileSubjectSkill")}>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save & Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        // {part2 ? <View><Text style={{ color:"#5a00b5" }}>_________________</Text><Text style={{ color:"#5a00b5" }}>abhijit</Text></View> : <View><Text style={{ color:"#2cd383" }}>______________</Text></View>}
        // {part3 ? <View><Text style={{ color:"#fffeff" }}>______________</Text></View> : <View><Text style={{ color:"#749182" }}>________________</Text><Text style={{ color:"#749182" }}>abhijit</Text></View>}
    );
};
export default ScreenCreateprofilebasicinformation;

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        // },
    },
    lineStyle: {
        borderWidth: .4,
        borderColor: 'black',
        margin: 15,
        marginTop: 25
    },
    action: {
        //flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        borderWidth: 0.6,
        borderRadius: 5,
        borderColor: '#505050',
        //padding: 5
    },
    textInput: {
        //flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        height: 40
    },
    phonestyle: {
        height: 30,
        width: 100
    },
    // textContainerStyle{
    //     height:20
    // }
});