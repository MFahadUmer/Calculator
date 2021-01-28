import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel';

describe('ButtonPanel Tests', () => {
  it('matches the buttonpanel component snapshot', () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
