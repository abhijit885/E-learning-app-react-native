import React, { Component } from 'react';
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class SampleScreen extends React.Component {
    render(){
        return (<View style={{backgroundColor:'yellow',height:100,width:100,fontSize:25,alignItems:'center'}}>
        <Text>SampleScreen</Text>
        </View>)
    }
}