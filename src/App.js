import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import SaveCard from './components/SaveCard/SaveCard';
import ToDoList from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';

function App() {
  const [counter, setCounter] = useState(2);

  return (
    <View style={styles.container}>
      <Header counter={counter} />
      <View style={{flex: 1}}>
        <ToDoList />
      </View>
      <SaveCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
  },
});

export default App;
