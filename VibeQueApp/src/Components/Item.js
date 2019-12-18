import React from 'react';
import postSong from '../Components/serviceClient';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
// import postSong from '../api/token';
const url = 'http://localhost:3000/api/songrequest';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10
  },

  text: {
    color: 'white'
  }
});

// addSong = songUrl => {
//   postSong(songUrl).then(answer => {
//     console.log('Addsongissa:' + songUrl);
//   });
// };

// changeColor = () => {
//   const colorArray = this.state.colors;
//   var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
//   this.setState({ buttonColor: currentColor });
//   console.log('toimiiiii');
// };

export default ({ item: { id, imageUri, title, type, name, previewUrl } }) => (
  <TouchableOpacity
    // style={{ backgroundColor: this.state.buttonColor, padding: 15 }}
    onPress={() => {
      handleClick = songUrl => {
        console.log('url: ' + songUrl);
        style.container.backgroundColor = 'green';

        postSong(songUrl);
        console.log('toimiiiii');
        // addSong(songUrl);
        // this.changeColor();
        // console.log('toimiiiii');
      };

      Alert.alert(
        'Set you entrance song to be: ',
        '' + name + ' - ' + title + '',
        [
          {
            style: 'destructive',
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')
          },
          {
            text: 'OK',
            onPress: () => {
              if (previewUrl) {
                handleClick(previewUrl);
              } else {
                console.log('No url yet');
              }
            }
          }
        ]
      );
      // state = {
      //   colors: ['green', 'blue', 'yellow', 'red'],
      //   buttonColor: 'blue'
      // };
    }}
  >
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />

      <Text style={styles.text} id={id}>
        {name}
        {'\n'}
        {title}
      </Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  </TouchableOpacity>
);

// let url;
// export default ({ item: { imageUri, title, type, name, previewUrl } }) => (
//   <TouchableOpacity onPress={() => {url = previewUrl, Alert.alert(url)}}></TouchableOpacity>
