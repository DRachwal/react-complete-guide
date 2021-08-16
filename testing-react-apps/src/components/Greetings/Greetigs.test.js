import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greetings from './Greetings';

describe('Greetings component', () => {
    test('renders Hello world as text', () => {
        render(<Greetings />);
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Good to see you if the button was NOT clicked', () => {
        render(<Greetings />);
        
        const outputElement = screen.getByText('Good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders Changed if the button was clicked', () => {
        render(<Greetings/>);

        const buttonElement = screen.getByText('Change');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('not renders Good to see you if the button was clicked', () => {
        render(<Greetings />);

        const buttonElement = screen.getByText('Change');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('Good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })
});
