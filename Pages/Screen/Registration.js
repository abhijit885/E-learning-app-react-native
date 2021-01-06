import React from 'react';
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
import axios from 'axios';

const RegistrationPage = ({ navigation }) => {
  // const [checked, setChecked] = React.useState({
  //   checkeds: false

  // });
  const [data, setData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    checked: true
  })
  //   const [data, setData] = React.useState({
  //     name: '',
  //     isValiedfirstname: true,
  //     email: '',
  //     isValiedEmail: true,
  //     isValiedEmailicon: null,
  //     password: '',
  //     isValiedPassword: true,
  //     check_textInputChange: false,
  //     secureTextEntry: true,
  //     confirm_secureTextEntry: true,
  // });
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //     checked: false,
  //   }
  // }
  // rememberMe = () => {
  //   this.setState({ checkYes: true })
  // };

  //   const textName = (val) => {
  //     if (val.length !== 0) {
  //         setData({
  //             ...data,
  //             firstname: val,
  //             isValiedfirstname: true,
  //         });
  //     } else {
  //         setData({
  //             ...data,
  //             isValiedfirstname: false,
  //         });
  //     }

  //     const textEmail = (val) => {
  //       if (val.length !== 0) {
  //           setData({
  //               ...data,
  //               email: val,
  //               isValiedEmailicon: true,
  //           });
  //       } else {
  //           setData({
  //               ...data,
  //               isValiedEmail: null,
  //               isValiedEmailicon: null,
  //           });
  //       }
  //   }

  //   const handlePasswordChange = (val) => {
  //     if (val.length !== 0) {
  //         setData({
  //             ...data,
  //             password: val,
  //             isValiedPassword: true,
  //         });
  //     } else {
  //         setData({
  //             ...data,
  //             isValiedPassword: false,
  //         });
  //     }
  // }
  const registerUser = () => {
    alert(data.firstname+data.lastname)
    if (data.firstname === '' && data.lastname === '' && data.phonenumber === '' && data.email === '' && data.password === '' && data.confirm_password === '') {
      alert("Please Enter your Details!")
    } else {
      axios.defaults.baseURL = 'http://phpwebdevelopmentservices.com/development/appleskool_code/api';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
      axios.post('/register', {
        "customer": {
          "jsonrpc": "2.0",
          "params": {
            "fname": data.firstname,
            "lname": data.lastname,
            "email": data.email,
            "password": data.password,
            "phone_no": data.phonenumber,
            "device_type": "1",
            "interest_skill": {
              "0": "22",
              "1": "11"
            }
          }
        },
        "password": data.password
      })
        .then((response) => {
          alert(JSON.stringify(response.data));
          alert('Your account has been created', [
            { text: 'Okay' }
          ]);
          navigation.goBack()
        }, (error) => {
          alert('Enter Valid Details', [
            { text: 'Okay' }
          ]);
          console.log(error);
        });
    }
  }
  const textFirstName = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        firstname: val,
        isValiedfirstname: true,
      });
    } else {
      setData({
        ...data,
        isValiedfirstname: false,
      });
    }
  }

  const textLastName = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        lastname: val,
        isValiedlastname: true,
      });
    } else {
      setData({
        ...data,
        isValiedlastname: false,
      });
    }
  }
  const textEmail = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        isValiedEmailicon: true,
      });
    } else {
      setData({
        ...data,
        isValiedEmail: null,
        isValiedEmailicon: null,
      });
    }
  }
  const textnumber = (val) => {
    if (val.length !== 0) {
        setData({
            ...data,
            phonenumber: val,
            isValiedphonenumber: true,
        });
    } else {
        setData({
            ...data,
            isValiedphonenumber: null,
        });
    }
}
  const handlePasswordChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        password: val,
        isValiedPassword: true,
      });
    } else {
      setData({
        ...data,
        isValiedPassword: false,
      });
    }
  }
  const handleConfirmPasswordChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        confirm_password: val,
        isValiedConfirmpassword: true,
      });
    } else {
      setData({
        ...data,
        isValiedConfirmpassword: false,
      });
    }
  }
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
              placeholder="First Name"
              keyboardType="Name"
              autoCapitalize="none"
            onChangeText={(val) => textFirstName(val)} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/name-icon.png')} size={20} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Last Name"
              keyboardType="Name"
              autoCapitalize="none"
            onChangeText={(val) => textLastName(val)} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/email-icon.png')} size={20} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(val) => textEmail(val)} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/email-icon.png')} size={20} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Phone No."
              keyboardType="email-address"
            onChangeText={(val) => textnumber(val)} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/password-icon.png')} size={20} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
            onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/password-icon.png')} size={20} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Confirm Password"
              autoCapitalize="none"
              secureTextEntry={true}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', right: 10, width: 320, marginTop: 20, }}>
            {/* <CheckBox style={{ backgroundColor: '#d73c5e', marginRight: 18, marginTop: 5 }} checkeds={checked.checkeds} color={checked.checkeds == true ? '#d73c5e' : '#ffff'}
              onPress={() => setChecked({ checkeds: !checked.checkeds })} /> */}
            <CheckBox style={{ backgroundColor: '#d73c5e', marginRight: 18, marginTop: 5 }} checked={data.checked} color={data.checked == true ? '#d73c5e' : '#ffff'}
              onPress={() => setData({ checked: !data.checked })} />
            <View style={styles.checkboxtext}>
              <Text style={styles.privacy}>By creating an account, you agree that you have read and accepted our <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms of Service </Text> and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Privacy Policy</Text> </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}  //onPress={() => navigation.navigate('RegistrationVerifecationOTP')}
            onPress={() => registerUser()}
          >
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
          <TouchableOpacity style={styles.buttonContainerBottom} onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontFamily: 'roboto-regular', }}>Already have an account? <Text style={{ fontWeight: 'bold', fontFamily: 'roboto-regular', }}>Sign in</Text> </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default RegistrationPage;

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