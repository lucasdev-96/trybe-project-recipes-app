import React, { useContext, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import RenderMapDetails from '../components/renderMapDetails';
import { detailsUrl } from '../helpers/endpoints';
import RecipesContext from '../contexts/RecipesContext';
import { fetchRecipesFoodDetails } from '../services/theMealAPI';

function RecipesFoodDetails() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { setFoodDetailRecipes } = useContext(RecipesContext);

  const key = 'food';

  const requestApiDetails = async () => {
    const result = await fetchRecipesFoodDetails(detailsUrl(id)[key]);
    if (result) {
      setFoodDetailRecipes(result);
    } else setFoodDetailRecipes([]);
  };

  useEffect(() => {
    requestApiDetails();
  }, []);

  return (
    <RenderMapDetails path={ path } />
  );
}

export default RecipesFoodDetails;
