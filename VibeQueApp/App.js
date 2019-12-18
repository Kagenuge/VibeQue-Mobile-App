import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppNavigator from './AppNavigator';
import SongBox from './src/Components/SongBox';
import AppNavigator from './AppNavigator';
// import Colors from './src/Components/Colors';

class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <Image
          style={{ width: 350, height: 80 }}
          source={require('./src/pics/logo1.png')}
        />

        <SongBox />
      </View>
    );
  }
}

export default App;
