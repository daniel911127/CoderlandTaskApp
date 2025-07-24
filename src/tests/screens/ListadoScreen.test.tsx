import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ListadoScreen from '../../screens/ListadoScreen';

// Mock de fetch global
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: '1', name: 'Pauline Blanda', avatar: 'https://cdn.fakercloud.com/avatars/mkginfo_128.jpg' },
      { id: '2', name: 'Marguerite Turner', avatar: 'https://cdn.fakercloud.com/avatars/alxndrustinov_128.jpg' },
    ]),
  })
) as jest.Mock;

describe('ListadoScreen', () => {
  it('muestra los elementos después de cargar', async () => {
    const { getByText } = render(<ListadoScreen />);
    await waitFor(() => {
      expect(getByText('Pauline Blanda')).toBeTruthy();
      expect(getByText('Marguerite Turner')).toBeTruthy();
    });
  });
});