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

//import { Card } from "react-native-elements";
import Card from './Components/Card'
import CardSection from './Components/CardSection'

import { DatePicker, CheckBox } from 'native-base';

export default class LoginPage extends Component {


  constructor(props) {
    super(props);
    global.Currentstate = this.props.navigation.state.routeName;
    this.state = {
      email: '',
      password: '',
      checked: false
    }


  }
  rememberMe = () => {
    this.setState({ checkYes: true })

  };

  render() {
    return (


      <View style={styles.container}>
        <Image source={require('../../icon/login-background.png')} style={styles.backgroundImage} />
        <ScrollView showsVerticalScrollIndicator={false}>


          <View style={{ marginTop: 50, width: '100%', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bo400ld', fontSize: 25, fontFamily: 'roboto-bold', }}>Sign In</Text>
            <Image source={require('../../icon/border.png')} style={{ width: '30%', height: 4, marginBottom: 10, marginTop: 5 }} />
            <Text style={{ fontWeight: '200', fontFamily: 'roboto-regular', }}>Fillup the below fields to access your account!</Text>
          </View>
          <View style={styles.loginForm}>

            <View style={styles.inputContainer}>
              <Image source={require('../../icon/name-icon.png')} size={15} style={styles.inputIconPlace} />

              <TextInput style={styles.inputs}
                placeholder="Name"
                keyboardType="email-address"

                onChangeText={(name) => this.setState({ name })} />
            </View>

            <View style={styles.inputContainer}>
              <Image source={require('../../icon/password-icon.png')} size={15} style={styles.inputIconPlace} />


              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}

                onChangeText={(password) => this.setState({ password })} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 2, width: 320, marginTop: 15 }}>
              <CheckBox style={{ backgroundColor: '#d73c5e', marginLeft: -14 }} checked={this.state.checked} color={this.state.checked == true ? '#d73c5e' : '#ffff'}
                onPress={() => this.setState({ checked: !this.state.checked })} />

              <Text style={{ marginRight: 50, marginLeft: -35, fontSize: 13, marginBottom: 2, fontFamily: 'roboto-regular', }}>Remember me</Text>
              <TouchableOpacity style={{}}
                onPress={() => this.props.navigation.navigate('ForgotPass')}>
                <Text style={{ fontFamily: 'roboto-regular', fontSize: 13 }}>Forgot password!</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.loginText}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginBottom: 18 }}>
              <View style={styles.orLine} />
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', marginRight: 10, marginLeft: 10, }}> OR </Text>
              <View style={styles.orLine} />
            </View>
            {/* <Text style={{fontStyle:'italic',marginBottom:12,}}>_____________________  OR  ____________________</Text> */}

            <Card >
              <CardSection>

                {/* <View style={[styles.buttonContainer2,]}> */}
                <Image source={require('../../icon/facebook.png')} size={20} style={styles.inputIcon} />
                <Text style={styles.loginTextFacebook}> Sign up with Facebook</Text>
                {/* </View> */}
              </CardSection>

            </Card>

            <Card >
              <CardSection>
                <Image source={require('../../icon/google.png')} size={20} style={styles.inputIcon} />
                <Text style={styles.loginTextFacebook, { marginRight: 12, }}> Sign up with Google</Text>
              </CardSection>

            </Card>

            <TouchableOpacity style={[styles.buttonContainerBottom,]} onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{}}>Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign Up</Text> </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View >
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
  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    width: 320,
    marginTop: 20,
    borderRadius: 3
  },
  buttonContainer2: {

    height: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:20,
    width: 290,
    padding: 10


  },
  loginButton: {
    backgroundColor: "#d73c5e",
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold'
  },
  loginTextFacebook: {

    textAlign: 'center',
    //marginTop:5,
    //paddingTop:5,
    fontFamily: 'roboto-regular',
  },
  buttonContainerFacebook: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:20,
    width: 320,
    marginTop: 20,
    //  borderColor: '#ddd',
    //  borderTopWidth: 0,
    //shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    shadowOpacity: 0.0,
    shadowRadius: 1.22,
    elevation: 3,
    //  borderWidth: 1,
    borderRadius: 3,
  },
  loginForm: {
    marginTop: 30,
    lineHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:'white'

  },
  inputContainer: {
    borderBottomWidth: 1,
    width: 320,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainerBottom: {

    width: 320,
    height: 50,
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  inputs: {
    height: 45,
    marginLeft: 10,
    borderBottomColor: '#3c3b37',
    flex: 1,
    marginBottom: 15,
    fontFamily: 'roboto-regular',
  },
  inputIconPlace: {
    marginBottom: 15,
    width: 20,
    height: 20,
    marginLeft: 1,
    justifyContent: 'center'
  },
  inputIcon: {
    width: 32,
    height: 32,
    marginLeft: 1,

    justifyContent: 'center'
  },
  orLine: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
    marginBottom: 8,
    width: '35%'
  }
});