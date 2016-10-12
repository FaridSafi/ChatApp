import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View>
        <Text style={styles.enterYourNameLabel}>
          Enter your name :
        </Text>
        <TextInput
          placeholder="John Smith"
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          Actions.chat({
            name: this.state.name,
          });
        }}>
          <Text style={styles.submitButtonLabel}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  enterYourNameLabel: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  submitButton: {
    marginLeft: 20,
    marginTop: 10,
  },
  submitButtonLabel: {
    fontSize: 20,
  },
})

export default Home;
