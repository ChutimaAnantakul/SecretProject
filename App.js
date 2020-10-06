//This is an example code for Bottom Navigation//
import React from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SearchScreen from './pages/SearchScreen';
import PaymentScreen from './pages/PaymentScreen';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  },
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: {screen: SettingsScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  },
);
const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Settings: {screen: SettingsScreen},
    // Details: {screen: DetailsScreen},
    Profile: {screen: ProfileScreen},
    Payment: {screen: PaymentScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
      //Header title
    },
  },
);
const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Settings: {screen: SettingsScreen},
    // Details: {screen: DetailsScreen},
    Search: {screen: SearchScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  },
);

const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Settings: {screen: SettingsStack},
    Profile: {screen: ProfileStack},
    Search: {screen: SearchStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#943126',
      inactiveTintColor: 'gray',
    },
  },
);
export default createAppContainer(App);
