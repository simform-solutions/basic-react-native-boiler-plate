import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { Root } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from '../Navigation/AppNavigator';
// Styles
import styles from '../Themes/ApplicationStyles';

const entireScreenWidth = Dimensions.get('window').width;
const NavigationContainer = createAppContainer(AppNavigator);

// Use the width of the design you have been provided in place of 380
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.applicationContainer} forceInset={{ top: 'never', bottom: 'never' }}>
        <Root>
          <NavigationContainer />
        </Root>
      </SafeAreaView>
    );
  }
}
