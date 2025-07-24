import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../redux/Store';
import TasksScreen from '../../screens/TasksScreen';

describe('TasksScreen', () => {
  it('renders and adds a task', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <TasksScreen />
      </Provider>
    );

    // Abre el modal
    fireEvent.press(getByText('New Task'));

    // Ahora sí existe el input
    const input = getByPlaceholderText('New Task Name');
    fireEvent.changeText(input, 'Mi nueva tarea');
    fireEvent.press(getByText('Add'));

    expect(getByText('Mi nueva tarea')).toBeTruthy();
  });
});