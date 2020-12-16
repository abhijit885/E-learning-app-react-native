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
//import Card from "./Components/Card";
import CustomCarasole from './Components/CustomCarasole'

export default class InstructorProfilePage extends Component {
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
        global.Currentstate = this.props.navigation.state.routeName;
        this.state = {
            subcategory: [
                { id: 0, name: 'Total Student', data: '1,456', img: require('../../icon/group-min.png') },
                { id: 1, name: 'Experience', data: '10 Years', img: require('../../icon/reading-book-min.png') },
                { id: 2, name: 'Taught', data: '40 Hours', img: require('../../icon/clock-min.png') },
                { id: 3, name: 'Past Traning', data: '18', img: require('../../icon/calendar-min.png') },
                { id: 4, name: 'Active Traning', data: '10', img: require('../../icon/first-aid-kit-min.png') },

            ]
        }


    }


    render() {
        return (

            <View style={styles.container}>

                <ScrollView>

                    <View style={{ height: 370, backgroundColor: '#f4efe9', position: 'relative', }}>
                        <View style={{ height: 250, margin: 14, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../icon/instructor1.png')} style={{ width: 115, height: 115, borderColor: '#f4efe900', borderWidth: 1, borderRadius: 10 }} />
                                <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                                    <Text style={{ color: '#3c3b37', fontWeight: 'bold', fontSize: 17 }}>
                                        Ranbir Chatterjee
                                    </Text>
                                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} >
                                        <View style={{ backgroundColor: '#e6a000', paddingRight: 5, paddingTop: 3, paddingBottom: 3, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }} >
                                            <Icon name='md-star' size={9} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                                            <Text style={{ color: 'white', fontSize: 9 }}>5.0</Text>
                                        </View>

                                        <Text style={{ fontFamily: 'roboto-regular', fontSize: 11, paddingLeft: 10, width: 140 }}>Rating(4,500)</Text>
                                    </View>
                                    <Text style={{ marginTop: 8, fontSize: 13, fontFamily: 'roboto-regular', height: 40, width: '95%', }} >Professional Web Developer and Instructor</Text>
                                    <Text style={{ marginTop: -5, fontSize: 13, fontFamily: 'roboto-regular', width: '90%', }} >Language Known:English,Hindi</Text>
                                </View>
                            </View>
                            <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'row', marginTop: 10, }} numberOfLines={2}>
                                {this.state.subcategory.map((item, key) => (
                                    <TouchableOpacity style={styles.buttonContainerSub} key={key} >
                                        <Image source={item.img} size={5} style={styles.inputIcon} />
                                        <Text style={styles.loginText}>{item.name}:{item.data}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 108, }}>
                                <TouchableOpacity style={{
                                    height: 35, justifyContent: 'center', alignItems: 'center', width: '33%',
                                    padding: 5,
                                    backgroundColor: '#5a287d', borderRadius: 5
                                }}>
                                    <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Add To Favorite</Text>
                                </TouchableOpacity>
                                <Text style={{ color: '#d73c5f', height: 35, justifyContent: 'center', textAlign: 'center', fontFamily: 'roboto-medium', marginTop: 7, marginLeft: 20 }}>Share this Training</Text>
                                <Image source={require('../../icon/facebook-min.png')} size={20} style={styles.inputIconFace} />
                                <Image source={require('../../icon/twitter-min.png')} size={20} style={styles.inputIconFace} />
                                <Image source={require('../../icon/google-plus-min.png')} size={20} style={styles.inputIconFace} />
                            </View>
                            <View>
                                {/* <View style={styles.circle} /> */}

                            </View>
                        </View>
                    </View >
                    <View  style={{marginTop:-70 }}>
                    {/* style={{ height: '95%', width: '95%', zIndex: 1000, flex: 1, flexWrap: 'wrap', elevation: 10, marginTop: -70, marginLeft: 10, marginRight: 10,}} */}
                        <View style={{
                            borderWidth: 0,
                            borderRedius: 0,
                            borderColor: '#ddd',
                            borderBottomWidth: 0,
                            shadowColor: '#ff00b8',
                            shadowOffset: { width: 10, height: 20 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                            elevation: 7,
                            marginLeft: 25,
                            marginRight: 25,
                            margintop: 20,
                            marginBottom: 20,
                            backgroundColor:"#faf9f9",
                        }} >
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'roboto-bold', color: '#3b3a36', fontSize: 17, paddingLeft: 20, paddingTop: 30, width: 140 }}>About Me</Text>
                                <Text style={{ fontFamily: 'roboto-regular', lineHeight: 20, color: '#40413c',  fontSize: 13, padding: 25, textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                                <Text style={{ fontFamily: 'roboto-bold', color: '#661eb5', fontSize: 14, paddingLeft: 20, marginBottom: 35, }}>read more+</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', width: '95%', marginLeft: 16, marginRight: 10, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 8, fontFamily: 'roboto-bold' }}>Upcoming Training Offered By Rabin Chatterjee</Text>
                        <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, }} />
                        <Text style={{  fontSize: 11, marginTop: 20,marginHorizontal:18, fontFamily: 'roboto-regular' }}>Lorem ipsum dolor sit amet consectetur adip text scing elit sed do eiusmod tempor labore</Text>
                    </View>
                    
                    <View style={{ marginTop: 20 }}>
                        <CustomCarasole />
                        {/* <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8, fontFamily: 'roboto-bold' }}>Upcoming Training Offered By Rabin Chatterjee Training Offered By Rabin Chatterjee</Text>
                       <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                    <Image source={require('../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                    <Text style={styles.loginText3}>10 Total Sessions</Text>
                  </View> */}
                    </View>
                    <View style={{ flexDirection: 'column', marginBottom: 20, width: '95%', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8, fontFamily: 'roboto-bold' }}>Reviews</Text>
                        <Image source={require('../../icon/color-border.png')} style={{ width: '20%', height: 8, marginTop: 5, marginLeft: 5 }} />
                    </View>
                </ScrollView>

            </View>
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
        marginTop: 5,
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
});