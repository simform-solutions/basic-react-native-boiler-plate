import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default AppNavigator;