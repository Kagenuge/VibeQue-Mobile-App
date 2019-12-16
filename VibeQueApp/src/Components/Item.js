import React, { Component } from 'react';

import postSong from '../Components/serviceClient';

// import postSong from '../api/token';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  text: {}
});

//SongUrl callback:

handleClick = songUrl => {
  console.log('url:');
  console.log(songUrl);

  // addSong(songUrl);
};

// addSong = songUrl => {
//   postSong(songUrl).then(answer => {
//     console.log('Addsongissa:' + songUrl);
//   });
// };

//bindauksella voisi käyttää myös muissa componenteissa:
this.handleClick = this.handleClick.bind(this);

var addSong;
let songUrl;

export default ({ item: { imageUri, title, type, name, previewUrl } }) => (
  <TouchableOpacity
    onPress={() => {
      songUrl = previewUrl;
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
              this.handleClick(songUrl);
            }
          }
        ]
      );
    }}
  >
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />

      <Text style={styles.text}>{name} -</Text>
      <Text> {'\n'} </Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  </TouchableOpacity>
);

// let url;
// export default ({ item: { imageUri, title, type, name, previewUrl } }) => (
//   <TouchableOpacity onPress={() => {url = previewUrl, Alert.alert(url)}}></TouchableOpacity>
