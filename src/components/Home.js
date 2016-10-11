import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Actions.chat();
          }}
        >
          <Text>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
