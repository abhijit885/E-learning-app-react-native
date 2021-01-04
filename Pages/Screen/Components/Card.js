import React from 'react';
import{Text,View} from 'react-native';


const Card =(props)=>{
    return(
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );
};

const styles ={
    containerStyle:{
        borderWidth:1,
        borderRedius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#ff00b8',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.4,
        shadowRadius:2,
        elevation:10,
        marginLeft:5,
        marginRight:5,
        margintop:10,
        marginBottom:20

    },
 };


export default Card;