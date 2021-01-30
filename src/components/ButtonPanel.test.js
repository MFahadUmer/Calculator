import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel';

describe('button component tests', () => {
  it('matches the button component snapshot', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
