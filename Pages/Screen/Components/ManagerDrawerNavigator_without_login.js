import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
//import ManagerComponent from './ManagerDashboard'
//import SampleScreen from '../SampleScreen'
        //SPLASH SCREEN
// import SplashStep1 from '../SplashStep1';
//import RootStackScreen from '../RootStackScreen'
      //HOME PAGE
import Home from '../Home'
import InstructorProfile from '../InstructorProfile'
import Search from '../Search';
//import Searchresult from '../Searchresult';
//import TrainingDetails from '../TrainingDetails';
import CourseDetails from '../CourseDetails';
import TrainingDetailsPostBooking from '../TrainingDetailsPostBooking';
import Login from '../Login';
import Registration from '../Registration';
//         // EDIT PROFILE
// import ScreenCreateprofilebasicinformation from '../Components/ScreenCreateprofilebasicinformation';
// import ScreenCreatProfileSubjectSkill from '../Components/ScreenCreatProfileSubjectSkill';
// import ScreenCreatProfileAccountingInformation from '../Components/ScreenCreatProfileAccountingInformation';
// import Screencreateprofilebasicgetcertified from '../Components/Screencreateprofilebasicgetcertified';
// // import Createprofilebasicinformation from '../Createprofilebasicinformation';
// // import CreatProfileSubjectSkill from '../CreatProfileSubjectSkill';
// // import CreatProfileAccountInformation from '../CreatProfileAccountInformation';
// // import TrainingDetailsPostBookinga from '../TrainingDetailsPostBookinga';
//         //CREAT TRAINING
// import CreatTrainingBasicInformation from '../CreatTrainingBasicInformation';
// import CreatTrainingSchedule from '../CreatTrainingSchedule';
// import CreatTrainingRefarenceMaterial from '../CreatTrainingRefarenceMaterial';
//         //MY TRAINING
// import MyTraining from '../MyTraining';


import ExpandableViewSeparate_without_login from './ExpandableViewSeparate_without_login';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Shop = createStackNavigator();

