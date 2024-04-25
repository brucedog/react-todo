import React from 'react';
import { render, screen } from '@testing-library/react';
import {NavBar} from "./NavBar";


test('renders a Todo', () => {
    // Figure out how to stuff these props
    render(<NavBar/>);
    const linkElement = screen.getByText(/navbar/i);
    expect(linkElement).toBeInTheDocument();
});
