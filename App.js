import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import {Home} from './Components/Home';
import {Heroes} from './Components/Heroes';
import {Setting} from './Components/Setting';

const NavBar = createMaterialTopTabNavigator(
  {
    Home: {screen: Home,},
    Heroes: {screen: Heroes},
    About: {screen: Setting}
  },
  {
    tabBarPosisition: 'bottom',
    swipeEnabled: true,
    tabBarOption:
    {
      avtiveTintColor: '#f8f8f8f8',
      activeBackgroundColor: '#586598',
      inactiveTintColor: '#1234',
      style: {
        backgroundColor:'#000055',
      },

      labelStyle: {
        fontSize: 10,
        color: 'white',
        padding: 5,
      }
    }
  }
);


export default class App extends React.Component {
  render() {
    return (
      <NavBar/>
    );
  }
}
