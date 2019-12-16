import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default AppNavigator;
