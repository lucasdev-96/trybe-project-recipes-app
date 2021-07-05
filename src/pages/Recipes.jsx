import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Categories from '../components/Categories';
import Header from '../components/Header';
import RecipesList from '../components/RecipesList';
import RecipesContext from '../contexts/RecipesContext';
import useRecipesFilter from '../hooks/useRecipesFilter';

export default function Recipes() {
  const { path } = useRouteMatch();
  const [isRecipesFoods, setIsRecipesFoods] = useState(true);
  const [isRecipesDrinks, setIsRecipesDrinks] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { categories, recipes, setfoodOrDrinksPathName } = useContext(RecipesContext);

  const { filterDrinksByCategory, filterFoodsByCategory } = useRecipesFilter();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (isRecipesDrinks) filterDrinksByCategory(category, selectedCategory);
    if (isRecipesFoods) filterFoodsByCategory(category, selectedCategory);
  };

  useEffect(() => {
    setIsRecipesFoods(path === '/comidas');
    setIsRecipesDrinks(path === '/bebidas');
    setfoodOrDrinksPathName(path);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div>
      {isRecipesFoods && <Header title="Comidas" /> }
      {isRecipesDrinks && <Header title="Bebidas" /> }

      {isRecipesFoods && <Categories
        categories={ categories.foods }
        handleCategoryClick={ handleCategoryClick }
      /> }
      {isRecipesDrinks && <Categories
        categories={ categories.drinks }
        handleCategoryClick={ handleCategoryClick }
      /> }

      {isRecipesFoods && <RecipesList recipes={ recipes.foods } /> }
      {isRecipesDrinks && <RecipesList recipes={ recipes.drinks } /> }

      <BottomMenu />
    </div>
  );
}
