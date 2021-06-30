import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndProvider from '../renderWithRouterAndProvider';
import { drinksRecipes, foodsRecipes } from './mocks/recipesPageData';
import App from '../App';

const testDataID = () => {
  for (let index = 0; index < 12; index += 1) {
    expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    expect(screen.getByTestId(`${index}-card-img`)).toBeInTheDocument();
    expect(screen.getByTestId(`${index}-card-name`)).toBeInTheDocument();
  }
};

describe('Tela principal', () => {
  test('Tem os data-testids de todos os 12 cards da tela de comidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);

    history.push('/comidas');
    testDataID();
  });

  test('Tem os data-testids de todos os 12 cards da tela de bebidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);

    history.push('/bebidas');
    testDataID();
  });

  test('Aparece as 12 primeiras receitas na tela de comida', () => {
    const { history } = renderWithRouterAndProvider(<App />);

    history.push('/comidas');

    foodsRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.strMeal)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strMeal)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strMeal))
        .toHaveProperty('src', recipe.strMealThumb);
    });
  });

  test('Aparece as 12 primeiras receitas na tela de bebidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);

    history.push('/bebidas');
    console.log(history);

    drinksRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.strDrink)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strDrink)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strDrink))
        .toHaveProperty('src', recipe.strDrinkThumb);
    });
  });
});
