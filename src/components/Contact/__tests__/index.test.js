import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';


afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<Contact></Contact>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact></Contact>);
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('content visible', () => {
  it('inserts contact text', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('contactTest')).toHaveTextContent('Contact me');
  })

  it('inserts button text', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('buttonTest')).toHaveTextContent('Submit');
  })
})
