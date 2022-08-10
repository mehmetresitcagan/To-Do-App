/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {StyleSheet, Button, View, TextInput} from 'react-native';

const SaveCard = ({todo, setTodo}) => {
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = ({item}) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      title: item.todoValue,
      pressed: false,
    };
    setTodo([...todo, newTodo]);
    setTodoValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="To do..."
        style={{marginLeft: 5}}
        value={todoValue}
        onChangeText={setTodoValue}
      />
      <View style={styles.seperator} />
      <View style={styles.save_container}>
        <Button
          title="Save"
          color="orange"
          onPress={() => handleSubmit(todoValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    margin: 15,
    borderRadius: 10,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  save_container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default SaveCard;
