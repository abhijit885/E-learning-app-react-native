import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashStep1 from '../Screen/SplashStep1';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashStep1" component={SplashStep1}/>
    </RootStack.Navigator>
);

export default RootStackScreen;