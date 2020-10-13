// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';

// //Import all required component
// import { View, Text } from 'react-native';

// const HomeScreen = () => {
//   global.currentScreenIndex = 'HomeScreen';
//   return (
//     <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
//       <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
//       <Text style={{ fontSize: 18, marginTop: 10 }}>
//         Simple Login Registraction Example
//       </Text>
//       <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
//     </View>
//   );
// };
// export default HomeScreen;

import React, {Component} from 'react';
// import ProfileScreen from './Screen/ProfileScreen';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Mark Doe',
          position: 'DJ',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 1,
          name: 'John Doe',
          position: 'VJ',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 2,
          name: 'Clark Man',
          position: 'Member',
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 3,
          name: 'Jaden Boor',
          position: 'VJ',
          image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
          id: 4,
          name: 'Srick Tree',
          position: 'Member',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 5,
          name: 'Mia Rawee',
          position: 'DJ',
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
          id: 6,
          name: 'Mike wane',
          position: 'DJ',
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
          id: 8,
          name: 'Bruce Lee',
          position: 'Member',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 9,
          name: 'John Wick',
          position: 'Member',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 9,
          name: 'Uki Mika',
          position: 'Member',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
      ],
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Button title="next" onPress={()=> Navigation.navigate('ProfileScreen')}></Button> */}
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => this.clickEventListener(item)}>
                <View style={styles.cardHeader}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://img.icons8.com/flat_round/64/000000/hearts.png',
                    }}
                  />
                </View>
                <Image style={styles.userImage} source={{uri: item.image}} />
                <View style={styles.cardFooter}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => this.props.navigation.navigate('profile2')}>
                      <Text style={styles.followButtonText}>View</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: '#DCDCDC',
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  icon: {
    height: 20,
    width: 20,
  },
});
