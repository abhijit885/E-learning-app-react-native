import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from "react-native-elements";

const TrainingDetailsPostBookingPage = ({ navigation }) => {
  const [subcategory, setSubcategory] = React.useState([
    { id: 0, name: 'Rabin Manna', data: '1,456', img: require('../../icon/instructor2.png') },
    { id: 1, name: 'Rabin Manna', data: '10 Years', img: require('../../icon/instructor2.png') },
    { id: 2, name: 'Rabin Manna', data: '40 Hours', img: require('../../icon/instructor2.png') },
    { id: 3, name: 'Rabin Manna', data: '18', img: require('../../icon/instructor2.png') },
    { id: 4, name: 'Rabin Manna', data: '10', img: require('../../icon/instructor2.png') },
  ])
  const [topsearch, setTopsearch] = React.useState([
    { id: 0, name: 'What you will learn' }, { id: 1, name: 'Requirements' }, { id: 2, name: 'Course Schedule' }, { id: 3, name: 'Video' }, { id: 4, name: 'Documents' },
    { id: 5, name: 'Reference-link' },
  ])
  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   return {
  //     title: (<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
  //       <Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../icon/logo.png')} /></View>),
  //     headerMode: 'none',
  //     headerTitleStyle: {
  //       color: '#5e5f61',
  //       fontSize: 16,
  //     },
  //     headerStyle: {
  //       // backgroundColor: '#141f47',//'#04adb3',
  //       height: 50,
  //     },
  //     headerTitleAlign: 'center',
  //   }
  // }
  // constructor(props) {
  //   super(props);
  //  // global.Currentstate = this.props.navigation.state.routeName;
  //   this.state = {
  //     subcategory: [
  //       { id: 0, name: 'Rabin Manna', data: '1,456', img: require('../../icon/instructor2.png') },
  //       { id: 1, name: 'Rabin Manna', data: '10 Years', img: require('../../icon/instructor2.png') },
  //       { id: 2, name: 'Rabin Manna', data: '40 Hours', img: require('../../icon/instructor2.png') },
  //       { id: 3, name: 'Rabin Manna', data: '18', img: require('../../icon/instructor2.png') },
  //       { id: 4, name: 'Rabin Manna', data: '10', img: require('../../icon/instructor2.png') },
  //     ],
  //     topsearch: [
  //       { id: 0, name: 'What you will learn' }, { id: 1, name: 'Requirements' }, { id: 2, name: 'Course Schedule' }, { id: 3, name: 'Video' }, { id: 4, name: 'Documents' },
  //       { id: 5, name: 'Reference-link' },
  //     ],
  //   }
  // }
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
        <View style={{ marginTop: -70 }}>
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
            padding: 10,
            backgroundColor: "#faf9f9",
          }} >
            <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', width: '100%' }}>
              <Image source={require('../../icon/banner1.png')} style={{ width: '100%', height: 130, marginTop: 5, }} />
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: 13, paddingLeft: 4, paddingRight: 2, marginTop: 8, marginLeft: 6, fontWeight: 'bold' }}>{'\u20B9'}505</Text>
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
              <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('TrainingDetails')}>
                  <Text style={styles.loginText}>Book This Training</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={[styles.buttonContainer, styles.loginButton2]} >
                  <Text style={styles.loginText2}>Add To Cart</Text>
                </TouchableOpacity> */}
              </View>
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
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
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
            padding: 10,
            //paddingRight: 10,
            backgroundColor: "#faf9f9",
          }} >
            <View style={{ flexWrap: "wrap", flexDirection: 'column' }} numberOfLines={2}>
              {topsearch.map((item, key) => (
                <View key={key} style={{ flexWrap: "wrap", flexDirection: 'column' }}>
                  <TouchableOpacity style={styles.buttonContainerSub2}  >
                    <Text style={styles.loginText4}>{item.name}</Text>
                    <Image source={require('../../icon/right-arrow-angle.png')} style={{ paddingTop: 10, width: 15, height: 15, }} />

                  </TouchableOpacity>
                  <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#e9e9e9', width: '70%', marginLeft: 20, }}>________________________________________________</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', width: '85%', marginLeft: 20, marginRight: 15, marginTop: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5, fontFamily: 'roboto-bold' }}>Question Answer</Text>
          <Image source={require('../../icon/color-border.png')} style={{ width: '25%', marginLeft: 2, height: 4, marginTop: 5, }} />
          <Text style={{ fontSize: 14, marginLeft: 5, marginTop: 10, fontFamily: 'roboto-light', marginBottom: 10 }}>Lorem Ipsum dolor amet sit this is dummy text</Text>
          <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'column', marginRight: 5 }} numberOfLines={2}>
            {subcategory.map((item, key) => (
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={item.img} style={{ width: 60, height: 60, borderColor: '#d73b60', borderWidth: 2, borderRadius: 50 }} />
                  <View style={{ flexDirection: 'column', marginLeft: 15, }}>
                    <Text style={{ color: '#3c3b37', fontWeight: 'bold', fontSize: 17 }}>
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                      <Image source={require('../../icon/calendar-min.png')} style={{ width: 13, height: 13, marginRight: 10 }} />
                      <Text style={{ fontSize: 12 }}>20 sep,2020</Text>
                    </View>
                  </View>
                </View>
                <Text style={{ marginTop: 8, fontSize: 13, flexWrap: 'wrap', fontFamily: 'roboto-regular', }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                <Text style={{ fontFamily: 'roboto-bold', color: '#661eb5', fontSize: 14, marginBottom: 10, marginTop: 3 }}>read more+</Text>
                <Text style={{ fontStyle: 'italic', marginTop: 5, fontWeight: 'bold', color: '#e9e9e9', width: '70%' }}>_______________________________________________________</Text>
              </View>
            ))}
          </View>
        </View>
        {/* <View style={{ flexDirection: 'column', marginBottom: 20, width: '95%', marginLeft: 15, marginRight: 15, marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 5, fontFamily: 'roboto-bold' }}>Write your question/answer</Text>
            <TextInput style={styles.inputs}
            />
            <TouchableOpacity style={{
              height: 38, justifyContent: 'center', alignItems: 'center', width: '35%',
              padding: 5, marginLeft: 5,
              backgroundColor: '#d73c5e', borderRadius: 5
            }}>
              <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Post Comment</Text>
            </TouchableOpacity>
          </View> */}
      </ScrollView>
    </View >
  );
};
export default TrainingDetailsPostBookingPage;
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
    // height: 30,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
    //marginRight:20,
    //width: '100%',
    //borderRadius: 30,
    // padding: 5,
    //borderColor: 'white',
    //borderWidth: 1,
    //backgroundColor: '#8f00ff'
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

    marginLeft: -9,
    width: 300,
    marginTop: 10,
    borderRadius: 3,
    textAlign: 'center',
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
    // marginTop: 12,
    height: 30,
    width: '88%',
    backgroundColor: "#faf9f9",
    fontWeight: 'bold',
    fontFamily: 'roboto-bold'
  },
});