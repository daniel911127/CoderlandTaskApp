import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

describe('HomeScreen', () => {
  it('navega a Tasks y Listado al presionar los botones', () => {
    const navigate = jest.fn();
    const navigation = { navigate } as any;
    const route = { key: 'Home', name: 'Home' } as any;

    const { getByText } = render(<HomeScreen navigation={navigation} route={route} />);

    fireEvent.press(getByText('Tasks'));
    expect(navigate).toHaveBeenCalledWith('Tasks');

    fireEvent.press(getByText('List'));
    expect(navigate).toHaveBeenCalledWith('Listado');
  });
});