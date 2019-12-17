import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'white',
    fontSize: 30,
    backgroundColor: 'black'

  },
  input: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FF2B62',
    borderRadius: 10,
    width: 300,
    height: 40,
    color: 'white',
    padding: 10,
    marginBottom: 50,
    marginTop: 10
  },
  container: {}
});

export default class SearchSongs extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChangeText(text) {
    const { onChange } = this.props;

    this.setState(
      {
        text
      },
      () => {
        onChange(text);
      }
    );
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Type a song:</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => this.handleChangeText(text)}
        />
      </View>
    );
  }
}
