import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-elements';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class CourseDetailsPage extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {

        return {

            title: (<View style={styles.inputContainer}>

                <TextInput style={styles.inputs}
                    placeholder="Search"

                    underlineColorAndroid='transparent'
                />
                <Icon name='md-search' size={20} style={styles.inputIcon} />
            </View>),
            headerTitleStyle: {
                color: '#5e5f61',
                fontSize: 11,
            },
            headerStyle: {
                //backgroundColor: '#141f47',//'#04adb3',
                height: 55,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#141f47',

        }
    }

    constructor(props) {
        super(props);
        global.Currentstate = this.props.navigation.state.routeName;
        this.state = {
            email: '',
            password: '',
            images: [
                require('../../icon/banner1.png'),
                require('../../icon/banner2.png'),
                require('../../icon/banner3.png'),
            ],
            traing: [
                require('../../icon/featured-training-img.png'),
                require('../../icon/featured-training-img2.png'),
                require('../../icon/featured-training-img3.png'),
                require('../../icon/featured-training-img3.png'),
                require('../../icon/featured-training-img3.png'),
            ],
            instructorImage: [
                require('../../icon/instructor1.png'),
                require('../../icon/instructor2.png'),
                require('../../icon/instructor3.png'),
            ],
            topicks: [
                { id: 0, name: 'CBT' }, { id: 1, name: 'Messages' }, { id: 2, name: 'Fitness' }, { id: 3, name: 'Yoga' }, { id: 4, name: 'Dieting' },
                { id: 5, name: 'Nutration' }, { id: 6, name: 'Meditation' },
            ],
            subcategory: [
                { id: 0, name: 'Fitness', img: require('../../icon/barbell-min.png') }, { id: 1, name: 'Dieting', img: require('../../icon/diet-min.png') },
                { id: 2, name: 'Genaral', img: require('../../icon/barbell-min.png') }, { id: 3, name: 'Yoga', img: require('../../icon/lotus-position-min.png') },
                { id: 4, name: 'First Aid', img: require('../../icon/first-aid-kit-min.png') },
                { id: 5, name: 'Nutration', img: require('../../icon/apple-min.png') },
            ]
        }


    }


    render() {
        return (


            <View style={styles.container}>
                <ScrollView>
                    <View style={{ width: '100%', marginTop: 5, }}>
                        {/* <View  style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop:10, width:'100%' }}/> */}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{
                                flex: 1, flexDirection: 'row', height: 30, borderRightColor: 'gray', borderBottomColor: 'gray', borderBottomWidth: .5,
                                alignContent: 'center', justifyContent: 'center', marginTop: 10
                            }}>
                                <Image source={require('../../icon/sort-min.png')} style={{ width: 20, height: 20, marginLeft: 5, marginRight: 15 }} />
                                <Text>Sort</Text>
                            </View>
                            <View style={{
                                flex: 1, flexDirection: 'row', height: 30, borderBottomColor: 'gray', borderBottomWidth: .5, borderLeftWidth: .5,
                                alignContent: 'center', justifyContent: 'center', marginTop: 10
                            }}>

                                <Image source={require('../../icon/filter-min.png')} style={{ width: 20, height: 20, marginLeft: 5, marginRight: 15 }} />
                                <Text>Filter</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.category2}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 30 }}>Photoshop</Text>
                            <Image source={require('../../icon/color-border.png')} style={{ width: '55%', height: 4, marginTop: 5, marginLeft: 6 }} />
                        </View>

                    </View>
                    {
                        this.state.traing.map((item, key) => (
                            <View key={key} style={{ alignItems: 'center', flexWrap: 'wrap' }} >
                                <View style={{ flexDirection: 'row', marginTop: 25, margin: 5, borderBottomColor: 'gray', marginLeft: 15 }} >
                                    <View style={{ flexDirection: 'column' }}>
                                        <Image source={item} style={styles.cardImageALLCourses} />

                                    </View>

                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                        <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold', fontFamily: 'roboto-bold', flexWrap: 'wrap', flexDirection: 'row', }}  >Photography - Become a better Photographer - Part I</Text>
                                        <Text style={{ fontFamily: 'roboto-regular', fontSize: 12 }}>master Photoshop CC 2020 without any previous knowledge</Text>

                                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                                            <Image source={require('../../icon/name-icon.png')} style={{ width: 22, height: 20, color: '#000000', marginRight: 5 }} />
                                            <Text style={{ fontFamily: 'roboto-bold', color: '#5f12b3', marginRight: 5 }}>Prakash Sarkar</Text>
                                            <Text style={{ fontFamily: 'roboto-regular', fontSize: 11 }}>, Photoshop Expert</Text>
                                        </View>
                                        <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ alignItems: 'center', marginLeft: 2, marginTop: 5, borderRadius: 2, flexDirection: 'row', }}>
                                                <Text style={{ color: '#e6a000', fontSize: 13, fontFamily: 'roboto-bold', marginRight: 5 }}>5.0</Text>
                                                <Icon name='md-star' size={13} style={{ marginLeft: 1, color: '#e6a000', marginRight: 1 }} />
                                                <Icon name='md-star' size={13} style={{ marginLeft: 1, color: '#e6a000', marginRight: 1 }} />
                                                <Icon name='md-star' size={13} style={{ marginLeft: 1, color: '#e6a000', marginRight: 1 }} />
                                                <Icon name='md-star' size={13} style={{ marginLeft: 1, color: '#e6a000', marginRight: 1 }} />
                                                <Icon name='md-star' size={13} style={{ marginLeft: 1, color: '#e6a000', marginRight: 1 }} />
                                            </View>
                                            <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: "wrap", }}>

                                            <Text style={{ fontSize: 11, paddingLeft: 3, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>◘ 200 Sessions</Text>
                                            <Text style={{ fontSize: 11, paddingLeft: 3, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>◘ Taken Online</Text>
                                            <Text style={{ fontSize: 11, paddingLeft: 3, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>◘ 1 total hours</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: "wrap", }}>

                                            <Text style={{ fontSize: 11, paddingLeft: 3, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>20,sep 2020 - 21,sep 2020</Text>
                                            <Text style={{ fontSize: 11, paddingLeft: 3, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>◘ Expert</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                                            <Text style={{ fontSize: 12, paddingLeft: 4, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>{'\u20B9'} 500/-</Text>
                                            <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 2, paddingLeft: 10, fontFamily: 'roboto-bold', textDecorationStyle: 'solid', fontSize: 12, }}>
                                                {'\u20B9'} 6850/-
                                            </Text>
                                            <Text style={{ fontSize: 11, paddingLeft: 15, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 2, }}>6 Class</Text>
                                            <TouchableOpacity style={{ width: 60, height: 16, backgroundColor: '#bfdeb3', marginLeft: 8, alignItems: 'center', borderRadius: 3, borderColor: "#bfdeb3", borderWidth: 1, paddingLeft: 2 }}>
                                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 9, }}>One to One</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.orLine} />
                            </View>
                        ))}


                </ScrollView>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius: 3,
        borderBottomWidth: 1,
        width: 400,
        height: 35,
        //marginLeft:15,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 5,

    },
    inputs: {
        height: 55,
        width: 260,
        marginLeft: 0,
        borderBottomColor: '#FFFFFF',
        flex: 1,

    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
        marginTop: 6
    },
    cardImage: {
        height: '100%',
        width: '99%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#d73c5e00',
        marginRight: 10,
    },
    cardImageALLCourses: {
        height: 115,
        width: 115,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10
    },
    instructorcardImage: {
        height: 150,
        width: '100%',
        borderRadius: 4,
        marginTop: 5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255,255,255,.8)',
        height: 110,
        width: 250,
        marginTop: 60,
        borderRadius: 2
    },
    category: {
        height: 45,
        width: '95%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        //  backgroundColor:'red',
        marginTop: 15,
        marginLeft: 5
    },
    category2: {
        height: 45,
        width: '95%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        //  backgroundColor:'red',

        marginLeft: 5
    },
    categorySub: {
        height: 30,
        width: '80%',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    buttonContainer: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '23%',
        borderRadius: 30,
        marginRight: 5,
        borderColor: '#d73c5e',
        borderWidth: 1
    },
    buttonContainerSub: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '23%',
        borderRadius: 30,
        marginRight: 5,
        borderColor: '#d73c5e',
        borderWidth: 1
    },
    inputIcon: {
        width: 18,
        height: 18,
        marginLeft: 1,

        marginRight: 3,
        justifyContent: 'center'
    },
    cardshadow: {
        marginRight: 12,
        borderColor: '#ddd',
        borderTopWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        borderWidth: 3,
        borderRadius: 8,
        marginLeft: 10
    }, loginText: {
        fontSize: 12
    },
    orLine: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1,
        marginTop: 8,
        width: '100%'
    }

});