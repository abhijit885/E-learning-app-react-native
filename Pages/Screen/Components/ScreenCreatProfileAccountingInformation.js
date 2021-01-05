import React, { Component } from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
//import PhoneInput from "react-native-phone-number-input";
//import { RadioButton } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/Ionicons';
//import Picker from '../Components/Picker'
import ProgressBarSteps from '../Components/ProgressBarSteps'
import CreatInstructorProfileAccount from '../CreatInstructorProfileAccount'

const ScreenCreatProfileAccountingInformation = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ paddingHorizontal: 10,paddingVertical:10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Creat Instructor's Profile</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 4.7, paddingTop: 1.4 }}><Icon name="lock-closed" size={23} color="#ffffff" /></View></View></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Subject/Skills</Text><View style={{ backgroundColor: "2cd383", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 4, paddingTop: 3 }}><Icon name="cog" size={25} color="#ffffff" backgroundColor="#2cd383" /></View></View></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#5a00b5", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Accounting Information</Text><View style={{ backgroundColor: "2cd383", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#5a00b5", borderRadius: 50, paddingLeft: 5, paddingTop: 3 }}><Icon name="calendar" size={22} color="#ffffff" /></View></View></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{
                        backgroundColor: "2cd383", paddingBottom: 20,
                        position: 'absolute'
                    }}><View style={{ height: 33, width: 33, backgroundColor: "#a8a8a7", borderRadius: 50, paddingLeft: 5, paddingTop: 6 }}><IconIcon name="check" size={21} color="#ffffff" /></View></View></View>
                </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ marginVertical: 10 }}>Bank Name</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, fontWeight: 'bold' }}
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ marginVertical: 10 }}>A/c No</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, fontWeight: 'bold' }}
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ marginVertical: 10 }}>IFSC Code</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, fontWeight: 'bold' }}
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ marginVertical: 10 }}>Name of account holder</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, fontWeight: 'bold' }}
                        //onChangeText={text => onChangeText(text)}
                        //value={value}
                        />
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={{ flexDirection: 'row', paddingTop: 30, alignItems: 'flex-start', justifyContent: 'space-around' ,marginBottom:10}}>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                            padding: 1,
                            backgroundColor: '#5e10b2', borderRadius: 5, marginRight: 45
                        }} onPress={() => navigation.navigate("ScreenCreatProfileSubjectSkill")}>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                            padding: 1,
                            backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '	#5e10b2'
                        }} onPress={() => navigation.navigate("HomeScreen")}>
                            <Text style={{ fontSize: 13, color: '#5e10b2', fontWeight: 'bold' }}>Discard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '33%',
                            padding: 1,
                            backgroundColor: '#d51c6d', borderRadius: 5
                        }} onPress={() => navigation.navigate("Screencreateprofilebasicgetcertified")}>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save & Continue</Text>
                        </TouchableOpacity>
                    </View>
                
            </ScrollView>
        </View>
    );
};

export default ScreenCreatProfileAccountingInformation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        //alignItems: 'center',
       // justifyContent: 'center',
        paddingTop: 5,
        //marginBottom: 10,
    },
    lineStyle: {
        borderWidth: .4,
        borderColor: 'black',
        margin: 15,
        marginTop: 25
    }
});

