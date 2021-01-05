import * as React from 'react';
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
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    TouchableRipple,
    Switch
  } from 'react-native-paper';
  import IconIcon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
class ExpandableItemComponent extends React.Component {
    //Custom Component for the Expandable List
    constructor() {
      super();
      this.state = {
        layoutHeight: 0,
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.isExpanded) {
        this.setState(() => {
          return {
            layoutHeight: null,
          };
        });
      } else {
        this.setState(() => {
          return {
            layoutHeight: 0,
          };
        });
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layoutHeight !== nextState.layoutHeight) {
        return true;
      }
      return false;
    }
  
    render() {
        const context = this;
       // const ICON11 = '<IconIcon name="check" size={20} color="#ffffff" />';

      return (
        <View>
          {/*Header of the Expandable List Item*/}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onClickFunction}
            style={styles.header}>
            <Text style={styles.headerText}>{this.props.item.category_name}       +</Text>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.layoutHeight,
              overflow: 'hidden',
            }}>
            {/*Content under the header of the Expandable List Item*/}
            {this.props.item.subcategory.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.content}
                onPress={() => context.props.navObj.navigate(item.routeName)}>
                <Text style={styles.text}>
                <View  style={{paddingRight:10}}>
                  {item.groupIcon}
                </View>
                   {item.val}
                   {item.icon1}
                </Text>
                <View style={styles.separator} />

              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    }
  }
export default class ExpandableViewSeparate_without_login extends React.Component {
    //Main View defined under this Class
    constructor() {
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      this.state = { listDataSource: CONTENT };
    }
  
    updateLayout = index => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      const array = [...this.state.listDataSource];
      array[index]['isExpanded'] = !array[index]['isExpanded'];
      this.setState(() => {
        return {
          listDataSource: array,
        };
      });
    };
  
    render() {
      return (
        <View style={styles.container}>
          {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.topHeading}>Jon Gomes</Text>

          <Text style={styles.topHeading}>Jon Gomes</Text>

          </View> */}
          <View style={{ flexDirection: 'row', marginTop: 25,marginLeft:35 }}>
                            <Avatar.Image
                                source={require('../../../icon/instructor2.png')}
                                size={75}
                            />
                           
                        </View>
          <ScrollView>
            {this.state.listDataSource.map((item, key) => (
              <ExpandableItemComponent
                key={item.category_name}
                onClickFunction={this.updateLayout.bind(this, key)}
                item={item}
                navObj={this.props.navObj}
              />
            ))}
          </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#ffffff',
    },
    topHeading: {
      paddingLeft: 10,
      fontSize: 20,
    },
    header: {
      backgroundColor: '#5a287d',
      padding: 16,
      margin:10,
      borderRadius:5
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
      fontStyle:'italic',
      color:'#ffffff'
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '98%',
     // marginLeft: 5,
     // marginRight: 5,
    },
    text: {
      fontSize: 16,
      color: '#606070',
      paddingLeft: 60,
      paddingTop:10,
      paddingRight:10,
      paddingBottom:10
    },
    content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },
  title: {
      fontSize: 16,
      marginTop: 19,
      fontWeight: 'bold',
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
  },
  });
  
  //Dummy content to show
  //You can also use dynamic data by calling webservice
  const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Home',
      subcategory: [{ id: 1, val: 'Home',nav: 'MainDrawer', routeName: 'home1',groupIcon: <IconIcon name="home" size={18} color="#db6a84" />, }],
    }
  ];