import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image, ScrollView, SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Card } from "react-native-elements";
export default class TrainingDetailsPage extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: (<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../icon/logo.png')} /></View>),
            headerMode: 'none',
            headerTitleStyle: {
                color: '#5e5f61',
                fontSize: 16,
            },
            headerStyle: {
                // backgroundColor: '#141f47',//'#04adb3',
                height: 50,
            },
            headerTitleAlign: 'center',

        }
    }

    constructor(props) {
        super(props);
       // global.Currentstate = this.props.navigation.state.routeName;
        this.state = {
            subcategory: [
                { id: 0, name: 'Rabin Manna', data: '1,456', img: require('../../icon/instructor2.png') },
                { id: 1, name: 'Rabin Manna', data: '10 Years', img: require('../../icon/instructor2.png') },
                { id: 2, name: 'Rabin Manna', data: '40 Hours', img: require('../../icon/instructor2.png') },
                { id: 3, name: 'Rabin Manna', data: '18', img: require('../../icon/instructor2.png') },
                { id: 4, name: 'Rabin Manna', data: '10', img: require('../../icon/instructor2.png') },

            ],
            topsearch: [
                { id: 0, name: 'What you will learn' }, { id: 1, name: 'Requirements' }, { id: 2, name: 'Course Schedule' }, { id: 3, name: 'Description' },
                { id: 5, name: 'Reference-link' },
            ],
        }


    }


    render() {
        return (

            <View style={styles.container}>

                <ScrollView>

                    <View style={{ height: 290, backgroundColor: '#f4efe9', position: 'relative', }}>
                        <View style={{ height: 250, margin: 14, }}>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                                    <Text style={{ color: '#41165e', fontFamily: 'roboto-bold', fontWeight: 'bold', fontSize: 19 }}>
                                        Learn photoshop, web desing and profitable freelancing
                                    </Text>

                                    <Text style={{ marginTop: 8, fontSize: 13, fontFamily: 'roboto-regular', height: 40, width: '95%', }} >Learn the essential tool of photoshop and web design</Text>
                                    <Text style={{ color: '#41165e', marginTop: -15, fontSize: 14, fontFamily: 'roboto-regular', width: '90%', }} >Instructor name with the link</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ color: '#d73c5f', height: 35, justifyContent: 'center', textAlign: 'center', fontFamily: 'roboto-medium', marginTop: 15, marginLeft: 15 }}>Share this Training</Text>
                                <Image source={require('../../icon/facebook-min.png')} size={17} style={styles.inputIconFace} />
                                <Image source={require('../../icon/twitter-min.png')} size={17} style={styles.inputIconFace} />
                                <Image source={require('../../icon/google-plus-min.png')} size={17} style={styles.inputIconFace} />
                            </View>
                            <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'row', marginTop: 5, marginLeft: 10, marginRight: 10 }} >
                                <TouchableOpacity style={{
                                    height: 38, justifyContent: 'center', alignItems: 'center', width: '55%',
                                    padding: 5, marginRight: 5,
                                    backgroundColor: '#5a287d', borderRadius: 20
                                }}>
                                    <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Open Training Instructor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    height: 38, justifyContent: 'center', alignItems: 'center', width: '35%',
                                    padding: 5, marginLeft: 5,
                                    backgroundColor: '#5a287d', borderRadius: 20
                                }}>
                                    <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Add To Favorite</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: '95%', width: '95%', zIndex: 1000, flex: 1, flexWrap: 'wrap', elevation: 3, marginTop: -70, marginLeft: 10, marginRight: 10 }}>
                        <Card style={{ width: '100%', height: 500, marginRight: 2, marginBottom: 2, zIndex: 1000, flex: 2 }} >
                            <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', width: '100%' }}>
                                <Image source={require('../../icon/banner1.png')} style={{ width: '100%', height: 130, marginTop: 5, }} />
                                <View style={{ flexDirection: 'row', }}>

                                    <Text style={{ fontSize: 13, paddingLeft: 4, paddingRight: 2, marginTop: 8, marginLeft: 6, fontWeight: 'bold' }}>{'\u20B9'}500</Text>
                                    <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginLeft: 4, marginTop: 8, textDecorationStyle: 'solid', fontSize: 13, }}>
                                        {'\u20B9'}6850
                        </Text>
                                    <Text style={{ fontSize: 13, paddingLeft: 4, paddingRight: 2, marginTop: 8, marginLeft: 6, fontWeight: 'bold' }}>95% off</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>

                                    <TouchableOpacity style={{ width: 60, height: 22, backgroundColor: '#c3dcb4', marginLeft: 8, alignItems: 'center', borderRadius: 5, borderColor: "#c3dcb4", borderWidth: 1, paddingLeft: 2 }}>
                                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 11, marginTop: 2 }}>Online</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 70, height: 22, backgroundColor: '#f1cd83', marginLeft: 8, alignItems: 'center', borderRadius: 5, borderColor: "#f1cd83", borderWidth: 1, paddingLeft: 2 }}>
                                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 11, marginTop: 2 }}>One to One</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
                                    <Text style={styles.loginText}>Book This Training</Text>
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={[styles.buttonContainer, styles.loginButton2]} >
                                    <Text style={styles.loginText2}>Add To Cart</Text>
                                </TouchableOpacity> */}
                                <Text style={{ width: '100%', alignItems: 'center', textAlign: 'center', fontSize: 11, paddingLeft: 4, paddingRight: 2, marginTop: 5, fontWeight: 'normal' }}>Money back gurantee on cancellation</Text>
                                <Text style={{ width: '100%', alignItems: 'center', textAlign: 'left', fontSize: 16, paddingLeft: 4, paddingRight: 2, marginLeft: 10, marginTop: 25, fontWeight: 'bold', fontFamily: 'roboto-bold' }}>Training Description:</Text>
                                <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 7 }}>
                                        <Image source={require('../../icon/group-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Training In English</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/group-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Maximum Participants 20</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/clock-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Total duration 10 days</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>10 Total Sessions</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Wedn 11th sep to Thurs 26th Sep</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Age group of 5 to 12 years</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/check-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Expert level training</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, marginBottom: 5 }}>
                                        <Image source={require('../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                                        <Text style={styles.loginText3}>Training using online tools</Text>
                                    </View>


                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={{ height: '65%', width: '95%', zIndex: 1000, flex: 1, flexWrap: 'wrap', elevation: 3, marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Card style={{ width: '100%', height: 10, marginRight: 2, marginBottom: 2, zIndex: 1000, flex: 1 }} >
                            <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'column', marginRight: 5 }} numberOfLines={2}>
                                {this.state.topsearch.map((item, key) => (
                                    <View key={key} style={{ flexWrap: "wrap", flexDirection: 'column' }}>
                                        <TouchableOpacity style={styles.buttonContainerSub2}  >

                                            <Text style={styles.loginText4}>{item.name}</Text>
                                            <Image source={require('../../icon/right-arrow-angle.png')} style={{ width: 15, height: 15, marginLeft: 6 }} />

                                        </TouchableOpacity>
                                        <Text style={{ fontStyle: 'italic', marginTop: -10, fontWeight: 'bold', color: '#e9e9e9', width: '70%' }}>________________________________________________</Text>
                                    </View>
                                ))}
                            </View>
                        </Card>
                    </View>
                    <View style={{ flexDirection: 'column', width: '85%', marginLeft: 20, marginRight: 15, marginTop: 40 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5, fontFamily: 'roboto-bold' }}>Related Training</Text>
                        <Image source={require('../../icon/color-border.png')} style={{ width: '25%', marginLeft: 2, height: 4, marginTop: 5, }} />
                        <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 10, fontFamily: 'roboto-light', marginBottom: 15 }}>Lorem Ipsum dolor amet sit this is dummy text</Text>
                        <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'column', marginRight: 5 }} numberOfLines={2}>
                            {this.state.subcategory.map((item, key) => (
                                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                    <Image source={require('../../icon/img1-min.png')} style={{ width: 95, height: 95, borderColor: '#f4efe900', borderWidth: 1, borderRadius: 10 }} />
                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'roboto-bold', flexWrap: 'wrap', flexDirection: 'row', }}  >Photography - Become a better Photographer - Part I</Text>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold', fontFamily: 'roboto-bold', }}>Prakash Sarkar</Text>
                                        <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 40, height: 17, borderRadius: 2, flexDirection: 'row', }}>
                                                <Icon name='md-star' size={11} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                                                <Text style={{ color: 'white', fontSize: 9 }}>5.0</Text>
                                            </View>
                                            <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <Text style={{ fontSize: 13, paddingLeft: 4, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 5, }}>{'\u20B9'} 500</Text>
                                            <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 7, paddingLeft: 10, textDecorationStyle: 'solid', fontSize: 13, }}>
                                                {'\u20B9'} 6850
                                            </Text>

                                        </View>
                                    </View>
                                </View>

                            ))}
                        </View>


                    </View>

                </ScrollView>

            </View >
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'

    },
    inputs: {
        height: 85,
        marginLeft: 5,
        borderColor: '#3c3b37',
        width: '93%',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        fontFamily: 'roboto-regular',
    },
    buttonContainerSub: {

        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: '31%',
        borderRadius: 30,
        padding: 5,
        margin: 3,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    buttonContainerSub2: {

        height: 30,
        flexDirection: 'row',


        width: '100%',
        borderRadius: 30,
        padding: 5,

        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    inputIcon: {
        width: 12,
        height: 12,
        marginLeft: 1,

        marginRight: 5,
        justifyContent: 'center'
    },
    loginText: {
        fontSize: 10
    },
    inputIconFace: {
        width: 25,
        height: 25,
        marginLeft: 10,

        justifyContent: 'center'
    },
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        position: 'absolute',
        top: 150,
        right: 10,
        elevation: 10,
        backgroundColor: 'yellow',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 5,
        width: 300,
        marginTop: 10,
        borderRadius: 3
    },
    loginButton: {
        backgroundColor: "#d73c5e",
        alignItems: 'center'
    },
    loginButton2: {
        backgroundColor: "#ffffff",
        alignItems: 'center',
        borderColor: '#a78bba', borderWidth: 1, borderRadius: 5,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'roboto-bold'
    },
    loginText2: {
        color: '#630db4',
        fontWeight: 'bold',
        fontFamily: 'roboto-bold'
    },
    loginText3: {

        color: '#3b3c37',
        fontWeight: 'bold',
        fontFamily: 'roboto-bold'
    },
    loginText4: {
        alignItems: 'center',
        marginTop: -5,
        height: 30,
        width: '90%',
        color: '#3b3c37',
        fontWeight: 'bold',
        fontFamily: 'roboto-bold'
    },
});