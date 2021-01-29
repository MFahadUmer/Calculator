import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component Tests', () => {
  it('should render the text welcome to our page', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeTruthy();
  });

  it('matches the home component snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
