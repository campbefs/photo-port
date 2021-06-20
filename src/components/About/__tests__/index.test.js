import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..'; // import component we will be tesitng

// This will ensure that after each test, we won't have any leftover memory data 
// that could give us false results.
afterEach(cleanup);

describe('About component', () => {
  // First Test - verify component is rendering
  it('renders', () => {
    render(<About />);
  });
  // In the first argument, a string declares what is being tested. 
  // In the second argument, a callback function runs the test.



  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
    
  })
})


