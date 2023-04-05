import React, {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {
  Chat as PubNubChatComponent,
  MessageList,
  MessageInput,
} from '@pubnub/react-native-chat-components';
import {PubNubProvider} from 'pubnub-react';
import PubNub from 'pubnub';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Chat = () => {
  const currentChannel = 'Default';
  const theme = 'light';
  return (
    <PubNubProvider
      client={
        new PubNub({
          publishKey: 'myPublishKey',
          subscribeKey: 'mySubscribeKey',
          userId: 'myFirstUser',
        })
      }
    >
      <PubNubChatComponent {...{currentChannel, theme}}>
        <MessageList />
        <MessageInput />
      </PubNubChatComponent>
    </PubNubProvider>
  );
};
