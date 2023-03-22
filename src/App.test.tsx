import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ChangeIcon } from './Components/ChangeIcon';
import '@testing-library/jest-dom'

test('button should be rendered', () => {
  render(<ChangeIcon />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
