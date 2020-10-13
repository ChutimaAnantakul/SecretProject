import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.profileCard]}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
              }}
            />
            <Text style={styles.name}>Mark Doe</Text>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Photos</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Followers</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Following</Text>
              <Text style={styles.count}>200</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Status</Text>
            <Text> - LoveSecret Story by Mark Doe</Text>
            <Text> - thank for follow me. 20+</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Payment')}>
              <Text>Open</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Photos</Text>
            <View style={styles.photosContainer}>
                <Image 
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
              <Image
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
              <Image
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
              <Image
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
              <Image
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
              <Image
                style={styles.photo}
                source={require('./assets/Secret.jpg')} 
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#DCDCDC',
  },
  cardTittle: {
    color: '#808080',
    fontSize: 22,
    marginBottom: 5,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height: 100,
    marginTop: 40,
  },
  profileCard: {
    height: 200,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard: {
    marginTop: 10,
  },
  photo: {
    width: 113,
    height: 113,
    marginTop: 5,
    marginRight: 5,
  },
  
});
