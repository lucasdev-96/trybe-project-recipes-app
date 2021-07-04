import React from 'react';
import { string } from 'prop-types';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const RecipeDetailsHeader = ({
  recipeThumb,
  recipeTitle,
  recipeCategory,
}) => (
  <header>
    <img
      width="100%"
      src={ recipeThumb }
      alt={ recipeTitle }
      data-testid="recipe-photo"
    />
    <h1 data-testid="recipe-title">{recipeTitle}</h1>
    <span data-testid="recipe-category">{recipeCategory}</span>
    <div>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="Compartilhar" />
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ whiteHeartIcon } alt="Favoritar" />
      </button>
    </div>
  </header>
);

RecipeDetailsHeader.propTypes = {
  recipeThumb: string,
  recipeTitle: string,
  recipeCategory: string,
}.isRequired;

export default RecipeDetailsHeader;
