import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Categories from '../components/Categories';
import RecipesList from '../components/RecipesList';
import RecipesContext from '../contexts/RecipesContext';

export default function Recipes() {
  const { path } = useRouteMatch();
  const [isRecipesFoods, setIsRecipesFoods] = useState(true);
  const [isRecipesDrinks, setIsRecipesDrinks] = useState(false);
  const { categories, recipes } = useContext(RecipesContext);

  useEffect(() => {
    setIsRecipesFoods(path === '/comidas');
    setIsRecipesDrinks(path === '/bebidas');
  }, [path]);

  return (
    <div>
      {isRecipesFoods && <Categories categories={ categories.foods } /> }
      {isRecipesDrinks && <Categories categories={ categories.drinks } /> }

      {isRecipesFoods && <RecipesList recipes={ recipes.foods } /> }
      {isRecipesDrinks && <RecipesList recipes={ recipes.drinks } /> }
    </div>
  );
}
