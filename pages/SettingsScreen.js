// //This is an example code for Bottom Navigation//
// import React from 'react';
// //import react in our code.
// import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// //import all the basic component we have used

// export default class SettingsScreen extends React.Component {
//   //Setting Screen to show in Setting Option
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text
//           style={{
//             marginTop: 50,
//             fontSize: 25,
//           }}>
//           Setting!
//         </Text>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this.props.navigation.navigate('Home')}>
//             <Text>Go to Home Tab</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this.props.navigation.navigate('Details')}>
//             <Text>Open Detail Screen</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this.props.navigation.navigate('Profile')}>
//             <Text>Open Profile Screen</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: 300,
//     marginTop: 16,
//   },
// });

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: 'https://img.icons8.com/color/48/000000/coin-in-hand.png',
          title: 'Buy coins',
        },
        {
          id: 2,
          image:
            'https://img.icons8.com/color/70/000000/administrator-male.png',
          title: 'Like',
        },
        {
          id: 3,
          image: 'https://img.icons8.com/color/70/000000/filled-like.png',
          title: 'Comment',
        },
        {
          id: 4,
          image: 'https://img.icons8.com/color/70/000000/facebook-like.png',
          title: 'Download',
        },
        {
          id: 5,
          image: 'https://img.icons8.com/color/70/000000/shutdown.png',
          title: 'Edit',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar3.png',
              }}
            />
            <Text style={styles.name}>Jane Doe</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.icon} source={{uri: item.image}} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: 'https://img.icons8.com/customer/office/40',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#EE82EE',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FF6347',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: '#EE82EE',
    marginLeft: 4,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
