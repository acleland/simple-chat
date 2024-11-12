import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Should ', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const email = screen.getByText(/email/i);
    expect(email).toBeInTheDocument();
  });
});
