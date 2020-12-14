/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, Image,
  Text,
  StatusBar,
  TextInput,
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
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from 'react-native-splash-screen';
import SplashStep from './Screen/SplashStep1';
import Login from './Screen/Login';
import Register from './Screen/Registration';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Screen/Home';
import CourseDetails from './Screen/CourseDetails';
import TrainingDetailsPostBooking from './Screen/TrainingDetailsPostBooking';
import InstructorProfile from './Screen/InstructorProfile';
import Search from './Screen/Search';
import Searchresult from './Screen/Searchresult';
import TrainingDetails from './Screen/TrainingDetails';

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardNavigator: Home,

  },
  {
    defaultNavigationOptions: ({ navigation }) => {

      return {
        headerLeft: (
          <View style={{ justifyContent: 'center', height: 35 }}>
            <Image source={require('./../icon/menu-icon.png')} style={styles.image} />
          </View>
        ),
        headerRight: (
          <View style={{ justifyContent: 'center', height: 35, right: 20 }} onStartShouldSetResponder={
            () => navigation.navigate('Search')
          }>
            <Image source={require('./../icon/search-icon.png')} style={styles.image} />
          </View>
        ),
      };
    }
  }  ,
);
const DashboardStackNavigato2r = createStackNavigator(
  {
    DashboardNavigator2: InstructorProfile,

  },
  {
    defaultNavigationOptions: ({ navigation }) => {

      return {
        headerLeft: (
          <View style={{ justifyContent: 'center', height: 35 }}>
            <Image source={require('./../icon/menu-icon.png')} style={styles.image} />
          </View>
        ),
        headerRight: (
          <View style={{ justifyContent: 'center', height: 35, right: 20 }} onStartShouldSetResponder={
            () => navigation.navigate('Search')
          }>
            <Image source={require('./../icon/search-icon.png')} style={styles.image} />
          </View>
        ),
      };
    }
  }  ,
);

const DashboardStackNavigator2 = createStackNavigator(
  {
    DashboardNavigator3: TrainingDetailsPostBooking,

  },
  {
    defaultNavigationOptions: ({ navigation }) => {

      return {
        headerLeft: (
          <View style={{ justifyContent: 'center', height: 35 }}>
            <Image source={require('./../icon/menu-icon.png')} style={styles.image} />
          </View>
        ),
        headerRight: (
          <View style={{ justifyContent: 'center', height: 35, right: 20 }} onStartShouldSetResponder={
            () => navigation.navigate('Search')
          }>
            <Image source={require('./../icon/search-icon.png')} style={styles.image} />
          </View>
        ),
      };
    }
  }  ,
);

const DashboardStackNavigator3 = createStackNavigator(
  {
    DashboardNavigator4: TrainingDetails,

  },
  {
    defaultNavigationOptions: ({ navigation }) => {

      return {
        headerLeft: (
          <View style={{ justifyContent: 'center', height: 35 }}>
            <Image source={require('./../icon/menu-icon.png')} style={styles.image} />
          </View>
        ),
        headerRight: (
          <View style={{ justifyContent: 'center', height: 35, right: 20 }} onStartShouldSetResponder={
            () => navigation.navigate('Search')
          }>
            <Image source={require('./../icon/search-icon.png')} style={styles.image} />
          </View>
        ),
      };
    }
  }  ,
);

const SideMenu = createDrawerNavigator(
  {
    Home: DashboardStackNavigator,
    //  'Log out': Logout,
  },
);
SideMenu.navigationOptions = {
  headerShown: false,
};
const SideMenu2 = createDrawerNavigator(
  {
    InstructorProfile: DashboardStackNavigato2r,
    //  'Log out': Logout,
  },
);
SideMenu2.navigationOptions = {
  headerShown: false,
};
const SideMenu3 = createDrawerNavigator(
  {
    TrainingDetailsPostBooking: DashboardStackNavigator2,
    //  'Log out': Logout,
  },
);
SideMenu3.navigationOptions = {
  headerShown: false,
};
const SideMenu4 = createDrawerNavigator(
  {
    TrainingDetails: DashboardStackNavigator3,
    //  'Log out': Logout,
  },
);
SideMenu4.navigationOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator({
  SplashStep: {
    screen: SplashStep,
    navigationOptions: {
      header: null //this will hide the header
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  Home: SideMenu,
  CourseDetails: {
    screen: CourseDetails,
    navigationOptions: {
      title: '',
      headerRight: (
        <View style={{
          borderColor: '#bab9b3',
          backgroundColor: '#f4efe9',
          borderRadius: 5,
          borderBottomWidth: 1,
          borderWidth: 1,
          width: 320,
          marginRight: 15,
          height: 40,
          //marginLeft:15,
          flexDirection: 'row',
          alignItems: 'center',

        }}>

          <TextInput style={{
            height: 55,
            width: '100%',
            marginLeft: 0,
            paddingLeft: 10,
            borderBottomColor: '#FFFFFF',
            flex: 1,
          }}
            placeholder="Search"

            underlineColorAndroid='transparent'
          />
          <Icon name='md-search' size={20} style={{
            width: 30,
            height: 30,
            marginLeft: 15,
            justifyContent: 'center',
            marginTop: 6
          }} />
        </View>
      ),
    }
  },
  TrainingDetailsPostBooking: SideMenu3,
  TrainingDetails: SideMenu4,
  InstructorProfile: SideMenu2,
  Search: {
    screen: Search,
    navigationOptions: {
      title: '',
      headerRight: (
        <View style={{
          borderColor: '#bab9b3',
          backgroundColor: '#f4efe9',
          borderRadius: 5,
          borderBottomWidth: 1,
          borderWidth: 1,
          width: 320,
          marginRight: 15,
          height: 40,
          //marginLeft:15,
          flexDirection: 'row',
          alignItems: 'center',

        }}>

          <TextInput style={{
            height: 55,
            width: '100%',
            marginLeft: 0,
            paddingLeft: 10,
            borderBottomColor: '#FFFFFF',
            flex: 1,
          }}
            placeholder="Search"

            underlineColorAndroid='transparent'
          />
          <Icon name='md-search' size={20} style={{
            width: 30,
            height: 30,
            marginLeft: 15,
            justifyContent: 'center',
            marginTop: 6
          }} />
        </View>
      ),
    }
  },
  Searchresult: {
    screen: Searchresult,
    navigationOptions: {
      title: '',
      headerRight: (
        <View style={{
          borderColor: '#bab9b3',
          backgroundColor: '#f4efe9',
          borderRadius: 5,
          borderBottomWidth: 1,
          borderWidth: 1,
          width: 320,
          marginRight: 15,
          height: 40,
          //marginLeft:15,
          flexDirection: 'row',
          alignItems: 'center',

        }}>

          <TextInput style={{
            height: 55,
            width: '100%',
            marginLeft: 0,
            paddingLeft: 10,
            borderBottomColor: '#FFFFFF',
            flex: 1,
          }}
            placeholder="Photoshop"

            underlineColorAndroid='transparent'
          />
          <Icon name='md-search' size={20} style={{
            width: 30,
            height: 30,
            marginLeft: 15,
            justifyContent: 'center',
            marginTop: 6
          }} />
        </View>
      ),
    }
  },
})

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    SplashScreen.hide();

  }
  render() {

    return <AppContainer />;
  }
}

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
