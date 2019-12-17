import React from 'react';
import { View, Text, Image } from 'react-native';

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});
class Index extends React.Component {
  render() {
    return (
      <Image source={require('./images/dark_bg.jpg')} style={styles.backgroundImage}>
        <View>
          <Text>Welcome.</Text>
        </View>
      </Image>
    );
  }
}

export default Index;