import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import RecipeDetailsHeader from '../components/RecipeDetailsHeader';
import { fetchRecipeDetails } from '../services/theMealAPI';
import { DRINKS_RECIPE_DETAILS, FOODS_RECIPE_DETAILS } from '../helpers/endpoints';
import IngredientsList from '../components/IngredientsList';
import RecipesContext from '../contexts/RecipesContext';

const RecipeInProgress = () => {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const [recipeType, setRecipeType] = useState('');
  const [recipe, setRecipe] = useState({});
  const { inProgressRecipes } = useContext(RecipesContext);

  const {
    addNewInProgressMealsRecipes,
    addNewInProgressCocktailsRecipes,
  } = useContext(RecipesContext);

  const recipeThumb = recipe[`str${recipeType}Thumb`];
  const recipeTitle = recipe[`str${recipeType}`];
  const recipeCategory = recipeType === 'Meal'
    ? recipe.strCategory : recipe.strAlcoholic;

  const ingredients = Object.entries(recipe)
    .filter((el) => el[0].includes('strIngredient') && el[1])
    .reduce((acc, el) => [...acc, el[1]], []);

  const usedIngredients = inProgressRecipes.cocktails[id] || inProgressRecipes.meals[id];

  const ingredientsMeasures = Object.entries(recipe)
    .filter((el) => el[0].includes('strMeasure') && el[1] !== '')
    .reduce((acc, el) => [...acc, el[1]], []);

  const handleIngredientChecked = ({ target }) => {
    if (target.checked) {
      target.parentNode.classList.add('checked');
      const ingredient = target.nextSibling.innerHTML;

      switch (recipeType) {
      case 'Meal':
        addNewInProgressMealsRecipes(id, ingredient);
        break;
      case 'Drink':
        addNewInProgressCocktailsRecipes(id, ingredient);
        break;
      default:
      }
    } else {
      target.parentNode.classList.remove('checked');
    }
  };

  // Busca a receita e seta o tipo dela
  useEffect(() => {
    const recipeUrl = path.split('/')[1];

    let endpoint;

    switch (recipeUrl) {
    case 'comidas':
      setRecipeType('Meal');
      endpoint = FOODS_RECIPE_DETAILS + id;
      break;
    case 'bebidas':
      setRecipeType('Drink');
      endpoint = DRINKS_RECIPE_DETAILS + id;

      break;
    default:
    }
    fetchRecipeDetails(endpoint).then((data) => {
      setRecipe(data);
    });
  }, [path, id]);

  return (
    <>
      <RecipeDetailsHeader
        recipeThumb={ recipeThumb }
        recipeTitle={ recipeTitle }
        recipeCategory={ recipeCategory }
      />
      <main>

        <IngredientsList
          ingredients={ ingredients }
          ingredientsMeasures={ ingredientsMeasures }
          handleIngredientChecked={ handleIngredientChecked }
          usedIngredients={ usedIngredients }
        />

        <p data-testid="instructions">{ recipe.strInstructions }</p>

        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar receita
        </button>
      </main>

      <BottomMenu />
    </>
  );
};

export default RecipeInProgress;
