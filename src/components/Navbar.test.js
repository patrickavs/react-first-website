import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders a heading', () => {
    render(<Navbar />);
    const heading = screen.getByText('Hi to everbody');
    expect(heading).toBeTruthy();
  });
});
