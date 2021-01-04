import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

class CreatInstructorProfileAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    render() {
        const { active } = this.state;
        return (
           <>
           </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
   
});

export default CreatInstructorProfileAccount;