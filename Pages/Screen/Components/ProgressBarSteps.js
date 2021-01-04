import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIcon from 'react-native-vector-icons/FontAwesome';

class ProgressBarSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1:"",
        }
    }

    render() {
        return (
            <View >
               
                   
            </View>
            
            // {this.props.part2 ? <View><Text style={{ color:"#5a00b5" }}>_________________</Text><Text style={{ color:"#5a00b5" }}>abhijit</Text></View> : <View><Text style={{ color:"#2cd383" }}>______________</Text></View>}
            // {this.props.part3 ? <View><Text style={{ color:"#fffeff" }}>______________</Text></View> : <View><Text style={{ color:"#749182" }}>________________</Text><Text style={{ color:"#749182" }}>abhijit</Text></View>}
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:20,
    },
});

export default ProgressBarSteps;