import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import loglogin from './src/Login';
import Registration from './src/Registration';



export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({


  Login: { screen: loglogin },
  Registration: { screen: Registration },


},
  {
    headerShown: false
  },
);

const AppContainer = createAppContainer(AppStackNavigator);

