/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput placeholder="Write your name" style={styles.input} />

        <Button title="Save" color="#333" />

        <TouchableHighlight style={styles.btnDelete}>
          <Text style={styles.txtDelete}>Delete Name &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnDelete: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  txtDelete: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
