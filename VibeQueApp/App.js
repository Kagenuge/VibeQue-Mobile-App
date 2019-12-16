import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppNavigator from './AppNavigator';
import SongBox from './src/Components/SongBox';
import BackgroundImage from './src/Components/BackgroundImage';

class HomeScreen extends React.Component {
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BackgroundImage />
=======
=======
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BackgroundImage />
>>>>>>> 5cb477a1306d5d768604702d1c039f91e5412eae
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Image
          style={{width: 350, height: 80}}
          source={require('./src/pics/logo1.png')}
        />
        <SongBox />
<<<<<<< HEAD
>>>>>>> 8c28ddbe545b4a97f98e1b825ca1bf823c314209
=======
>>>>>>> 5cb477a1306d5d768604702d1c039f91e5412eae
      </View>
      // <View style={styles.container}>
      //   <Text>Welcome to VibeQue!</Text>
      //   <Search onChange={text => this.handleSearchChange(text)} />
      //   {isFetching && items.length === 0 ? (
      //     <ActivityIndicator />
      //   ) : (
      //     <Listing items={items} onEndReached={() => this.handleEndReached()} />
      //   )}
      // </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
