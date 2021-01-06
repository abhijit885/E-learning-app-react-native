/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, Image,
  Text,
  StatusBar,
  TextInput,Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import SplashScreen from 'react-native-splash-screen';
// import SplashStep from './Screen/SplashStep1';
// import Login from './Screen/Login';
// import Register from './Screen/Registration';

// import Home from './Screen/Home';
// import CourseDetails from './Screen/CourseDetails';
// import TrainingDetailsPostBooking from './Screen/TrainingDetailsPostBooking';
// import InstructorProfile from './Screen/InstructorProfile';
// import Search from './Screen/Search';
// import Searchresult from './Screen/Searchresult';
// import TrainingDetails from './Screen/TrainingDetails';
import { AuthContext } from '../Context/context'
import ManagerDrawerNavigator from './Screen/Components/ManagerDrawerNavigator'
import ManagerDrawerNavigator_without_login from './Screen/Components/ManagerDrawerNavigator_without_login'
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  //      HOOKS STATE
  // const[isLoding, setIsLoding] = React.useState(true);
  // const[useToken, setUseToken] = React.useState(true);

  //      REDUCER   initial STATE
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  //      CREAT REDUCER
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

//    UPDATE CURRENT STATETHROUGH REDUCER
const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    // const userToken = String(foundUser[0].userToken);
    // const userName = foundUser[0].username;
    const userToken = global.userToken;
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'LOGIN', token: global.userToken});
  },
  signOut: async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
  },
  signUp: () => {
    // setUserToken('fgkj');
    // setIsLoading(false);
  }
}), []);

useEffect(() => {
  setTimeout(async() => {
    // setIsLoading(false);
    let userToken;
    userToken = null;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }, 1000);
}, []);

if( loginState.isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}
    return(
      <AuthContext.Provider value={authContext}>
        { loginState.userToken !== null ? 
        <ManagerDrawerNavigator/> 


        :
        <ManagerDrawerNavigator_without_login/>

      }
      </AuthContext.Provider>
    )
}
export default App;

const styles = StyleSheet.create({

  image: {
    height: 30,
    width: 30,
    // borderRadius:20,
    padding: 10,
    marginLeft: 15,
    // borderColor:'#141f47',
    //  borderWidth:2
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
  }
});
