import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,  
  Caption,
  Paragraph,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { AuthContext } from '../../Context/context'

const YourProfile_With_Login = () => {

  const { signOut } = React.useContext(AuthContext);

    return (
      <View style={styles.container}>
        <Text>Your Profile Screen After login</Text>
        <TouchableOpacity onPress={() => {signOut()}}>
            <View style={{ marginLeft: 15,alignItems:'center',justifyContent:'center'}} onPress={() => {signOut()}}>
                                <Title style={styles.title}>Logout</Title>
                                {/* <Caption style={styles.caption}>John Doe@gmail.com</Caption> */}
                            </View>
                            </TouchableOpacity>
                            
      </View>
    );
};

export default YourProfile_With_Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
