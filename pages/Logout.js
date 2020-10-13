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
  Dimensions,
  LogBox,
} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

export default class Logout extends Component {
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
    const { navigate } = this.props.navigation;
      return ( <View style={styles.btnParentSection}>
      <TouchableOpacity
        onPress={this.chooseImage}
        style={styles.btnSection} onPress={() =>navigate('Auth')}>
        
        <Text style={styles.btnText}>Logout</Text>
        
      </TouchableOpacity>
    </View>
    // <TouchableOpacity onPress={() =>navigate('Auth')}></TouchableOpacity>
      );
}
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
  
    body: {
      backgroundColor: Colors.white,
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      height: Dimensions.get('screen').height - 100,
      width: Dimensions.get('screen').width,
    },
    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center',
    },
    images: {
      width: 150,
      height: 150,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3,
    },
    btnParentSection: {
      alignItems: 'center',
      marginTop: 10,
    },
    btnSection: {
      width: 225,
      height: 50,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom: 10,
    },
    btnText: {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });





