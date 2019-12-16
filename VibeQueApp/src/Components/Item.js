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
    width: 100,
    height: 100,
    marginRight: 10
  },

  text: {
    color: 'white'
  },

});

// addSong = songUrl => {
//   postSong(songUrl).then(answer => {
//     console.log('Addsongissa:' + songUrl);
//   });
// };

//bindauksella voisi käyttää myös muissa componenteissa:

export default ({ item: { imageUri, title, type, name, previewUrl } }) => (
  <TouchableOpacity
    onPress={() => {
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
              handleClick(previewUrl);
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
