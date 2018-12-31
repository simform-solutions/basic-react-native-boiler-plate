import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Button,
  Container,
  Content
} from 'native-base';
import PropTypes from 'prop-types';
import { CustomHeader } from '../Components';
import styles from './Styles/HomeScreenStyles';

export default class HomeScreen extends Component {
  render() {
    const { navigation } =  this.props;
    return (
      <Container style={styles.mainContainer}>
        <CustomHeader
          title="Home"
        />
        <Content style={styles.content}>
          <Text style={styles.textRegular}>
            Welcome User
          </Text>
          <Button
            onPress={() => navigation.navigate('Details')}
            style={styles.nextButton}
            success
          >
            <Text style={styles.nextButtonText}>Check out Details</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object
};
