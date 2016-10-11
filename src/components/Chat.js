import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  onSend(message) {
    Backend.sendMessage(message);
  }
  componentWillMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
}

Chat.defaultProps = {
  name: 'Developer',
};

Chat.propTypes = {
  name: React.PropTypes.string,
};
