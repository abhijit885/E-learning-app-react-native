import React,{Component} from 'react';
import {View,Text} from 'react-native' ;
import IconIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AcordiamItems extends Component 
{
    constructor() {
        super();
       this.state={selectLabel:''};
    }
    
        Show=(value)=>
        {
            // alert(value);
            this.setState({selectLabel:value});
        }

    render()
    {
        return(
            <View style={{flexDirection:'row'}}>
                <Text>Student Section</Text>
               <Icon name="lock-closed" size={21} color="#900" />
            </View>
        );

    }
}