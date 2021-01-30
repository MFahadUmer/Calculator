import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display Component Tests', () => {
  it('should display text ', () => {
    render(<Display calculate="15" />);
    expect(screen.getByText('15')).toBeTruthy();
  });

  it('should display text ', () => {
    render(<Display calculate="20" />);
    expect(screen.getByText('20')).toBeTruthy();
  });

  it('matches the snapshot of display component', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
