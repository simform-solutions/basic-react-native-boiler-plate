import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content
} from 'native-base';
import { CustomHeader } from '../Components';
import styles from './Styles/HomeScreenStyles';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="Home"
          leftButtonIcon="back"
        />
        <Content>
          <Text style={styles.textRegular}>
            Home Screen
          </Text>
        </Content>
      </Container>
    );
  }
}
