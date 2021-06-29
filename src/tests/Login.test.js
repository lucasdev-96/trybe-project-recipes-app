import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testes da pagina de Login', () => {
  test('Verifica se existe o campo login, senha e o botao', () => {
    const { getByText } = render(<App />);
    const inputEmail = getByText(/email/i);
    const inputPassword = getByText(/password/i);
    const button = getByText(/to enter/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
