import React from 'react';
import { render, screen } from '@testing-library/react';
import {AddTodo} from "./AddTodo";


test('renders a Todo', () => {
    // Figure out how to stuff these props
    //render(<AddTodo/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
