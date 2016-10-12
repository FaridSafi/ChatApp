import React from 'react';

import {
  Platform,
} from 'react-native';

import Home from './components/Home';
import Chat from './components/Chat';

import { Router, Scene } from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{
          paddingTop: Platform.OS === 'ios' ? 64 : 54,
        }}>
          <Scene title='Home' key='home' component={Home}/>
          <Scene title='Chat' key='chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}

export default App;
