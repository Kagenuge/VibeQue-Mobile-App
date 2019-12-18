import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class AxiousSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://api.spotify.com/v1/tracks/{id}')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: ''
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        
        <View style={styles.view}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => 
          <Text>{item.id}</Text>}
        />
      </View>
    );
  }
}
