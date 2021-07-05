import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndProvider from '../renderWithRouterAndProvider';
import { drinksRecipes, foodsCategories, foodsRecipes } from './mocks/recipesPageData';
import App from '../App';

const testDataID = () => {
  const recipesAmount = 12;
  for (let index = 0; index < recipesAmount; index += 1) {
    expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    expect(screen.getByTestId(`${index}-card-img`)).toBeInTheDocument();
    expect(screen.getByTestId(`${index}-card-name`)).toBeInTheDocument();
  }
};

describe('Tela de comidas', () => {
  test('Tem os data-testids de todos os 12 cards da tela de comidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');
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

  test('Deve mostrar as 5 primeiras categorias de comidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');
    foodsCategories.forEach((category) => {
      expect(screen.getByText(category.strCategory)).toBeInTheDocument();
    });
  });

  test('Ao clicar em uma receita, deve redirecionar para a pagina de detalhes', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');

    const firstRecipe = screen.getByTestId('0-recipe-card');
    userEvent.click(firstRecipe);

    expect(history.location.pathname).toBe('/comidas/1');
  });
});

describe('Tela de bebidas', () => {
  test('Tem os data-testids de todos os 12 cards da tela de bebidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');
    testDataID();
  });

  test('Aparece as 12 primeiras receitas na tela de bebidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');
    drinksRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.strDrink)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strDrink)).toBeInTheDocument();
      expect(screen.getByAltText(recipe.strDrink))
        .toHaveProperty('src', recipe.strDrinkThumb);
    });
  });

  test('Deve mostrar as 5 primeiras categorias de bebidas', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');
    foodsCategories.forEach((category) => {
      expect(screen.getByText(category.strCategory)).toBeInTheDocument();
    });
  });

  test('Ao clicar em uma receita, deve redirecionar para a pagina de detalhes', () => {
    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');

    const firstRecipe = screen.getByTestId('0-recipe-card');
    userEvent.click(firstRecipe);

    expect(history.location.pathname).toBe('/bebidas/1');
  });
});
