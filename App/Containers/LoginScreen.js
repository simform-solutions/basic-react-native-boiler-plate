import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input
} from 'native-base';
import PropTypes from 'prop-types';
import { CustomHeader } from '../Components';
import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const { navigation } =  this.props;
    const { username, password } = this.state;
    return (
      <Container>
        <CustomHeader
          title="Login"
          leftButtonIcon="back"
          leftButtonPress={() =>  navigation.goBack()}
        />
        <Content>
          <Form>
            <Item style={styles.inputBox}>
              <Input
                ref={u => {
                  this.usernameRef = u;
                }}
                placeholder="Username"
                value={username}
                onChange={u => this.setState({ username: u })}
                onSubmitEditing={() => this.passwordRef._root.focus()}
                returnKeyType="next"
              />
            </Item>
            <Item style={styles.inputBox} last>
              <Input
                ref={p => {
                  this.passwordRef = p;
                }}
                placeholder="Password"
                value={password}
                onChange={p => this.setState({ password: p })}
                secureTextEntry
                onSubmitEditing={() => navigation.navigate('MainStack')}
                returnKeyType="go"
              />
            </Item>
          </Form>
          <Button
            onPress={() => navigation.navigate('MainStack')}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object
};
