import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component Tests', () => {
  it('matches the button component snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
