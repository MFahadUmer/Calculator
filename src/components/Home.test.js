import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home Component Tests', () => {
  it('matches the home component snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
