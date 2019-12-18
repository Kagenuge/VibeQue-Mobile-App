import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  // ImageBackground,
  // Button,
  TouchableOpacity
} from 'react-native';
// import { Input } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog from 'react-native-dialog';
import userIpAddr from '../Components/serviceClient';

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FF2B62',
    fontSize: 15,
    backgroundColor: 'black'
  },
  input: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FF2B62',
    borderRadius: 20,
    width: 270,
    height: 40,
    color: 'white',
    padding: 10,
    marginBottom: 30,
    marginTop: 2
  },
  container: {},
  button1: {
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FF2B62',
    fontSize: 15,
    backgroundColor: 'black',
    borderColor: '#FF2B62',
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 2,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default class SearchSongs extends Component {
  state = {
    dialogVisible: false,
    text: '',
    ip: '',
    name: ''
  };

  showDialog = () => {
    this.setState({ dialogVisible: false });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleClick = (ip, name) => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });

    const ipaddrress = this.state.ip;
    const ipname = this.state.name;
    console.log(ipname);
    console.log(ipaddrress);
    userIpAddr(ipaddrress);

    this.setState({
      ip: '',
      name: ''
    });
    // };
  };

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
      <View>
        <TextInput
          style={styles.input}
          placeholder='Search for songs, albums, artists...'
          placeholderTextColor='rgb(255, 141, 253)'
          value={text}
          onChangeText={text => this.handleChangeText(text)}
        />

        <View>
          <TouchableOpacity onPress={this.showDialog}>
            <Text onPress={this.showDialog} style={styles.button1}>
              Enter IP-address
            </Text>

            <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>Enter the VibeQue!</Dialog.Title>
              <Dialog.Description name='description'>
                Please enter name and IP-address:
              </Dialog.Description>
              <Dialog.Input
                onChangeText={name => this.setState({ name })}
                placeholder='Your name...'
                value={this.state.name}
              ></Dialog.Input>
              <Dialog.Input
                onChangeText={ip => this.setState({ ip })}
                placeholder='Your IP-address...'
                value={this.state.ip}
              ></Dialog.Input>

              <Dialog.Button label='Cancel' onPress={this.handleCancel} />
              <Dialog.Button label='Ok' onPress={this.handleClick} />
            </Dialog.Container>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
