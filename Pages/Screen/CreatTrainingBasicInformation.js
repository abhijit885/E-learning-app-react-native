import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Picker from '../Screen/Components/Picker'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';

const CreatTrainingBasicInformation = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
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
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#70d85b", }}>____________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#70d85b", borderRadius: 50, paddingLeft: 3.7, paddingTop: .6 }}><Icon name="lock-closed-outline" size={25} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>______________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Schedule</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 7.8, paddingTop: 4 }}><IconIcon name="user" size={23} color="#ffffff" backgroundColor="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>______________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 7.8, paddingTop: 7 }}><IconIcon name="calendar" size={18} color="#ffffff" /></View></View></View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Topic</Text>
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
                    <Text>Category</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Sub Category</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Traing Type</Text>
                </View>
                {/* <View style={{ flexDirection: 'column' }}>
                    <RadioButton.Group style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', paddingLeft: 50 }}>

                            <View style={{ flexDirection: 'row' }}>

                                <RadioButton value="Male" />
                                <Text style={{ paddingTop: 8 }}>One to One</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <RadioButton value="Female" />
                                <Text style={{ paddingTop: 8 }}>One to Many</Text>
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
                        />
                        <Text style={{ paddingTop: 8 }}>One to Many</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ paddingTop: 8 }}>One to Many</Text>
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Training Recipients Type</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>No of Perticipants</Text>
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
                    <Text>Language</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Training Fees</Text>
                </View>
                <View style={styles.action}>
                    <TextInput
                        // placeholder="Your name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    // onChangeText={(val) => textFirstName(val)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Discount(Percentage)</Text>
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
                    <Text>Tupe of Training</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Level of Training</Text>
                </View>
                <Picker />
                <View style={{ margin: 10 }}>
                    <Text>Training Outcomes</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ height: 140, borderWidth: 1, borderColor: '000000', borderRadius: 5 }}>
                        <Text style={{ fontSize: 17, color: '000000', padding: 5, fontWeight: 'bold' }}>B I</Text>
                        <View style={styles.lineStyle} />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Requirment for taking training</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ height: 140, borderWidth: 1, borderColor: '000000', borderRadius: 5 }}>
                        <Text style={{ fontSize: 17, color: '000000', padding: 5, fontWeight: 'bold' }}>B I</Text>
                        <View style={styles.lineStyle} />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Description(Optional)</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ height: 140, borderWidth: 1, borderColor: '000000', borderRadius: 5 }}>
                        <Text style={{ fontSize: 17, color: '000000', padding: 5, fontWeight: 'bold' }}>B I</Text>
                        <View style={styles.lineStyle} />
                    </View>
                </View>
                <View style={styles.lineStyle2} />
                <View style={{ margin: 10, }}>
                    <View style={{ flexDirection: 'row', paddingTop: 30, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5 }}>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '25%',
                            padding: 1,
                            backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#7300ff', marginRight: 15, marginLeft: 30
                        }} onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={{ fontSize: 13, color: '#7300ff', fontWeight: 'bold' }}>Discard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 35, justifyContent: 'center', alignItems: 'center', width: '33%', padding: 1, backgroundColor: '#d51c6d', borderRadius: 5
                        }} onPress={() => navigation.navigate("CreatTrainingSchedule")}>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save & Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CreatTrainingBasicInformation;

const styles = StyleSheet.create({
    containerOut: {
        flex: 1,
        backgroundColor: '#ffffff'
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
        paddingLeft: 10,
        color: '#05375a',
        height: 40
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
});
