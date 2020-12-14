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

export default class CourseDetailsPage extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {

        return {



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
            ],
            instructorImage: [
                require('../../icon/instructor1.png'),
                require('../../icon/instructor2.png'),
                require('../../icon/instructor3.png'),
            ],
            topsearch: [
                { id: 0, name: 'Java' }, { id: 1, name: 'Html' }, { id: 2, name: 'Sql' }, { id: 3, name: 'Wordpress' }, { id: 4, name: 'Php' },
                { id: 5, name: 'React' }, { id: 6, name: 'Meditation' },
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
                    <View style={styles.category2}>
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Top Searches</Text>
                            <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
                        </View>

                    </View>
                    <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 5 }} numberOfLines={2}>
                        {this.state.topsearch.map((item, key) => (

                            <TouchableOpacity style={styles.buttonContainer} key={key} >
                                <Text style={styles.loginText}>{item.name}</Text>
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={styles.category2}>
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Browse Categories</Text>
                            <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
                        </View>

                    </View>
                    <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'column', marginTop: 20, marginLeft: 10, marginRight: 5 }} numberOfLines={2}>
                        {this.state.subcategory.map((item, key) => (
                            <View key={key} style={{ flexWrap: "wrap", flexDirection: 'column', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.buttonContainerSub} onPress={() => this.props.navigation.navigate('Searchresult')} >
                                    <Image source={item.img} size={10} style={styles.inputIcon} />
                                    <Text style={styles.loginText2}>{item.name}</Text>
                                    <Image source={require('../../icon/right-arrow-angle.png')} style={{ width: 15, height: 15, marginLeft: 6 }} />

                                </TouchableOpacity>
                                <Text style={{ fontStyle: 'italic', marginTop: -15, fontWeight: 'bold', color: '#e9e9e9', width: '100%' }}>____________________________________________________</Text>
                            </View>
                        ))}
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
    },
    inputIcon: {
        width: 23,
        height: 23,
        marginRight: 15,
        justifyContent: 'center',
        marginTop: 6
    },
    buttonContainerSub: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        width: '95%',

        marginRight: 5,

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
    loginText: {
        fontSize: 12,



    },
    loginText2: {
        fontSize: 16,
        width: '80%',
        fontFamily: 'roboto-medium',

    },
    orLine: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1,
        marginBottom: 1,
        width: '100%'
    }
})