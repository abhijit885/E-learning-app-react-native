import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
    

} from 'react-native';
//import PhoneInput from "react-native-phone-number-input";
//import { RadioButton } from 'react-native-paper';

//import Icon from 'react-native-vector-icons/Ionicons';
//import Picker from '../Components/Picker'
import ScreenCreatProfileSubjectSkill from '../Screen/Components/ScreenCreatProfileSubjectSkill'

class CreatProfileSubjectSkill extends Component {

    constructor(props) {
        super(props);
        this.state = { setData: '' };

    }

    render() {
       
        return (
            <View style={styles.container}>
                <ScrollView>
                 <ScreenCreatProfileSubjectSkill part2></ScreenCreatProfileSubjectSkill>
                 </ScrollView>
            </View>
            );
        }
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     justifyContent: 'center',
           paddingTop: 10,
          paddingBottom: 20,
        // },
        }
    });
    
    export default CreatProfileSubjectSkill;
