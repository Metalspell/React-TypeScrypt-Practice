import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  render(<App />);
  it('headitems render fine', () => {
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  })
})

