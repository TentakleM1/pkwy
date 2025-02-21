import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomButton, Input } from '../components';

export const ChatScreen: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3450');

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onerror = (e) => {
      console.log('WebSocket error:', e.message);
    };

    socket.onmessage = (e) => {
      console.log('Received message:', e.data);
    };

    socket.onclose = (e) => {
      console.log('WebSocket closed:', e.code, e.reason);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({message}));
      console.log('Message sent:', message);
      setMessage('');
    } else {
      console.log('WebSocket is not open');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <Text>Chat</Text>
      </View>
      <View style={styles.message}>
        <Input
          value={message}
          placeholder="Write message"
          onChangeText={setMessage}
        />
        <CustomButton title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messages: {
    flex: 5,
  },
  message: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
