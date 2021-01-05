import * as React from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform, alert
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
import IconIconIcon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';
//const icon1 ='<IconIcon name="check" size={20} color="#ffffff" />'

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
  onDeleteBTN = () => {
    alert(' OnDelete');
  }
  render() {
    const context = this;
    //const icon1 = {{<IconIcon name="check" size={20} color="#900" />}}
    const icon2 = <IconIcon name="check" size={20} color="#900" />

    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerText}>{this.props.item.category_name}</Text>
            <View style={{ paddingLeft: 20 }}>
              <IconIcon name="caret-down" size={21} color="#ffffff" />
            </View>
          </View>
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
              </Text>
              <View style={styles.separator} />

            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
export default class ExpandableViewSeparate extends React.Component {
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
        <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 35 }}>
          <Avatar.Image
            source={require('../../../icon/instructor2.png')}
            size={75}
          />
          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
            <Title style={styles.title}>John Doe</Title>
            {/* <Caption style={styles.caption}>John Doe@gmail.com</Caption> */}
          </View>
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
          <TouchableOpacity >
            <View style={{ marginLeft: 15, alignItems: 'center', justifyContent: 'center' }} onPress={() => { signOut() }}>
              <Title style={styles.title}></Title>
              {/* <Caption style={styles.caption}>John Doe@gmail.com</Caption> */}
            </View>
          </TouchableOpacity>
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
    margin: 10,
    borderRadius: 5
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    //fontStyle: 'italic',
    color: '#ffffff'
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
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
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
    // { id: 1, val: 'Home', groupIcon: <IconIcon name="home" size={20} color="#db6a84" />, nav: 'MainDrawer', routeName: 'home1' },
    isExpanded: false,
    category_name: 'Teacher Navigation',
    subcategory: [{  nav: 'MainDrawer', routeName: 'home1' }, { id: 1, val: 'Dashbord', groupIcon: <IconIconIcon name="tachometer-alt" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile1' }, { id: 3, val: 'Edit Profile', groupIcon: <IconIcon name="pencil" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'profile1' }, { id: 3, val: 'Membership', groupIcon: <IconIcon name="users" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile1' }, { id: 3, val: 'create Training', groupIcon: <IconIcon name="plus-circle" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'training1' }, { id: 3, val: 'My Training', groupIcon: <IconIcon name="book" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'mytraining1' }, { id: 3, val: 'My Earning', groupIcon: <IconIcon name="rupee" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile12' }],
  },

  {
    isExpanded: false,
    category_name: 'Student Navigation',
    subcategory: [{ nav: 'MainDrawer', routeName: 'home1' }, { id: 1, val: 'Dashbord', groupIcon: <IconIconIcon name="tachometer-alt" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile1' }, { id: 3, val: 'Edit Profile', groupIcon: <IconIcon name="pencil" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'profile1' }, { id: 3, val: 'Membership', groupIcon: <IconIcon name="users" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile1' }, { id: 3, val: 'create Training', groupIcon: <IconIcon name="plus-circle" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'training1' }, { id: 3, val: 'My Training', groupIcon: <IconIcon name="book" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'mytraining1' }, { id: 3, val: 'My Earning', groupIcon: <IconIcon name="rupee" size={18} color="#db6a84" />, nav: 'MainDrawer', routeName: 'InstructorProfile12' }],
  },
];