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
  const [foodOrDrinksPathName, setfoodOrDrinksPathName] = useState('');
  const [foodsRecipes, setFoodsRecipes] = useState([]);
  const [drinksRecipes, setDrinksRecipes] = useState([]);
  const [foodDetailRecipes, setFoodDetailRecipes] = useState([]);
  const [drinkdetailRecipes, setdrinkDetailRecipes] = useState([]);

  const context = {
    categories: {
      foods: foodsCategories,
      drinks: drinksCategories,
    },
    recipes: {
      foods: foodsRecipes,
      drinks: drinksRecipes,
    },
    detailRecipes: {
      foods: foodDetailRecipes,
      drinks: drinkdetailRecipes,
    },
    setFoodsRecipes,
    setDrinksRecipes,
    foodOrDrinksPathName,
    setfoodOrDrinksPathName,
    setFoodDetailRecipes,
    setdrinkDetailRecipes,
  };

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
