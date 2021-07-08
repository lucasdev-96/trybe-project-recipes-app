import React, { useContext, useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';

function ExploreFoodOrDrink() {
  const { recipes } = useContext(RecipesContext);
  const [keyName, setKeyName] = useState('');
  const { url } = useRouteMatch();

  useEffect(() => {
    if (url.includes('comidas'))setKeyName('foods');
    if (url.includes('bebidas'))setKeyName('drinks');
  }, []);
  const arrayChange = Object.entries(recipes.foods);
  // console.log(arrayChange);
  const filterByIngredients = arrayChange.filter((element) => element[1].includes('strIngredient'));
  console.log(filterByIngredients);
  return (
    <h1> ainnn </h1>
  );
}

export default ExploreFoodOrDrink;