function getExpandableView(props) {
  return (
    <ExpandableViewSeparate_without_login navObj={props.navigation} />
  );
};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {getExpandableView(props)}
      {/* <DrawerItem
          label="Help"
          onPress={() => Linking.openUrl('https://mywebsite.com/help')}
        /> */}
    </DrawerContentScrollView>
  );
}
function SPLASHSCREEN({ navigation }) {
  setTimeout(()=>{
    navigation.navigate('home1');
  },2000);
  return (
    <>
      <View style={styles.SplashScreen_RootView}>
        <Image source={require('../../../icon/splash-background.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        <View style={styles.SplashScreen_ChildView}>
          <Image source={require('../../../icon/logo-white.png')}
            style={{ width: '50%', height: '90%', resizeMode: 'contain' }} />
          <Image source={require('../../../icon/loader.png')}
            style={{ width: '15%', height: '10%', resizeMode: 'contain' }} />
        </View>
      </View>
      <Drawer.Screen name="HomeScreen" component={Home} />
    </>
  );
}
function HOMEDROWER({ navigation }) {
  return (
    <>
      <Shop.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#ff009a',
          headerTitle: <View><Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../../icon/logo.png')} /></View>,
          //  headerLeft: ()=> < NavBarImage/>,
          headerLeft: () => (
            // <Icon.Button name="ios-menu" size={25}
            //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.openDrawer()}></Icon.Button>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ justifyContent: 'center', height: 35 }} onPress={() => navigation.openDrawer()}>
                <Image source={require('../../../icon/menu-icon.png')} style={styles.image} ></Image>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            // <Icon.Button name="ios-search" size={25}
            //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.navigate('ProsidToPlaceOrder')}>
            //   <Text>{global.productCount}</Text>
            // </Icon.Button>
            <View style={{ justifyContent: 'center', borderRadius: 50, height: 35, marginRight: 20, marginTop: 6.8, flexDirection: 'row' }}>
              <TouchableOpacity>
                <View onStartShouldSetResponder={
                  () => navigation.navigate('Search')
                }>
                  <Image source={require('../../../icon/search-icon.png')} style={styles.image} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View onStartShouldSetResponder={
                  () => navigation.navigate('Login')
                }>
                  <Image source={require('../../../icon/instructor2.png')} style={{
                    height: 30,
                    width: 30,
                    // borderRadius:20,
                    padding: 10,
                    marginLeft: 15, borderRadius: 50
                  }} />
                </View>
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
        }}
      >
        {/* <Shop.Screen name="SplashStep1" component={SplashStep1} /> */}
        <Shop.Screen name="HomeScreen" component={Home} />
        <Shop.Screen name="InstructorProfile" component={InstructorProfile} />
        <Shop.Screen name="TrainingDetailsPostBooking" component={TrainingDetailsPostBooking} />
        <Shop.Screen name="Search" onStartShouldSetResponder={
          () => navigation.navigate('Search')
        } component={Search} />
        <Shop.Screen name="CourseDetails" component={CourseDetails} />
         <Shop.Screen name="Login" component={Login} />
        <Shop.Screen name="Registration" component={Registration} />
      </Shop.Navigator>
    </>
  );
}
// function PROFILEDROWER({ navigation }) {
//   return (
//     <>
//       <Shop.Navigator initialRouteName="ScreenCreateprofilebasicinformation"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#ffffff',
//           },
//           headerTintColor: '#ff009a',
//           headerTitle: <View><Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../../icon/logo.png')} /></View>,
//           //  headerLeft: ()=> < NavBarImage/>,
//           headerLeft: () => (
//             // <Icon.Button name="ios-menu" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.openDrawer()}></Icon.Button>
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <View style={{ justifyContent: 'center', height: 35 }} onPress={() => navigation.openDrawer()}>
//                 <Image source={require('../../../icon/menu-icon.png')} style={styles.image} ></Image>
//               </View>
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             // <Icon.Button name="ios-search" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.navigate('ProsidToPlaceOrder')}>
//             //   <Text>{global.productCount}</Text>
//             // </Icon.Button>
//             <View style={{ justifyContent: 'center', borderRadius: 50, height: 35, marginRight: 20, marginTop: 6.8, flexDirection: 'row' }}>
//               <TouchableOpacity>
//                 <View onStartShouldSetResponder={
//                   () => navigation.navigate('Search')
//                 }>

//                   <Image source={require('../../../icon/search-icon.png')} style={styles.image} />
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View >
//                   <Image source={require('../../../icon/instructor2.png')} style={{
//                     height: 30,
//                     width: 30,
//                     // borderRadius:20,
//                     padding: 10,
//                     marginLeft: 15, borderRadius: 50
//                   }} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ),
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             fontSize: 30,
//             fontWeight: 'bold'
//           },
//         }}
//       >
//         {/* <Shop.Screen name="HomeScreen" component={Home} /> */}
//         <Shop.Screen name="ScreenCreateprofilebasicinformation" component={ScreenCreateprofilebasicinformation} />
//         <Shop.Screen name="ScreenCreatProfileSubjectSkill" component={ScreenCreatProfileSubjectSkill} />
//         <Shop.Screen name="ScreenCreatProfileAccountingInformation" component={ScreenCreatProfileAccountingInformation} />
//         <Shop.Screen name="Screencreateprofilebasicgetcertified" component={Screencreateprofilebasicgetcertified} />

//         {/* <Shop.Screen name="TrainingDetailsPostBooking" component={TrainingDetailsPostBooking} />
//         <Shop.Screen name="Search" onStartShouldSetResponder={
//           () => navigation.navigate('Search')
//         } component={Search} />
//         <Shop.Screen name="CourseDetails" component={CourseDetails} /> */}
//       </Shop.Navigator>
//     </>
//   );
// }
// function CREATTRAININGDROWER({ navigation }) {
//   return (
//     <>
//       <Shop.Navigator initialRouteName="CreatTrainingBasicInformation"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#ffffff',
//           },
//           headerTintColor: '#ff009a',
//           headerTitle: <View><Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../../icon/logo.png')} /></View>,
//           //  headerLeft: ()=> < NavBarImage/>,
//           headerLeft: () => (
//             // <Icon.Button name="ios-menu" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.openDrawer()}></Icon.Button>
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <View style={{ justifyContent: 'center', height: 35 }} onPress={() => navigation.openDrawer()}>
//                 <Image source={require('../../../icon/menu-icon.png')} style={styles.image} ></Image>
//               </View>
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             // <Icon.Button name="ios-search" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.navigate('ProsidToPlaceOrder')}>
//             //   <Text>{global.productCount}</Text>
//             // </Icon.Button>
//             <View style={{ justifyContent: 'center', borderRadius: 50, height: 35, marginRight: 20, marginTop: 6.8, flexDirection: 'row' }}>
//               <TouchableOpacity>
//                 <View onStartShouldSetResponder={
//                   () => navigation.navigate('Search')
//                 }>
//                   <Image source={require('../../../icon/search-icon.png')} style={styles.image} />
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View >
//                   <Image source={require('../../../icon/instructor2.png')} style={{
//                     height: 30,
//                     width: 30,
//                     // borderRadius:20,
//                     padding: 10,
//                     marginLeft: 15, borderRadius: 50
//                   }} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ),
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             fontSize: 30,
//             fontWeight: 'bold'
//           },
//         }}
//       >
//         {/* <Shop.Screen name="HomeScreen" component={Home} /> */}
//         <Shop.Screen name="CreatTrainingBasicInformation" component={CreatTrainingBasicInformation} />
//         <Shop.Screen name="CreatTrainingSchedule" component={CreatTrainingSchedule} />
//         <Shop.Screen name="CreatTrainingRefarenceMaterial" component={CreatTrainingRefarenceMaterial} />
//         {/* <Shop.Screen name="TrainingDetailsPostBooking" component={TrainingDetailsPostBooking} />
//         <Shop.Screen name="Search" onStartShouldSetResponder={
//           () => navigation.navigate('Search')
//         } component={Search} />
//         <Shop.Screen name="CourseDetails" component={CourseDetails} /> */}
//       </Shop.Navigator>
//     </>
//   );
// }
// function MYTRAININGDROWER({ navigation }) {
//   return (
//     <>
//       <Shop.Navigator initialRouteName="MyTraining"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#ffffff',
//           },
//           headerTintColor: '#ff009a',
//           headerTitle: <View><Image style={{ height: 70, width: 100 }} resizeMode="contain" source={require('../../../icon/logo.png')} /></View>,
//           //  headerLeft: ()=> < NavBarImage/>,
//           headerLeft: () => (
//             // <Icon.Button name="ios-menu" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.openDrawer()}></Icon.Button>
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <View style={{ justifyContent: 'center', height: 35 }} onPress={() => navigation.openDrawer()}>
//                 <Image source={require('../../../icon/menu-icon.png')} style={styles.image} ></Image>
//               </View>
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             // <Icon.Button name="ios-search" size={25}
//             //   backgroundColor="#dcdcdc" color="#ff009a" onPress={() => navigation.navigate('ProsidToPlaceOrder')}>
//             //   <Text>{global.productCount}</Text>
//             // </Icon.Button>
//             <View style={{ justifyContent: 'center', borderRadius: 50, height: 35, marginRight: 20, marginTop: 6.8, flexDirection: 'row' }}>
//               <TouchableOpacity>
//                 <View onStartShouldSetResponder={
//                   () => navigation.navigate('Search')
//                 }>
//                   <Image source={require('../../../icon/search-icon.png')} style={styles.image} />
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <View >
//                   <Image source={require('../../../icon/instructor2.png')} style={{
//                     height: 30,
//                     width: 30,
//                     // borderRadius:20,
//                     padding: 10,
//                     marginLeft: 15, borderRadius: 50
//                   }} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ),
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             fontSize: 30,
//             fontWeight: 'bold'
//           },
//         }}
//       >
//         {/* <Shop.Screen name="HomeScreen" component={Home} /> */}
//         <Shop.Screen name="MyTraining" component={MyTraining} />
//         {/* <Shop.Screen name="CreatTrainingSchedule" component={CreatTrainingSchedule} />
//         <Shop.Screen name="CreatTrainingRefarenceMaterial" component={CreatTrainingRefarenceMaterial} /> */}


//         {/* <Shop.Screen name="TrainingDetailsPostBooking" component={TrainingDetailsPostBooking} />
//         <Shop.Screen name="Search" onStartShouldSetResponder={
//           () => navigation.navigate('Search')
//         } component={Search} />
//         <Shop.Screen name="CourseDetails" component={CourseDetails} /> */}
//       </Shop.Navigator>
//     </>
//   );
// }
export default function MeriApp2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} initialRouteName="SPLASHSCREEN"/>}>
        {/* screens */}
        <Drawer.Screen name="SPLASHSCREEN1" component={SPLASHSCREEN} />
        <Drawer.Screen name="home1" component={HOMEDROWER}/>
        {/* <Drawer.Screen name="profile1" component={PROFILEDROWER} />
        <Drawer.Screen name="training1" component={CREATTRAININGDROWER} />
        <Drawer.Screen name="mytraining1" component={MYTRAININGDROWER} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  image: {
    height: 30,
    width: 30,
    // borderRadius:20,
    padding: 10,
    marginLeft: 15,
    // borderColor:'#141f47',
    //  borderWidth:2
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
});
