import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Header = ({counter}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TO DO</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'gold',
    fontSize: 40,
    fontWeight: 'bold',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  counter: {
    color: 'gold',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Header;
