import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Calculator Functionality Test', () => {
  it('should renders text Lets do some math', () => {
    render(<App />);
    expect(screen.getByText('Let’s do some math!')).toBeTruthy();
  });

  it('should renders button with text 9', () => {
    render(<App />);
    expect(screen.getByText('9')).toBeTruthy();
  });

  it('should renders button with text 5', () => {
    render(<App />);
    expect(screen.getByText('5')).toBeTruthy();
  });

  it('should display the addition of 7 and 8', () => {
    render(<App />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('15')).toBeTruthy();
  });

  it('should display the multiplication of 8 and 7', () => {
    render(<App />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('X'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('56')).toBeTruthy();
  });

  it('matches the app component snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
