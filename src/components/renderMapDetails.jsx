import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../contexts/RecipesContext';
import { detailsUrl } from '../helpers/endpoints';

function RenderMapDetails({ id, path }) {
  const { detailRecipes,
    setFoodDetailRecipes,
    setdrinkDetailRecipes } = useContext(RecipesContext);
  const { foods, drinks } = detailRecipes;
  const [keyUrl, setKeyUrl] = useState();
  const result = path.split('/')[1];

  const requestApiDetails = async () => {
    const response = await fetch(detailsUrl(id)[keyUrl]);
    const date = await response.json();

    if (date && result === 'comidas') {
      setFoodDetailRecipes(date);
    } else setFoodDetailRecipes([]);

    if (date && result === 'bebidas') {
      setdrinkDetailRecipes(date);
    } else setdrinkDetailRecipes([]);
  };

  useEffect(() => {
    requestApiDetails();
    if (result === 'comidas') setKeyUrl('food');

    if (result === 'bebidas') setKeyUrl('drink');
  }, [foods, drinks]);

  return (
    <div>
      <button onClick={requestApiDetails}></button>
    </div>
  );
}

RenderMapDetails.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
}.isRequired;

export default RenderMapDetails;

// <img data-testid="recipe-photo" />
// <h1 data-testid="recipe-title"></h1>
// <button data-testid="share-btn">Compartilhar</button>
// <button data-testid="favorite-btn"></button>
// <p data-testid="recipe-category"></p>
