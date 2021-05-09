import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }

  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Text to Speech Converter', style: { color: '#fff' ,marginHorizontal: 30} }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <TextInput value={this.state.text}
          style={styles.InputBox}
          onChangeText={(text) => {
            this.setState({
              text: text
            })
          }}>
        </TextInput>
        <TouchableOpacity style={styles.goButton} onPress={this.speak} >
          <Text>
            Go
          </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBox: {
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'wheat',
    marginTop: 90
  },
  goButton: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: "grey",
    width: 100,
    borderColor: 'black',
    borderRadius: 10
  }
});
