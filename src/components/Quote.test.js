import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Navbar Componet Test', () => {
  it('matches the navbar component snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
