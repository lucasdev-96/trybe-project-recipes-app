import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRoute';

describe('Testes da pagina de Login', () => {
  test('Verifica se existe o campo login, senha e o botao', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputEmail = getByPlaceholderText(/email/i);
    const inputPassword = getByPlaceholderText(/password/i);
    const button = getByText(/to enter/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('Verifica  se apos os valores serem passados ao os inputs habilita '
  + 'o botao e vai para a pagina de Comidas', () => {
    const { getByPlaceholderText, getByText } = renderWithRouter(<App />);
    const inputEmail = getByPlaceholderText(/email/i);
    const inputPassword = getByPlaceholderText(/password/i);
    const button = getByText(/to enter/i);
    expect(button).toBeDisabled();
    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, '1234567');
    expect(inputEmail).toHaveValue('email@email.com');
    expect(inputPassword).toHaveValue('1234567');
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    expect(getByText(/comidas/i)).toBeInTheDocument();
  });
});
