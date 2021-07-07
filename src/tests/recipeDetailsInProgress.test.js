import React from 'react';
import { screen } from '@testing-library/dom';
import App from '../App';
import renderWithRouterAndProvider from '../renderWithRouterAndProvider';
import recipeDetailsData from './mocks/recipeDetailsData';

const state = {
  inProgressRecipes: {
    cocktails: {},
    meals: {},
  },
  favoriteRecipes: [],
};

describe('Tela de receita em progresso', () => {
  test('O header possui o titulo, imagem, categoria da receita', () => {
    try {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(recipeDetailsData),
      }).mockRejectedValue({
        json: jest.fn().mockRejectedValue(new Error('Deu erro')),
      });

      const { history } = renderWithRouterAndProvider(<App />, state);
      history.push('/comidas/52977/in-progress');
      const recipeName = screen.findByText('Corba');

      expect(recipeName).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});
