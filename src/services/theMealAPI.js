import { ingredients } from '../helpers/endpoints';

export const fetchCategories = async (endpoint) => {
  const response = await fetch(endpoint);
  const categories = await response.json();
  const categoriesAmount = 4;

  return Object.values(categories)[0]
    .filter((category, index) => index <= categoriesAmount);
};

export const fetchRecipes = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();
  const recipesAmount = 11;

  const result = Object.values(recipes)[0];
  if (result != null && result.length > 0) {
    return result.filter((recipe, index) => index <= recipesAmount);
  }alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
};

export const fetchRecipesFoodDetails = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();
  return Object.values(recipes)[0];
};

export const fetchRecipeDetails = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipeDetails = await response.json();

  return Object.values(recipeDetails)[0][0];
};

export const fetchIngredients = async (key, setState) => {
  const eleven = 11;
  const response = await fetch(ingredients()[key]);
  const ingredientsResult = await response.json();
  const result = Object.values(ingredientsResult)[0];
  const filter = result.filter((ele, index) => index <= eleven);
  if (filter) setState(filter);
  else setState([]);
};
