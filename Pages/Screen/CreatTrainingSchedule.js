import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';

const CreatTrainingSchedule = ({ navigation }) => {

    return (
        <View style={styles.containerOut}>
            <ScrollView>
                <View style={{ marginTop: 30, marginLeft: 20, marginBottom: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Creat Training</Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add information for your training</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#62ea61", }}>____________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#70d85b", borderRadius: 50, paddingLeft: 3.7, paddingTop: .6 }}><Icon name="lock-closed-outline" size={25} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>______________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Schedule</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#5f00ba", borderRadius: 50, paddingLeft: 7.8, paddingTop: 4 }}><IconIcon name="user" size={22} color="#ffffff" backgroundColor="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>______________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 7.8, paddingTop: 7 }}><IconIcon name="calendar" size={18} color="#ffffff" /></View></View></View>
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={styles.action}>
                        <TextInput
                            // placeholder="Your First name"
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => textFirstName(val)}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            // placeholder="Your First name"
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => textFirstName(val)}
                        />
                    </View>
                </View> */}
                <View style={{ margin: 10 }}>
                    <Text>Total Duration(In Hours)</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //placeholder="Your name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Max No. of Participants</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        //placeholder="Your name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={styles.lineStyle2} />
                <View style={{ margin: 10 }}>
                    <Text>Schedule</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Date</Text>
                </View>
                <View>
                    <View style={styles.action}>
                        <TextInput
                            //placeholder="Your name"
                            style={styles.textInput}
                            autoCapitalize="none"
                        // onChangeText={(val) => textFirstName(val)}
                        />
                        <View style={{ position: 'absolute', marginTop: 8, marginLeft: 345 }}>
                            <Icon name="calendar" size={23} color="#889892" />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ margin: 10 }}>
                            <Text>From Time</Text>
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                // placeholder="Your First name"
                                style={styles.textInput4}
                                autoCapitalize="none"
                            // onChangeText={(val) => textFirstName(val)}
                            />

                        </View>
                        <View style={{ position: 'absolute', marginTop: 48, marginLeft: 160 }}>
                            <Icon name="time-outline" size={23} color="#889892" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ margin: 10 }}>
                            <Text>To Time</Text>
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                // placeholder="Your First name"
                                style={styles.textInput4}
                                autoCapitalize="none"
                            // onChangeText={(val) => textFirstName(val)}
                            />

                        </View>
                        <View style={{ position: 'absolute', marginTop: 48, marginLeft: 160 }}>
                            <Icon name="time-outline" size={23} color="#889892" />
                        </View>
                    </View>
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
                <View style={{ margin: 10 }}>
                    <Text>Added Timing</Text>
                </View>
                <View style={styles.lineStyle2} />
                <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'space-around', }}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                        padding: 1,
                        backgroundColor: '#5a287d', borderRadius: 5,
                    }} onPress={() => navigation.navigate('CreatTrainingBasicInformation')}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#020004'
                    }} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={{ fontSize: 13, color: '#020004', fontWeight: 'bold' }}>Discurd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '33%',
                        padding: 1,
                        backgroundColor: '#d51c6d', borderRadius: 5
                    }} onPress={() => navigation.navigate('CreatTrainingRefarenceMaterial')}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save & Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default CreatTrainingSchedule;

const styles = StyleSheet.create({
    containerOut: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginBottom: 5
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 15,
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
        // paddingLeft: 10,
        color: '#05375a',
        height: 40,
        width: 140
    },
    lineStyle: {
        borderWidth: .4,
        borderColor: 'black',
        //margin: 15,
        //marginTop: 25
    },
    lineStyle2: {
        borderWidth: .4,
        borderColor: 'black',
        margin: 15,
        marginTop: 25
    },
    textInput4: {
        height: 40,
        width: 180
    }
});
