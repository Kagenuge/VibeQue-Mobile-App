import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppNavigator from './AppNavigator';
import SongBox from './src/Components/SongBox';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SongBox />
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
