import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from '../Navigation/AppNavigator';

const entireScreenWidth = Dimensions.get('window').width;
const AppContainer = createAppContainer(AppNavigator);

// Use the width of the design you have been provided in place of 380
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
