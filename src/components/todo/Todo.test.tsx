import React from 'react';
import { render, screen } from '@testing-library/react';
import {Todo} from "./Todo";


test('renders a Todo', () => {
    // Figure out how to stuff these props
    //render(<Todo  deleteTodo={}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
