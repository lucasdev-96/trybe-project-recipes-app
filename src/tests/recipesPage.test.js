import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndProvider from './renderWithRouterAndProvider';
import {
  drinksCategories,
  drinksRecipes,
  foodsCategories,
  foodsRecipes,
} from './mocks/recipesPageData';
import App from '../App';

const mealsRecipes = Object.values(foodsRecipes)[0];
const mealsCategories = Object.values(foodsCategories)[0];

const cocktailsRecipes = Object.values(drinksRecipes)[0];
const cocktailsCategories = Object.values(drinksCategories)[0];

describe('Tela de comidas', () => {
  test('Tem os data-testids de todos os 12 cards da tela de comidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(foodsRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');

    const recipeAmount = 12;

    await waitFor(() => {
      for (let index = 0; index < recipeAmount; index += 1) {
        screen.getByTestId(`${index}-recipe-card`);
        screen.getByTestId(`${index}-card-img`);
        screen.getByTestId(`${index}-card-name`);
      }
    });
  });

  test('Aparece as 12 primeiras receitas na tela de comida', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(foodsRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');

    await waitFor(() => {
      mealsRecipes.forEach((recipe) => {
        expect(screen.getByText(recipe.strMeal)).toBeInTheDocument();
        expect(screen.getByAltText(recipe.strMeal)).toBeInTheDocument();
        expect(screen.getByAltText(recipe.strMeal))
          .toHaveProperty('src', recipe.strMealThumb);
      });
    });
  });

  test('Deve mostrar as 5 primeiras categorias de comidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(foodsCategories),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');

    await waitFor(() => {
      mealsCategories.forEach((category) => {
        expect(screen.getByText(category.strCategory)).toBeInTheDocument();
      });
    });
  });

  test('Ao clicar em uma receita, deve redirecionar'
  + ' para a pagina de detalhes', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(foodsRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/comidas');

    const firstRecipe = await screen.findByTestId('0-recipe-card');
    userEvent.click(firstRecipe);

    expect(history.location.pathname).toBe('/comidas/1');
  });
});

describe('Tela de bebidas', () => {
  test('Tem os data-testids de todos os 12 cards da tela de bebidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinksRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');

    const recipesAmount = 12;

    await waitFor(() => {
      for (let index = 0; index < recipesAmount; index += 1) {
        screen.getByTestId(`${index}-recipe-card`);
        screen.getByTestId(`${index}-card-img`);
        screen.getByTestId(`${index}-card-name`);
      }
    });
  });

  test('Aparece as 12 primeiras receitas na tela de comida', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinksRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');

    await waitFor(() => {
      cocktailsRecipes.forEach((recipe) => {
        expect(screen.getByText(recipe.strDrink)).toBeInTheDocument();
        expect(screen.getByAltText(recipe.strDrink)).toBeInTheDocument();
        expect(screen.getByAltText(recipe.strDrink))
          .toHaveProperty('src', recipe.strDrinkThumb);
      });
    });
  });

  test('Deve mostrar as 5 primeiras categorias de bebidas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinksCategories),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');

    await waitFor(() => {
      cocktailsCategories.forEach((category) => {
        expect(screen.getByText(category.strCategory)).toBeInTheDocument();
      });
    });
  });

  test('Ao clicar em uma receita, deve redirecionar'
  + ' para a pagina de detalhes', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinksRecipes),
    });

    const { history } = renderWithRouterAndProvider(<App />);
    history.push('/bebidas');

    const firstRecipe = await screen.findByTestId('0-recipe-card');
    userEvent.click(firstRecipe);

    expect(history.location.pathname).toBe('/bebidas/1');
  });
});
