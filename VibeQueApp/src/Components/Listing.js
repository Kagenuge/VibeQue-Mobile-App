import React, { Component } from 'react';
import { FlatList, Text, Button, View, Alert } from 'react-native';

import Separator from './Separator';
import Item from './Item';

export default ({ items, onEndReached }) => (
  <View>
    <Button title='Set Song' onPress={() => Alert.alert(`Song set`)} />
    <FlatList
      data={items}
      renderItem={info => (
        <Item item={info.item} onPress={() => Alert.alert(`$`)} />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
    />
  </View>
);
