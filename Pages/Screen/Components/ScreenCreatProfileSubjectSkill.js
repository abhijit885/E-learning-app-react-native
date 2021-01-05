import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';
import Picker from '../Components/Picker'

const ScreenCreatProfileSubjectSkill = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>Creat Instructor's Profile</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 3.7, paddingTop: .6 }}><Icon name="lock-closed-outline" size={25} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#5a00b5", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Subject/Skills</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#5a00b5", borderRadius: 50, paddingLeft: 4, paddingTop: 3 }}><Icon name="cog" size={25} color="#ffffff" backgroundColor="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Accounting Information</Text><View style={{ backgroundColor: "749182", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 4.5, paddingTop: 3.8 }}><Icon name="calendar" size={22} color="#ffffff" /></View></View></View>

                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#749182", }}>________________</Text><Text style={{ color: "#000000", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{
                        backgroundColor: "2cd383", paddingBottom: 20,
                        position: 'absolute'
                    }}><View style={{ height: 33, width: 33, backgroundColor: "#b5b5b5", borderRadius: 50, paddingLeft: 6.5, paddingTop: 6.5 }}><IconIcon name="check" size={20} color="#ffffff" /></View></View></View>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Category</Text>
                </View>
                <View>
                    <Picker />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Sub Category</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Picker />
                </View>
                <View style={{
                    borderWidth: .2,
                    borderColor: 'black',
                    margin: 15,
                    marginTop: 10
                }} />
                <View style={{ alignSelf: 'center', marginTop: 0 }}>
                    <Text>Or</Text>
                </View>
                <View style={{
                    borderWidth: .2,
                    borderColor: 'black',
                    margin: 15,
                    marginTop: 10
                }} />
                <View style={{ margin: 10 }}>
                    <Text>Search Hear Your Skills</Text>
                </View>
                <View>
                    <Picker />
                </View>
                <View style={{ marginTop: 20, marginBottom: 25 }}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 10, borderRadius: 5, borderWidth: 1, borderColor: '#5e10b2'
                    }}>
                        <Text style={{ fontSize: 13, color: '#5e10b2', fontWeight: 'bold', padding: 0 }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle} />
                <View style={{ marginLeft: 15 }}>
                    <Text>List of Subject/Skill</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#ff52d1'
                    }}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }}>.Net</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#ff52d1'
                    }}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }}>Java</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#ff52d1'
                    }}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }}>Php</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lineStyle} />
                <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'space-around', marginRight: 5 ,marginBottom:10}}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                        padding: 1,
                        backgroundColor: '#5e10b2', borderRadius: 5,
                    }} onPress={() => navigation.navigate('ScreenCreateprofilebasicinformation')}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Back</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '15%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, borderRadius: 5, borderWidth: 1, borderColor: '#5a287d'
                    }}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }}>Discurt</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, marginLeft: 30, borderRadius: 5, borderWidth: 1, borderColor: '#5e10b2'
                    }} onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={{ fontSize: 13, color: '#5e10b2', fontWeight: 'bold' }}>Discurd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '33%',
                        padding: 1,
                        backgroundColor: '#d51c6d', borderRadius: 5
                    }} onPress={() => navigation.navigate('ScreenCreatProfileAccountingInformation')}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save & Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        // {this.props.part2 ? <View><Text style={{ color:"#5a00b5" }}>_________________</Text><Text style={{ color:"#5a00b5" }}>abhijit</Text></View> : <View><Text style={{ color:"#2cd383" }}>______________</Text></View>}
        // {this.props.part3 ? <View><Text style={{ color:"#fffeff" }}>______________</Text></View> : <View><Text style={{ color:"#749182" }}>________________</Text><Text style={{ color:"#749182" }}>abhijit</Text></View>}
    );
};
export default ScreenCreatProfileSubjectSkill;

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
        paddingTop: 5,
        // paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        //paddingBottom: 10,
        // },
    },
    lineStyle: {
        borderWidth: .2,
        borderColor: 'black',
        margin: 15,
        marginTop: 25
    }
});