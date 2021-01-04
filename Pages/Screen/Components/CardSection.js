import React from 'react';
import{Text,View} from 'react-native';


const CardSection =(props)=>{
    return(
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );
};

const styles ={
    containerStyle:{
       
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
       position:'relative',
       borderColor:'#ddd',
    //    paddingRight:70 ,
    //    paddingLeft:70 ,
       height:55,
       width:315,
       padding: 10,
       //marginBottom:5

    },
 };


export default CardSection;