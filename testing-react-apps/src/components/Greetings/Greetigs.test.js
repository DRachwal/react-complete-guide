import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

test('Hello world test', () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
})