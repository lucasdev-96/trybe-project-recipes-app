import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchCategories, fetchRecipes } from '../services/theMealAPI';

const FOODS_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINKS_CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const FOODS_RECIPES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINKS_RECIPES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function RecipesProvider({ children }) {
  const [foodsCategories, setFoodsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [foodsRecipes, setFoodsRecipes] = useState([]);
  const [drinksRecipes, setDrinksRecipes] = useState([]);

  const context = {
    categories: {
      foods: foodsCategories,
      drinks: drinksCategories,
    },
    recipes: {
      foods: foodsRecipes,
      drinks: drinksRecipes,
    },
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
    <RecipesContext.Provider
      value={ {
        ...context,
      } }
    >
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element,
}.isRequired;
