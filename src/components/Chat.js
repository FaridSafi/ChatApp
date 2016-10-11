import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  onSend() {

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
