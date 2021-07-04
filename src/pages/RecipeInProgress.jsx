import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import RecipeDetailsHeader from '../components/RecipeDetailsHeader';
import { fetchRecipeDetails } from '../services/theMealAPI';
import { DRINKS_RECIPE_DETAILS, FOODS_RECIPE_DETAILS } from '../helpers/endpoints';

const RecipeInProgress = () => {
  const { path, params } = useRouteMatch();
  const [recipeType, setRecipeType] = useState('');
  const [recipe, setRecipe] = useState({});

  const recipeThumb = recipe[`str${recipeType}Thumb`];
  const recipeTitle = recipe[`str${recipeType}`];
  const recipeCategory = recipeType === 'Meal'
    ? recipe.strCategory : recipe.strAlcoholic;

  useEffect(() => {
    const recipeUrl = path.split('/')[1];
    const { id: recipeId } = params;

    const getRecipe = async (endpoint) => {
      setRecipe(await fetchRecipeDetails(endpoint));
    };

    switch (recipeUrl) {
    case 'comidas':
      setRecipeType('Meal');
      getRecipe(FOODS_RECIPE_DETAILS + recipeId);
      break;
    case 'bebidas':
      setRecipeType('Drink');
      getRecipe(DRINKS_RECIPE_DETAILS + recipeId);
      break;
    default:
    }
  }, [path, params]);

  return (
    <>
      <RecipeDetailsHeader
        recipeThumb={ recipeThumb }
        recipeTitle={ recipeTitle }
        recipeCategory={ recipeCategory }
      />
      <main>
        instrução
      </main>

      <BottomMenu />
    </>
  );
};

export default RecipeInProgress;
