import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput  } from 'react-native';
import React from 'react';

export default function App() {
  const [msg, setMsg] = React.useState();

  const buttonPressed = () => {
    Alert.alert('BUTTON HAS BEEN PRESSED', 'You wrote: ' + msg)
  }
  return (
    <View style={styles.container}>
        <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        value = {msg}
        onChangeText = {text => setMsg(text)}
        />
      <Button title="press me" onPress={buttonPressed}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
