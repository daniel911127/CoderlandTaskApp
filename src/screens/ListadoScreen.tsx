import React, { useEffect, useState } from 'react';
import {
  View, FlatList, ActivityIndicator, StyleSheet,
} from 'react-native';
import ElementCard from '../components/ElementCard';

interface ElementItem {
  id: string;
  name: string;
  avatar: string;
}

export default function ListadoScreen() {
  const [data, setData] = useState<ElementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 20 }}
      renderItem={({ item }) => (
        <ElementCard name={item.name} avatar={item.avatar} />
      )}
    />
  );
}

const styles = StyleSheet.create({});
