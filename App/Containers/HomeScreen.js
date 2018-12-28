import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content,
} from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>Home Screen</Text>
        </Content>
      </Container>
    );
  }
}
