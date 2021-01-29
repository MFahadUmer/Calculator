import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

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

it('contains 3 links with different urls', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
    container,
  );
  expect(screen.getByText('Home').href).toBe('http://localhost/');
  expect(screen.getByText('Calculator').href).toBe('http://localhost/calculator');
  expect(screen.getByText('Quote Of The Day').href).toBe('http://localhost/quote');
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
