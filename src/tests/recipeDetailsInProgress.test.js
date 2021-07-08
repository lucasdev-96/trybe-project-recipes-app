import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import App from '../App';
import renderWithRouterAndProvider from './renderWithRouterAndProvider';
import recipeDetailsData from './mocks/recipeDetailsData';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

describe('Tela de receita em progresso', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(recipeDetailsData),
    });
  });

  test('O header possui o titulo, imagem, categoria da receita', async () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas/52977/in-progress');
    const { strMeal, strMealThumb, strCategory } = recipeDetailsData.meals[0];

    const recipePhoto = await screen.findByTestId('recipe-photo');
    await screen.findByRole('heading', { name: strMeal });
    await screen.findByText(strCategory);

    expect(recipePhoto).toHaveAttribute('src', strMealThumb);
  });

  test('Possui os botões de compartilhar e favorito', async () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas/52977/in-progress');

    const shareButton = await screen.findByTestId('share-btn');
    const favoriteButton = await screen.findByTestId('favorite-btn');

    expect(shareButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();

    expect(shareButton.firstChild).toHaveAttribute('src', shareIcon);
    expect(favoriteButton).toHaveAttribute('src', whiteHeartIcon);
  });
});
