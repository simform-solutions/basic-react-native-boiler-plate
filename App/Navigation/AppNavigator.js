import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from '../Containers/WelcomeScreen';
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import DetailsScreen from '../Containers/DetailsScreen';
import { Colors } from '../Themes';

const LoginStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Login: {
    screen: LoginScreen
  }
}, {
  headerMode: 'none'
});

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  headerMode: 'none'
});

const AppNavigator =  createSwitchNavigator({
  LoginStack,
  MainStack
}, {
  // Default config for all screens
  initialRouteName: 'LoginStack',
  cardStyle: {
    backgroundColor: Colors.white
  }
});

export default AppNavigator;
