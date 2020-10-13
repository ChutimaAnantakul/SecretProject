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

import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/SettingsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SearchScreen from '../pages/SearchScreen';
import UploadScreen from '../pages/UploadScreen';
import PaymentScreen from '../pages/PaymentScreen';
import profile2 from '../pages/profile2';
import logout from '../pages/Logout';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
    profile2: {screen: profile2},
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
const UploadStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Upload: {screen: UploadScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Upload',
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
const LogoutStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    logout: {screen: logout},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'logout',
      //Header title
    },
  },
);

const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Search: {screen: SearchStack},
    Upload: {screen: UploadStack},
    Profile: {screen: ProfileStack},
    Settings: {screen: SettingsStack},
    logout: {screen: LogoutStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Upload') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-cog${focused ? '' : '-outline'}`;
        } else if (routeName === 'logout') {
          iconName = `ios-cog${focused ? '' : '-outline'}`;
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
