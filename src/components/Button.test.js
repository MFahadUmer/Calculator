import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('button component tests', () => {
  it('should render button', () => {
    render(<Button value={5} />);
    expect(screen.getByText(5)).toBeTruthy();
  });

  it('matches the button component snapshot', () => {
    const tree = renderer.create(<Button value={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
