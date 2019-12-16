import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: Home
});

// const Appi = createStackNavigator(AppNavigator);

export default createAppContainer(AppNavigator);
