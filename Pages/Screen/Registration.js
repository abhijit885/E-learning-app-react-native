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

export default class RegistrationPage extends Component {


  constructor(props) {
    super(props);
    global.Currentstate = this.props.navigation.state.routeName;
    this.state = {
      email: '',
      password: '',
      checked: false,
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
            <Text style={{ fontWeight: '400', fontSize: 25, width: 250, height: 40, fontFamily: 'roboto-bold', textAlign: 'center' }}>Create an account</Text>
            <Image source={require('../../icon/border.png')} style={{ width: '30%', height: 4, marginBottom: 10, marginTop: 5 }} />

          </View>
          <View style={styles.loginForm}>

            <View style={styles.inputContainer}>
              <Image source={require('../../icon/name-icon.png')} size={20} style={styles.inputIconPlace} />

              <TextInput style={styles.inputs}
                placeholder="Name"
                keyboardType="Name"

                onChangeText={(name) => this.setState({ name })} />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../../icon/email-icon.png')} size={20} style={styles.inputIconPlace} />

              <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"

                onChangeText={(name) => this.setState({ name })} />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../../icon/password-icon.png')} size={20} style={styles.inputIconPlace} />


              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}

                onChangeText={(password) => this.setState({ password })} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', right: 10, width: 320, marginTop: 20, }}>
              <CheckBox style={{ backgroundColor: '#d73c5e', marginRight: 18, marginTop: 5 }} checked={this.state.checked} color={this.state.checked == true ? '#d73c5e' : '#ffff'}
                onPress={() => this.setState({ checked: !this.state.checked })} />
              <View style={styles.checkboxtext}>
                <Text style={styles.privacy}>By creating an account, you agree that you have read and accepted our <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms of Service </Text> and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Privacy Policy</Text> </Text>
              </View>
            </View>


            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} >
              <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginBottom: 18 }}>
              <View style={styles.orLine} />
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold', marginRight: 8, marginLeft: 8 }}> OR </Text>
              <View style={styles.orLine} />
            </View>
            {/* <Text style={{fontStyle:'italic',marginBottom:12,fontWeight:'bold'}}>_____________________  OR  ____________________</Text> */}


            <Card>
              <CardSection>
                <Image source={require('../../icon/facebook.png')} size={20} style={styles.inputIcon} />
                <Text style={styles.loginTextFacebook}> Sign up with Facebook</Text>
              </CardSection>
            </Card>

            <Card>
              <CardSection>
                <Image source={require('../../icon/google.png')} size={20} style={styles.inputIcon} />
                <Text style={styles.loginTextFacebook, { marginRight: 12 }}> Sign up with Google</Text>
              </CardSection>
            </Card>


            <TouchableOpacity style={styles.buttonContainerBottom} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{ fontFamily: 'roboto-regular', }}>Already have an account? <Text style={{ fontWeight: 'bold', fontFamily: 'roboto-regular', }}>Sign in</Text> </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
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
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'roboto-regular',
  },
  loginTextFacebook: {
    fontWeight: '200',

    fontFamily: 'roboto-regular',
  },
  buttonContainerFacebook: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:8,
    width: 320,
    marginTop: 20,
    // borderColor: '#ddd',
    // borderTopWidth: 0,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    //  borderWidth: 1,
    borderRadius: 3,
  },
  buttonContainerBottom: {

    width: 320,
    height: 45,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
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
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center'
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
    justifyContent: 'center',

  },
  inputIcon: {
    width: 32,
    height: 32,
    marginLeft: 1,

    justifyContent: 'center'
  },
  privacy: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 15,
    textAlign: 'left',
    marginRight: 15,
    fontFamily: 'roboto-regular',
    justifyContent: 'center',
    fontSize: 11.8

  },
  checkboxtext: {
    marginRight: 15
  },
  orLine: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
    marginBottom: 8,
    width: '35%'
  }

});