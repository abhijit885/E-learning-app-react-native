import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image, ScrollView,
} from 'react-native';

export default class InitialPage extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 3000);
  }
  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <Image source={require('../../icon/splash-background.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        <View style={styles.SplashScreen_ChildView}>

          <Image source={require('../../icon/logo-white.png')}
            style={{ width: '50%', height: '90%', resizeMode: 'contain' }} />
          <Image source={require('../../icon/loader.png')}
            style={{ width: '15%', height: '10%', resizeMode: 'contain' }} />
        </View>
      </View>)
    return (


      <View style={styles.container}>
        <Image source={require('../../icon/login-background.png')} style={styles.backgroundImage} />
        <View style={{ height: '60%', width: '88%', marginTop: 60, margin: 20, alignItems: 'center', justifyContent: 'center', }}>

          <Image source={require('../../icon/logo.png')} style={styles.image} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.loginText}>CREATE AN ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: "center",
    position: 'absolute',
  },
  SplashScreen_RootView:
  {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#db4f6e',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView:
  {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,

  },
  image: {
    height: 70,
    width: 250,
    // width: '100%',
    // height:90,
    // marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    borderRadius: 3,

  },
  loginButton: {
    backgroundColor: "#d73c5e",
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold'
  },
});