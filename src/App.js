import React from 'react';
import {
  Platform,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Chat from './components/Chat';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' title='Home' component={Home}/>
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}
