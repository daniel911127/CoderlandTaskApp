import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  name: string;
  avatar: string;
}

export default function ElementCard({ name, avatar }: Props) {
  return (
    <View style={styles.item}>
      {/* <Image source={{ uri: avatar }} style={styles.avatar} /> */}
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} /> 
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
});