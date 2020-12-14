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
import { Card } from "react-native-elements";
const screenWidth = Math.round(Dimensions.get('window').width);

export default class HomePage extends Component {
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
    }


  }


  render() {
    return (


      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', marginTop: 5, }}>
            <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
              {this.state.images.map((item, key) => {
                return (
                  <View key={key} >
                    <TouchableOpacity style={{ width: '95%', height: 175, marginTop: 2, marginRight: 10 }} >
                      <View style={{ justifyContent: 'center' }}>
                        <View style={{ height: 175, width: 315, justifyContent: 'center' }}>
                          <Image source={item} style={styles.cardImage} />
                          <View style={styles.overlay} >
                            <Text style={styles.banner1stText}>Learn on your schedule</Text>
                            <Text style={styles.banner2stText}>Study any topic,anytime. Explore thousands of Trainings starting at INR 455 each.</Text>
                            <Text style={styles.banner3stText}>Get Started Now</Text>

                          </View>

                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </ScrollView>
          </View>


          <View style={styles.category}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Categories</Text>
            <Text style={{ fontWeight: '100', marginTop: 5, marginLeft: 20 }}>See all</Text>

          </View>
          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../icon/it_software.png')} size={10} style={styles.inputIcon} />
                <Text style={styles.loginText}>IT and Software</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../icon/marketing.png')} size={10} style={styles.inputIcon} />
                <Text style={styles.loginText}>Marketing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} >
                <Image source={require('../../icon/language.png')} size={10} style={styles.inputIcon} />
                <Text style={styles.loginText}>Language</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.category}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Featured Training</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 5 }} />
            </View>

            <Text style={{ fontWeight: '100', marginTop: 5, }}>See all</Text>
          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.traing.map((item, key) => (
                <View key={key} >
                  <TouchableOpacity style={{ width: 230, height: 350, marginTop: 2, marginLeft: 10, marginRight: 17, }} onPress={() => this.props.navigation.navigate('TrainingDetailsPostBooking')}>
                    <View >
                      <View style={{ height: 200, }}>
                        <Image source={item} style={styles.cardImage2} />
                      </View>
                      <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold' }}>Photography - Become a better Photographer - Part I</Text>
                      <Text style={{ marginLeft: 2 }}>Prakash Sarkar</Text>
                      <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 50, height: 20, borderRadius: 2, flexDirection: 'row', }}>
                          <Icon name='md-star' size={13} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                          <Text style={{ color: 'white', fontSize: 11 }}>5.0</Text>
                        </View>
                        <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, marginTop: 3, fontWeight: 'bold' }}>{'\u20B9'} 500/-</Text>
                        <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 3, paddingLeft: 20, textDecorationStyle: 'solid', fontSize: 15, }}>
                          {'\u20B9'} 6850/-
                        </Text>

                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>

          <View style={styles.category}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Featured Instructor Profile</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 3, marginTop: 5, marginLeft: 5 }} />
            </View>
            <Text style={{ fontWeight: '100', marginTop: 5, marginLeft: 10 }}>See all</Text>
          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.instructorImage.map((item, key) => (
                <View key={key} >
                  <Card style={{ width: 200, height: 330, marginTop: 2, marginRight: 2, marginBottom: 2 }} >
                    <View onStartShouldSetResponder={
                      () => this.props.navigation.navigate('InstructorProfile')
                    } >
                      <View style={{ height: 150, }}>
                        <Image source={item} style={styles.instructorcardImage} />
                      </View>
                      <View style={{}}>
                        <Text style={{ margin: 4, fontSize: 20, fontWeight: 'bold', marginTop: 6 }}>Abijit Mukharjee</Text>
                        <Text style={{ marginLeft: 6 }}>CSS, HTML</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5, width: 170, height: 20, borderRadius: 2, }}>
                          <Icon name='md-star' size={14} style={{ marginTop: 2, color: '#5e10b1', marginRight: 5 }} />
                          <Text style={{ color: '#5e10b1', marginRight: 5 }}>5.0</Text>
                          <Text style={{}}>Instructor Rating</Text>
                        </View>
                        <Text style={{ marginLeft: 6 }}>123,457 Students</Text>
                        <Text style={{ marginLeft: 6 }}>6 Training</Text>
                        <View style={{ borderBottomColor: '#e9e9e9', borderBottomWidth: 1, marginTop: 10, width: '100%' }} />

                      </View>
                      <View style={{ flexDirection: 'row', }}>

                        <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, marginTop: 8, marginLeft: 6, fontWeight: 'bold' }}>{'\u20B9'}500/-</Text>
                        <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginLeft: 4, marginTop: 8, textDecorationStyle: 'solid', fontSize: 15, }}>
                          {'\u20B9'}6850/-
                        </Text>
                        <TouchableOpacity style={{ width: 80, height: 23, backgroundColor: '#d73c5e', marginTop: 8, marginLeft: 8, alignContent: 'center', borderRadius: 5, borderColor: "#d73c5e", borderWidth: 1, paddingLeft: 2 }}>
                          <Text style={{ color: 'white', textAlign: 'center', fontSize: 11, marginTop: 3 }}>Read More</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                </View>
              ))
            }
          </ScrollView>

          <View style={styles.category}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Top courses in design</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 5 }} />
            </View>

            <Text style={{ fontWeight: '100', marginTop: 5, }}>See all</Text>
          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.traing.map((item, key) => (
                <View key={key} >
                  <TouchableOpacity style={{ width: 230, height: 350, marginTop: 2, marginLeft: 10, marginRight: 17, }} onPress={() => this.props.navigation.navigate('CourseDetails')}>
                    <View >
                      <View style={{ height: 200, }}>
                        <Image source={item} style={styles.cardImage2} />
                      </View>
                      <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold' }}>Photography - Become a better Photographer - Part I</Text>
                      <Text style={{ marginLeft: 2 }}>Prakash Sarkar</Text>
                      <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 50, height: 20, borderRadius: 2, flexDirection: 'row', }}>
                          <Icon name='md-star' size={13} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                          <Text style={{ color: 'white', fontSize: 11 }}>5.0</Text>
                        </View>
                        <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, marginTop: 3, fontWeight: 'bold' }}>{'\u20B9'} 500/-</Text>
                        <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 3, paddingLeft: 20, textDecorationStyle: 'solid', fontSize: 15, }}>
                          {'\u20B9'} 6850/-
                        </Text>

                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>

          <View style={{ alignItems: 'center', textAlign: 'center', }}>

            <Image source={require('../../icon/post-banner.png')} style={{ width: '100%', height: 140, alignContent: 'center', alignItems: 'center' }} />

            <Text style={{ position: 'absolute', margin: 10, fontSize: 17, fontWeight: 'bold', marginTop: 25, marginRight: 20, color: 'white', }}>Get personal learning recommendations </Text>
            <Text style={{
              position: 'absolute', margin: 15, fontSize: 12, marginTop: 50,
              textAlign: 'center', color: 'white',
            }}>Answer a few questions for your top picks</Text>

            <Text style={{
              position: 'absolute', margin: 10, fontSize: 13, marginTop: 78, borderRadius: 3,
              textAlign: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#82b46e', padding: 7
            }}>Get Started Now</Text>

          </View>


          <View style={styles.category}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Students are viewing</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 5 }} />
            </View>

            <Text style={{ fontWeight: '100', marginTop: 5, }}>See all</Text>
          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.traing.map((item, key) => (
                <View key={key} >
                  <TouchableOpacity style={{ width: 230, height: 350, marginTop: 2, marginLeft: 10, marginRight: 17, }} onPress={() => this.props.navigation.navigate('TrainingDetailsPostBooking')}>
                    <View >
                      <View style={{ height: 200, }}>
                        <Image source={item} style={styles.cardImage2} />
                      </View>
                      <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold' }}>Photography - Become a better Photographer - Part I</Text>
                      <Text style={{ marginLeft: 2 }}>Prakash Sarkar</Text>
                      <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 50, height: 20, borderRadius: 2, flexDirection: 'row', }}>
                          <Icon name='md-star' size={13} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                          <Text style={{ color: 'white', fontSize: 11 }}>5.0</Text>
                        </View>
                        <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, marginTop: 3, fontWeight: 'bold' }}>{'\u20B9'} 500/-</Text>
                        <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 3, paddingLeft: 20, textDecorationStyle: 'solid', fontSize: 15, }}>
                          {'\u20B9'} 6850/-
                        </Text>

                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>

          <View style={styles.category2}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Top Courses in Development</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 5 }} />
            </View>

            <Text style={{ fontWeight: '100', marginTop: 5, }}>See all</Text>
          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.traing.map((item, key) => (
                <View key={key} >
                  <TouchableOpacity style={{ width: 230, height: 350, marginTop: 2, marginLeft: 10, marginRight: 17, }} onPress={() => this.props.navigation.navigate('TrainingDetailsPostBooking')}>
                    <View >
                      <View style={{ height: 200, }}>
                        <Image source={item} style={styles.cardImage2} />
                      </View>
                      <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold' }}>Photography - Become a better Photographer - Part I</Text>
                      <Text style={{ marginLeft: 2 }}>Prakash Sarkar</Text>
                      <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 50, height: 20, borderRadius: 2, flexDirection: 'row', }}>
                          <Icon name='md-star' size={13} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                          <Text style={{ color: 'white', fontSize: 11 }}>5.0</Text>
                        </View>
                        <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, marginTop: 3, fontWeight: 'bold' }}>{'\u20B9'} 500/-</Text>
                        <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 3, paddingLeft: 20, textDecorationStyle: 'solid', fontSize: 15, }}>
                          {'\u20B9'} 6850/-
                        </Text>

                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>
        </ScrollView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //justifyContent: 'center',
    //alignItems: 'center',
    // width:Math.round(Dimensions.get('window').width),

  },
  cardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d73c5e00',
    marginRight: 15,
  },
  cardImage2: {
    height: '100%',
    width: '99%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d73c5e00',
    marginRight: 15,
  },
  banner1stText: {
    position: 'absolute',
    margin: 7,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'roboto-regular',
    marginLeft: 12
  },
  banner2stText: {
    position: 'absolute',
    margin: 7,
    fontSize: 11,
    marginTop: 36,
    marginRight: 10,
    color: '#6c6763',
    fontFamily: 'roboto-light',
    marginLeft: 12
  },
  banner3stText: {
    // position: 'absolute', 
    // marginTop:80,

    fontSize: 13,

    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#d73c5e',
    marginTop: 80,
    width: '50%',
    height: 28,
    marginLeft: 12,
    paddingTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d73c5e',
    fontFamily: 'roboto-bold',
  },
  instructorcardImage: {
    height: 150,
    width: '100%',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 15
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,.8)',
    height: '70%',
    width: '80%',
    alignContent: 'center',
    alignItems: 'baseline',
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 40,
    marginBottom: 10
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
  buttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 15,
    borderColor: '#d73c5e',
    borderWidth: 1
  },

  inputIcon: {
    width: 25,
    height: 25,
    marginLeft: 1,
    marginTop: 4,
    marginRight: 2,
    justifyContent: 'center'
  },
  cardshadow: {
    marginRight: 12,
    // borderTopWidth: 0,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    //  borderWidth: 1,
    borderRadius: 3,
    marginLeft: 10
  }

});