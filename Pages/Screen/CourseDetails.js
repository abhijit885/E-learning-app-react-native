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


          <View style={styles.categorySub}>
            <Image source={require('../../icon/header-icon-min.png')} style={{ width: 30, height: 30, marginLeft: 5, marginRight: 9 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 22, fontFamily: 'roboto-bold' }}>Health & Fitness</Text>
            {/* <Text style={{fontWeight:'100', marginTop:10, marginRight:10}}>See all</Text> */}

          </View>


          <View style={styles.category}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Featured Courses</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
            </View>

          </View>

          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.traing.map((item, key) => (
                <View key={key} >
                  <TouchableOpacity style={{ width: 250, height: 350, marginTop: 2, marginLeft: 10, marginRight: 17, }} >
                    <View >
                      <View style={{ height: 200, }}>
                        <Image source={item} style={styles.cardImage} />
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
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Popular Courses</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
            </View>

          </View>
          <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 5 }} numberOfLines={2}>
            {this.state.topicks.map((item, key) => (

              <TouchableOpacity style={styles.buttonContainer} key={key} >
                <Text style={styles.loginText}>{item.name}</Text>
              </TouchableOpacity>

            ))}
          </View>
          <View style={styles.category2}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Sub Categories</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
            </View>

          </View>
          <View style={{ flexWrap: "wrap", flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 5 }} numberOfLines={2}>
            {this.state.subcategory.map((item, key) => (
              <TouchableOpacity style={styles.buttonContainerSub} key={key} >
                <Image source={item.img} size={10} style={styles.inputIcon} />
                <Text style={styles.loginText}>{item.name}</Text>
              </TouchableOpacity>

            ))}
          </View>



          <View style={styles.category2}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Top Instructor Profile</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '45%', height: 4, marginTop: 5, marginLeft: 6 }} />
            </View>

          </View>
          <ScrollView style={{ margin: 2, }} showsHorizontalScrollIndicator={false} horizontal>
            {
              this.state.instructorImage.map((item, key) => (
                <View key={key}>
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



          <View style={styles.category2}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>All Courses</Text>
              <Image source={require('../../icon/color-border.png')} style={{ width: '55%', height: 4, marginTop: 5, marginLeft: 6 }} />
            </View>

          </View>
          {
            this.state.traing.map((item, key) => (
              <View key={key}  >
                <View style={{ flexDirection: 'row', marginTop: 15, margin: 5, borderBottomColor: 'gray', marginLeft: 15 }} >
                  <View style={{ flexDirection: 'column' }}>
                    <Image source={item} style={styles.cardImageALLCourses} />

                  </View>

                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={{ margin: 2, fontSize: 15, fontWeight: 'bold', fontFamily: 'roboto-bold', flexWrap: 'wrap', flexDirection: 'row', }}  >Photography - Become a better Photographer - Part I</Text>
                    <Text style={{}}>Prakash Sarkar</Text>
                    <View style={{ width: 100, borderRadius: 2, flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ backgroundColor: '#e6a000', alignItems: 'center', marginLeft: 2, marginTop: 5, width: 50, height: 20, borderRadius: 2, flexDirection: 'row', }}>
                        <Icon name='md-star' size={13} style={{ marginLeft: 4, color: 'white', marginRight: 5 }} />
                        <Text style={{ color: 'white', fontSize: 11 }}>5.0</Text>
                      </View>
                      <Text style={{ paddingLeft: 10, marginTop: 2, fontSize: 12 }}>Rating(4,500)</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                      <Text style={{ fontSize: 15, paddingLeft: 4, paddingRight: 2, fontWeight: 'bold', fontFamily: 'roboto-bold', marginTop: 5, }}>{'\u20B9'} 500/-</Text>
                      <Text style={{ color: '#988f8f', textDecorationLine: 'line-through', marginTop: 7, paddingLeft: 10, textDecorationStyle: 'solid', fontSize: 15, }}>
                        {'\u20B9'} 6850/-
                         </Text>

                    </View>
                  </View>

                </View>
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

});