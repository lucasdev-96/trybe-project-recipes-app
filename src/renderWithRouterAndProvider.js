import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import RecipesContext from './contexts/RecipesContext';
import {
  foodsRecipes,
  drinksRecipes,
  drinksCategories,
  foodsCategories,
} from './tests/mocks/recipesPageData';

const renderWithRouterAndProvider = (component, state) => {
  const history = createMemoryHistory();

  const globalState = {
    recipes: {
      drinks: drinksRecipes,
      foods: foodsRecipes,
    },
    categories: {
      drinks: drinksCategories,
      foods: foodsCategories,
    },
  };

  return ({
    ...render(
      <Router history={ history }>
        <RecipesContext.Provider value={ state || globalState }>
          {component}
        </RecipesContext.Provider>
      </Router>,
    ),
    history,
  });
};

export default renderWithRouterAndProvider;
