import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image, ScrollView, Alert
} from 'react-native';
//import { Card } from "react-native-elements";
import Card from './Components/Card'
import CardSection from './Components/CardSection'
import { AuthContext } from '../../Context/context'
import { DatePicker, CheckBox } from 'native-base';
import Users from '../../model/users';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    found:'',
    check_textInputChange: false,
    secureTextEntry: true,
   // isValidUser: true,
   // isValidPassword: true,
  });
  const { signIn } = React.useContext(AuthContext);
  // rememberMe = () => {
  //   this.setState({ checkYes: true })

  // };
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      //  isValidUser: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      //  isValidUser: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
       // isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
       // isValidPassword: false
      });
    }
  }
  // const updateSecureTextEntry = () => {
  //   setData({
  //       ...data,
  //       secureTextEntry: !data.secureTextEntry
  //   });
  // }
  // const handleValidUser = (val) => {
  //   if( val.trim().length >= 4 ) {
  //       setData({
  //           ...data,
  //           isValidUser: true
  //       });
  //   } else {
  //       setData({
  //           ...data,
  //           isValidUser: false
  //       });
  //   }
  // }
  // const updateSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     secureTextEntry: !data.secureTextEntry,
  //   });
  // };
  //   const loginHandle = (userName, password) => {

  //     const foundUser = Users.filter( item => {
  //         return userName == item.username && password == item.password;
  //     } );

  //     if ( data.username.length == 0 || data.password.length == 0 ) {
  //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
  //             {text: 'Okay'}
  //         ]);
  //         return;
  //     }

  //     if ( foundUser.length == 0 ) {
  //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
  //             {text: 'Okay'}
  //         ]);
  //         return;
  //     }
  //     signIn(foundUser);
  // }
  const foundUser = () => {
   // alert(data.email+data.password)
    axios.defaults.baseURL = 'http://phpwebdevelopmentservices.com/development/appleskool_code/api';
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';

    axios
      .post('/login', {
        "jsonrpc": "2.0",
        "params": {
            "email":data.email,
            "password":data.password,
            "device_id":"1"
        }
    })
      .then(
        response => {
         // console.log(response);
       //  alert(JSON.stringify(response.data));
          // setData({
          //   ...data,
          //   found: [
          //     {
          //       id: 1,
          //       email: data.email,
          //       // username: data.username,
          //       password: data.password,

          //       // userToken: response.data,
          //     },
          //   ],
          // });
          // global.email = data.username;
          // global.password = data.password;
          global.userToken = response.data.result.userdata.id;
           // alert(JSON.stringify(response.data.result.userdata.id))
          // axios
          //   .get(
          //     'http://3.18.201.246/magento/index.php/rest/default/V1/customers/me',
          //     {
          //       headers: {
          //         Authorization: `Bearer ${response.data}`,
          //       },
          //     },
          //   )
          //   .then(me => {
          //     global.Me = me.data.firstname + me.data.lastname;
          //   });
          signIn(data.found);
          //signIn(data.foundUser);
        },
        error => {
          Alert.alert('Enter valid details!! ');
          console.log(error);
        },
      );
  };

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
              placeholder="Email"
              autoCapitalize="none"
              // keyboardType="email-address"
              onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../icon/password-icon.png')} size={15} style={styles.inputIconPlace} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              // secureTextEntry={true}
              onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 2, width: 320, marginTop: 15 }}>

            <CheckBox style={{ backgroundColor: '#d73c5e', marginLeft: -14 }} checked={data.checked} color={data.checked == true ? '#d73c5e' : '#ffff'}
              onPress={() => setData({ checked: !data.checked })} />
            <Text style={{ marginRight: 50, marginLeft: -35, fontSize: 13, marginBottom: 2, fontFamily: 'roboto-regular', }}>Remember me</Text>

            <TouchableOpacity style={{}} onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={{ fontFamily: 'roboto-regular', fontSize: 13 }}>Forgot password!</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => { foundUser(data.email, data.password) }}
          >
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
          <TouchableOpacity style={[styles.buttonContainerBottom,]} onPress={() => navigation.navigate('Registration')}>
            <Text style={{}}>Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign Up</Text> </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
}
export default Login;
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