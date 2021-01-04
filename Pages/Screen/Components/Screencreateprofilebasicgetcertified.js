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
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';

const Screencreateprofilebasicgetcertified  = ({ navigation }) => {
   
        return (
            <View style={styles.outerview}>
                <ScrollView>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Creat Instructor's Profile</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#0e0200", paddingTop: 20, fontSize: 9 }}>Basic Information</Text><View style={{ position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 6.2, paddingTop: 4 }}><Icon name="lock-closed" size={21} color="#ffffff" /></View></View></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#0e0200", paddingTop: 20, fontSize: 9 }}>Subject/Skills</Text><View style={{ backgroundColor: "2cd383", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 4.2, paddingTop: 4 }}><Icon name="cog" size={25} color="#ffffff" backgroundColor="#2cd383" /></View></View></View>
                    <View style={{ alignItems: 'center' }}><Text style={{ color: "#82b46d", }}>________________</Text><Text style={{ color: "#0e0200", paddingTop: 20, fontSize: 9 }}>Accounting Information</Text><View style={{ backgroundColor: "2cd383", paddingBottom: 20, position: 'absolute' }}><View style={{ height: 33, width: 33, backgroundColor: "#82b46d", borderRadius: 50, paddingLeft: 5, paddingTop: 4 }}><Icon name="calendar" size={21} color="#ffffff" /></View></View></View>
                     <View style={{ alignItems: 'center' }}><Text style={{ color: "#5a00b5", }}>________________</Text><Text style={{ color: "#0e0200", paddingTop: 20, fontSize: 9 }}>Get Certified</Text><View style={{
                        backgroundColor: "2cd383", paddingBottom: 20,
                        position: 'absolute'
                    }}><View style={{ height: 33, width: 33, backgroundColor: "#5a00b5", borderRadius: 50, paddingLeft: 5, paddingTop: 6.5}}><IconIcon name="check" size={21} color="#ffffff" /></View></View></View>
                </View>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 22, fontWeight: '400' }}>Get Certified by AppleSkool</Text>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ fontSize: 10 }}>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it tindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t</Text>
                    </View>
                </View>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 19, fontWeight: '300' }}>Being certified will enable you to</Text>
                    <View style={{ marginTop: 10, }}>
                        <Text style={{ fontSize: 10 }}>1. There are many variations of passages of Lorem Ipsum available.</Text>
                        <Text style={{ fontSize: 10 }}>2.  by injected humour, or randomised words which don't look even</Text>
                        <Text style={{ fontSize: 10 }}>3.  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't</Text>
                        <Text style={{ fontSize: 10 }}>4.  All the Lorem Ipsum generat</Text>
                    </View>
                    <View style={styles.lineStyle} />
                    </View>
                <View style={{ paddingHorizontal: 10, }}>
                    <Text style={{ fontSize: 15, textAlign: 'justify' }}> If you are going to use a passage of sure there isn't</Text>
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
                    <Text style={{ paddingTop: 10, color: "#8300c2" }}>View Certificate</Text>
                </View>
                <View style={{ padding: 0, }}>
                    <Text style={{ fontSize: 15, marginLeft: 10 }}>Creat Instructor's Profile Creat Instructor's Profile</Text>
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
                {/* <View style={{ padding: 0, }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Creat Instructor's Profile Creat Instructor's Profile</Text>
                </View> */}
                <View style={{ margin: 0 }}>
                    <Text style={{ marginLeft: 10 }}>If you are going to use a passage of Lorem Ipsum</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, fontWeight: 'bold', margin: 10 }}
                    //onChangeText={text => onChangeText(text)}
                    //value={value}
                    />
                </View>
                <View style={styles.lineStyle} />
                <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'flex-start', justifyContent: 'space-around', marginHorizontal:10 }}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '25%',
                        backgroundColor: '#5a287d', borderRadius: 5,marginLeft:10
                    }} onPress={() => navigation.navigate("ScreenCreatProfileAccountingInformation")}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Add To Back</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '20%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, borderRadius: 5, borderWidth: 1, borderColor: '#5a287d',marginRight:5
                    }}  onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }} >Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '22%',
                        padding: 1,
                        backgroundColor: '#fffff', borderRadius: 5, borderRadius: 5, borderWidth: 1, borderColor: '#5a287d',marginRight:5
                    }}  onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 13, color: '#130002', fontWeight: 'bold' }}>Discurd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 35, justifyContent: 'center', alignItems: 'center', width: '39%',
                        padding: 1,
                        backgroundColor: '#d51c6d', borderRadius: 5,marginRight:10
                    }} onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Save and Continue</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
};
export default Screencreateprofilebasicgetcertified;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    lineStyle: {
        borderWidth: .4,
        borderColor: 'black',
        margin: 15,
        marginTop: 25
    },
    outerview:{
        backgroundColor: 'white',
        paddingTop:3,
        marginBottom:9
    }
});

