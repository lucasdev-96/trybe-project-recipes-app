import { useContext } from 'react';
import RecipesContext from '../contexts/RecipesContext';
import { fetchRecipes } from '../services/theMealAPI';

import {
  DRINKS_RECIPES_ENDPOINT,
  FILTER_DRINKS_BY_CATEGORY_ENDPOINT,
  FILTER_FOODS_BY_CATEGORY_ENDPOINT,
  FOODS_RECIPES_ENDPOINT,
} from '../helpers/endpoints';

export default function useRecipesFilter() {
  const {
    setFoodsRecipes,
    setDrinksRecipes,
  } = useContext(RecipesContext);

  const filterDrinksByCategory = async (category, prevCategory) => {
    let recipes;

    switch (category) {
    case prevCategory:
      recipes = await fetchRecipes(DRINKS_RECIPES_ENDPOINT);
      break;
    case 'All':
      recipes = await fetchRecipes(DRINKS_RECIPES_ENDPOINT);
      break;
    default:
      recipes = await fetchRecipes(FILTER_DRINKS_BY_CATEGORY_ENDPOINT + category);
      break;
    }

    setDrinksRecipes(recipes);
  };

  const filterFoodsByCategory = async (category, prevCategory) => {
    let recipes;

    switch (category) {
    case prevCategory:
      recipes = await fetchRecipes(FOODS_RECIPES_ENDPOINT);
      break;
    case 'All':
      recipes = await fetchRecipes(FOODS_RECIPES_ENDPOINT);
      break;
    default:
      recipes = await fetchRecipes(FILTER_FOODS_BY_CATEGORY_ENDPOINT + category);
      break;
    }

    setFoodsRecipes(recipes);
  };

  return {
    filterDrinksByCategory,
    filterFoodsByCategory,
  };
}
