import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content,
  Button
} from 'native-base';
import PropTypes from 'prop-types';
import styles from './Styles/WelcomeScreenStyles';

export default class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.mainContainer}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.textRegular}>
            Welcome to react-native. Good things are waiting for you!
          </Text>
          <Button
            onPress={() => navigation.navigate('Login')}
            style={styles.welcomeButton}
          >
            <Text style={styles.welcomeButtonText}>Go to Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object
};
