import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SongBox from './src/Components/SongBox';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  image: {
    width: 340,
    height: 70,
    marginTop: 190
  },

  lineargr: {
    padding: 7,
    alignItems: 'center',
    borderRadius: 10
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      
      <View style={styles.view}>
          <Image style={styles.image} source={require('./src/pics/logo1.png')}/>
            <LinearGradient colors={['black', 'black', '#FF2B62',  '#FF2B62', 'black', 'black']}
              style={styles.lineargr}>
              <SongBox />
            </LinearGradient>
      </View>
    );
  }
}

export default HomeScreen;
