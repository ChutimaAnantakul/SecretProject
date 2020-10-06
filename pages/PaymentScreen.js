import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';

export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedStartDate: null,
    // };
    // this.onDateChange = this.onDateChange.bind(this);
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  // onDateChange(date) {
  //   this.setState({
  //     selectedStartDate: date,
  //   });
  // }

  render() {
    // const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={{uri: 'https://lorempixel.com/900/1400/nightlife/2/'}}
        />
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={{
                uri:
                  'https://p1.pxfuel.com/preview/687/751/600/man-secret-face-mysterious-whisper-gossip.jpg',
              }}
            />
            <Text style={styles.name}>LOVE SECRET</Text>
            <Text style={styles.price}>$ 12.22</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Card number"
              keyboardType="cardnumber"
              underlineColorAndroid="transparent"
              onChangeText={(cardnumber) => this.setState({cardnumber})}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  'https://img.icons8.com/plasticine/100/000000/bank-card-back-side.png',
              }}
            />
          </View>

          {/* <View style={styles.container}>
            <CalendarPicker
              onDateChange={this.onDateChange}
            />
    
            <View>
              <Text>SELECTED DATE:{ startDate }</Text>
            </View>
          </View> */}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="MM/YY"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(mmyy) => this.setState({mmyy})}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://img.icons8.com/office/16/000000/calendar.png',
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="CVC"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(cvc) => this.setState({cvc})}
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://img.icons8.com/office/16/000000/lock-2.png',
              }}
            />
          </View>

          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
});
