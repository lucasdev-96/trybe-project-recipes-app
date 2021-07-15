import React, { useContext, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import RenderMapDetails from '../components/renderMapDetails';
import RecipesContext from '../contexts/RecipesContext';
import { detailsUrl } from '../helpers/endpoints';
import { fetchRecipesFoodDetails } from '../services/theMealAPI';

function RecipesDrinkDetails() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const key = 'drink';
  const { setdrinkDetailRecipes } = useContext(RecipesContext);

  const requestApiDetails = async () => {
    const result = await fetchRecipesFoodDetails(detailsUrl(id)[key]);
    if (result) {
      setdrinkDetailRecipes(result);
    } else setdrinkDetailRecipes([]);
  };

  useEffect(() => {
    requestApiDetails();
  }, []);

  return (
    <RenderMapDetails path={ path } />
  );
}

export default RecipesDrinkDetails;
