import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Button,
  Container,
  Content
} from 'native-base';
import PropTypes from 'prop-types';
import { CustomHeader } from '../Components';
import styles from './Styles/DetailsScreenStyles';

export default class DetailsScreen extends Component {
  render() {
    const { navigation } =  this.props;
    return (
      <Container>
        <CustomHeader
          title="Details"
          leftButtonIcon="back"
          leftButtonPress={() =>  navigation.goBack()}
        />
        <Content>
          <Text style={styles.textRegular}>
            This is the next screen in the stack.
          </Text>
          <Button
            onPress={() => navigation.navigate('LoginStack')}
            style={styles.logoutButton}
            danger
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.object
};
