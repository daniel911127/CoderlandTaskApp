import React, { useState } from 'react';
import {
  View, Text, Button, FlatList, Modal, TextInput, StyleSheet
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addTask } from '../redux/TasksSlice';

export default function TasksScreen() {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="New Task" onPress={() => setModalVisible(true)} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.task}>{item.description}</Text>}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="New Task Name"
            value={taskText}
            onChangeText={setTaskText}
            style={styles.input}
          />
          <Button title="Add" onPress={handleAddTask} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  task: { padding: 10, borderBottomWidth: 1 },
  modalContainer: {
    marginTop: 'auto',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 },
});
