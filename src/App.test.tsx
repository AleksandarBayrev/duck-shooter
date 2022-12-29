import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Store } from './Store';
import { KeyHandler } from './KeyHandler';

test('renders learn react link', () => {
  const store = new Store();
  const keyHandler = new KeyHandler(store);
  render(<App store={store} keyHandler={keyHandler} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
