import React, { Component } from 'react';
import { FlatList, Text, Button, View, Alert } from 'react-native';

import Separator from './Separator';
import Item from './Item';
let url;

export default ({ items, onEndReached }) => (
  <View>
    <Button title="Set Song" onPress={(() => Alert.alert(`${url}`))}/>
    <FlatList
      data={items}
      renderItem={(info) => (
        <Item item={info.item} />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
    />
  </View>
);
