import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import RecipeDetailsHeader from '../components/RecipeDetailsHeader';
import { fetchRecipeDetails } from '../services/theMealAPI';
import { DRINKS_RECIPE_DETAILS, FOODS_RECIPE_DETAILS } from '../helpers/endpoints';
import IngredientsList from '../components/IngredientsList';
import RecipesContext from '../contexts/RecipesContext';
import useLocalStorage from '../hooks/useLocalStorage';
import useIngredients from '../hooks/useIngredients';
import DetailsInstructions from '../components/DetailsIntructions';
import DetailsRecipeButton from '../components/DetailsRecipeButton';
import checkIcon from '../images/checkIcon.svg';

const RecipeInProgress = () => {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const { inProgressRecipes } = useContext(RecipesContext);
  const { updateFavoriteRecipes, updateDoneRecipes } = useLocalStorage();
  const {
    addNewInProgressMealsRecipes,
    addNewInProgressCocktailsRecipes,
  } = useContext(RecipesContext);

  const [recipeType, setRecipeType] = useState('');
  const [recipe, setRecipe] = useState({});
  const { ingredients, ingredientsMeasures } = useIngredients(recipe);
  const [usedIngredients = [], setUsedIngredients] = useState([]);
  const [isRecipeCompleted, setIsRecipeCompleted] = useState(false);

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

  const handleFavoriteClick = () => {
    updateFavoriteRecipes(recipe, recipeType);
  };

  const handleDoneClick = () => updateDoneRecipes(recipe, recipeType);

  useEffect(() => {
    setUsedIngredients(inProgressRecipes.cocktails[id] || inProgressRecipes.meals[id]);
  }, [inProgressRecipes, id]);

  useEffect(() => {
    setIsRecipeCompleted(ingredients.length === usedIngredients.length);
    // setChangeBtn(isRecipeCompleted);
  }, [usedIngredients, ingredients]);

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
        recipeThumb={ recipe[`str${recipeType}Thumb`] }
        recipeTitle={ recipe[`str${recipeType}`] }
        recipeCategory={ recipe.strAlcoholic || recipe.strCategory }
        handleFavoriteClick={ handleFavoriteClick }
      />
      <main>

        <IngredientsList
          ingredients={ ingredients }
          ingredientsMeasures={ ingredientsMeasures }
          handleIngredientChecked={ handleIngredientChecked }
          usedIngredients={ usedIngredients }
        />

        <DetailsInstructions
          instructions={ recipe.strInstructions }
        />

        <Link
          to="/receitas-feitas"
        >
          <DetailsRecipeButton
            data-testid="finish-recipe-btn"
            disabled={ !isRecipeCompleted }
            onClick={ () => handleDoneClick() }
          >
            <img src={ checkIcon } alt="" />
            Finalizar receita
          </DetailsRecipeButton>
        </Link>
      </main>

    </>
  );
};

export default RecipeInProgress;
