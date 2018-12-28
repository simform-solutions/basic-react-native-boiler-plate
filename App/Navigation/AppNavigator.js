import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import WelcomeScreen from '../Containers/WelcomeScreen';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Home: {
    screen: HomeScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Welcome'
});

export default AppNavigator;
