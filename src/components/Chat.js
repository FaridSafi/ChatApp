import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
  state = {
    messages: [],
  };
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          // Send the message object to your server
        }}
        user={{
          // _id: 1, The ID of the logged-in user
          name: this.props.name,
        }}
      />
    );
  }
}

export default Chat;
