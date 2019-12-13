import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
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


export default ({ item: { imageUri, title, type, name } }) => (
  <View style={styles.container}>
    <Image source={{ uri: imageUri }} style={styles.image} />
    <Text style={styles.text}>{name} -</Text>
    <Text> {'\n'} </Text>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{type}</Text>
  </View>
);
