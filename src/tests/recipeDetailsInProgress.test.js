import React from 'react';
import { screen } from '@testing-library/dom';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import recipeDetailsData from './mocks/recipeDetailsData';
import API from '../services/theMealAPI';

describe('Tela de receita em progresso', () => {
  test('O header possui o titulo, imagem, categoria da receita', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(recipeDetailsData),
    });
    //
    const { history } = renderWithRouter(<App />);
    history.push('/comidas/52977/in-progress');

    expect(screen.getByText('Corba')).toBeInTheDocument();
  });
});
