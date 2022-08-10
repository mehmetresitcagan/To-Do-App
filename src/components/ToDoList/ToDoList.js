import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const ToDoList = ({list, press}) => {
  return (
    <View>
      <View style={styles.containerWhenPressed}>
        <Text style={styles.jobWhenPressed}>Deneme</Text>
      </View>
      <View style={styles.containerWhenPressed}>
        <Text style={styles.jobWhenPressed}>Deneme</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.job}>Deneme</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.job}>Deneme</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkseagreen',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  job: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
  containerWhenPressed: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  jobWhenPressed: {
    color: '#C4CBD6CC',
    padding: 10,
    fontSize: 20,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
});

export default ToDoList;
