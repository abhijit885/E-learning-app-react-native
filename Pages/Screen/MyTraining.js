import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView ,StatusBar} from 'react-native';
import Picker from './Components/Picker'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const MyTraining  = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#961b37' barStyle="light-content" />

                <ScrollView>
                <View style={{ padding: 15, }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>My Training</Text>
                    </View>
                <View>
                    <View style={{ margin: 10 }}>
                        <Text>Start Date</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="From"
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => textFirstName(val)}
                            />
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="To"
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => textFirstName(val)}
                            />
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>Status</Text>
                    </View>
                    <Picker />
                    {/* <View style={{ flexDirection: 'column' }}>
                        <RadioButton.Group style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', paddingLeft: 50 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton value="Male" />
                                    <Text style={{ paddingTop: 8 }}>Past Training</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton value="Female" />
                                    <Text style={{ paddingTop: 8 }}>Upcoming Training</Text>
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
                        <Text style={{ paddingTop: 8 }}>Past Training</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ paddingTop: 8 }}>Upcoming Training</Text>
                    </View>
                </View>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '25%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 10, marginTop: 10, marginBottom: 5, borderRadius: 5,backgroundColor:'#d73c5e'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#ffffff', fontWeight: 'bold' }}>Search</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', height: 150, width: 250 }}>
                        <View >
                            <Icon name="contact" size={20} color="#9700e3" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Training ID:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Name:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Email:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Phone No:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Gender:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Age:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Status:</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', height: 150, width: 250 }}>
                        <View >
                            <Icon name="contact" size={20} color="#9700e3" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Training ID:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Name:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Email:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Phone No:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Gender:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Age:</Text>
                            <Text style={{ fontSize: 13, color: '#9700e3', fontWeight: 'bold' }}>Status:</Text>
                        </View>
                    </View>
                </View> */}
                </ScrollView>
            </View >
        );
};

export default MyTraining;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
       paddingTop: 5,
      paddingBottom:15,  
    },
    action: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
        borderWidth: 0.6,
        borderRadius: 5,
        borderColor: '#505050',
        //padding: 5
        width:170
    },
    textInput: {
        //flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        height: 40
    },
});
