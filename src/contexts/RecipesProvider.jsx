import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';

import RecipesContext from './RecipesContext';
import { fetchCategories, fetchRecipes } from '../services/theMealAPI';

import {
  DRINKS_CATEGORIES_ENDPOINT,
  DRINKS_RECIPES_ENDPOINT,
  FOODS_CATEGORIES_ENDPOINT,
  FOODS_RECIPES_ENDPOINT,
} from '../helpers/endpoints';

export default function RecipesProvider({ children }) {
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);

  const [foodsRecipes, setFoodsRecipes] = useState([]);
  const [drinksRecipes, setDrinksRecipes] = useState([]);

  const [inProgressMealsRecipes, setInProgressMealsRecipes] = useState({});
  const [inProgressCocktailsRecipes, setInProgressCocktailsRecipes] = useState({});

  const [inProgressRecipes, setInProgressRecipes] = useState({
    cocktails: inProgressCocktailsRecipes,
    meals: inProgressMealsRecipes,
  });

  const addNewInProgressMealsRecipes = (recipe) => {
    setInProgressMealsRecipes({
      ...inProgressMealsRecipes,
      ...recipe,
    });
  };

  const addNewInProgressCocktailsRecipes = (recipe) => {
    setInProgressCocktailsRecipes({
      ...inProgressCocktailsRecipes,
      ...recipe,
    });
  };

  const context = {
    categories: {
      foods: foodsCategories,
      drinks: drinksCategories,
    },
    recipes: {
      foods: foodsRecipes,
      drinks: drinksRecipes,
    },
    inProgressRecipes,
    setFoodsRecipes,
    setDrinksRecipes,
    foodsRecipes,
    drinksRecipes,
    addNewInProgressMealsRecipes,
    addNewInProgressCocktailsRecipes,
  };

  useEffect(() => {
    setInProgressRecipes({
      cocktails: inProgressCocktailsRecipes,
      meals: inProgressMealsRecipes,
    });
  }, [inProgressCocktailsRecipes, inProgressMealsRecipes]);

  useEffect(() => {
    const setFoodsAndDrinks = async () => {
      setFoodsCategories(await fetchCategories(FOODS_CATEGORIES_ENDPOINT));
      setDrinksCategories(await fetchCategories(DRINKS_CATEGORIES_ENDPOINT));

      setFoodsRecipes(await fetchRecipes(FOODS_RECIPES_ENDPOINT));
      setDrinksRecipes(await fetchRecipes(DRINKS_RECIPES_ENDPOINT));
    };

    setFoodsAndDrinks();
  }, []);

  return (
    <RecipesContext.Provider value={ { ...context } }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element,
}.isRequired;
