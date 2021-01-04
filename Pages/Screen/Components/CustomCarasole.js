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

const images = [
  'https://www.omipharma.vn/files/banner/2020-07/xit-chong-nang-lishan-nhat-ban-spf-50-pa-huong-tinh-dau-thien-nhien.jpg',
  'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-hon-moi-ngay.jpg',
  'https://www.omipharma.vn/files/banner/2020-06/omi-pharma-thau-hieu-nhu-cau-dan-dau-lua-chon.jpg'
]

class CustomCarasole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
        this.setState({
          active: slide
        })
      }
    }

  }

  render() {
    const { active } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>HomeScreen</Text>
        </View> */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((e, index) =>
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              )
            }
          </ScrollView>
          {/* <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 8, fontFamily: 'roboto-bold' }}>Upcoming Training Offered By Rabin Chatterjee</Text>
                       <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                    <Image source={require('../../../icon/calendar-min.png')} style={{ width: 18, height: 18, marginRight: 25 }} />
                    <Text style={styles.loginText3}>10 Total Sessions</Text>
                  </View> 
                  </View> */}
          <View>
            {/* <Text style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#e9e9e9', width: '70%', paddingTop:20,marginLeft: 10, }}>_________________________________</Text> */}
            {/* <Text numberOfLines={1} style={{ marginLeft:20}}>               
        ____________________________________________________
</Text> */}
            <View style={styles.lineStyle} />
                    </View>

          <View style={styles.wrapDot}>
            {
              images.map((e, index) =>
                <Text
                  key={e}
                  style={active === index ? styles.dotActive : styles.dot}>●</Text>)
            }
          </View>
        </View>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrap: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height * 0.40, // 25% window
    paddingVertical: 10,
    paddingLeft: 13.5,
    //marginBottom:50
  },
  wrapDot: {
    // position: 'absolute',
    paddingTop: 20,

    //bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    fontSize: 30,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    fontSize: 30,
    color: '#ff00e8'
  },
  loginText3: {

    color: '#3b3c37',
    fontWeight: 'bold',
    fontFamily: 'roboto-bold'
  },
  lineStyle: {
    borderWidth: 1.3,
    borderColor: 'black',
    // alignItems:'center',
    // justifyContent:'center'
    marginTop:20,
    marginLeft:23
  }
});

export default CustomCarasole;