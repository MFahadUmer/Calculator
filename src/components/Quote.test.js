import React from 'react';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

describe('Quote Component Test', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render the text', () => {
    render(<Quote />);
    expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston')).toBeTruthy();
  });

  it('matches the navbar component snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
