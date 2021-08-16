import { render, screen } from '@testing-library/react';

import Async from './Async';

describe('Async component' , () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />);

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{
                id: 1, title: "Test"
            }]
        });
        const listItemElements = await screen.findAllByRole('listitem', {}, { timeout: 2000 });
        expect(listItemElements).not.toHaveLength(0);
    });
})