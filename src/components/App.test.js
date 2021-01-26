import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
// import renderer from 'react-test-renderer';

describe('Timeline', () => {
  it('App renders text Lets do some math', () => {
    render(<App />);
    expect(screen.getByText('Let’s do some math!')).toBeTruthy();
  });

  it('App renders button with text 9', () => {
    render(<App />);
    expect(screen.getByText('9')).toBeTruthy();
  });

  it('App renders button with text 5', () => {
    render(<App />);
    expect(screen.getByText('5')).toBeTruthy();
  });
});
