import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppNavigator from './AppNavigator';
import SongBox from './src/Components/SongBox';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Image
          style={{width: 350, height: 80}}
          source={require('./src/pics/logo1.png')}
        />
        <SongBox />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
