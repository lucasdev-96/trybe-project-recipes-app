import React, { useContext, useState } from 'react';
import { string } from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../styles/recipeDetailsHeader.css';
import RecipesContext from '../contexts/RecipesContext';

const copy = require('clipboard-copy');

const RecipeDetailsHeader = ({
  recipeThumb,
  recipeTitle,
  recipeCategory,
  handleFavoriteClick,
}) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [hasLinkCopied, setHasLinkCopied] = useState(false);
  const { favoriteRecipes } = useContext(RecipesContext);
  const isRecipeFavorite = favoriteRecipes.includes(id);

  const handleShareClick = () => {
    copy(`http://localhost:3000${pathname.split('/in-progress')[0]}`);

    setHasLinkCopied(true);

    const messageDuration = 3000;
    setTimeout(() => {
      setHasLinkCopied(false);
    }, messageDuration);
  };

  return (
    <header className="recipe-details-header">
      <img
        src={ recipeThumb }
        alt={ recipeTitle }
        data-testid="recipe-photo"
      />
      <div className="content">
        <div>
          <h1 data-testid="recipe-title">{recipeTitle}</h1>
          <span data-testid="recipe-category">{recipeCategory}</span>
        </div>
        <div>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ handleShareClick }
          >
            <img src={ shareIcon } alt="Compartilhar" />
            {hasLinkCopied && 'Link copiado!'}
          </button>

          <button
            type="button"
            onClick={ handleFavoriteClick }
          >
            <img
              data-testid="favorite-btn"
              src={ isRecipeFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="Favoritar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

RecipeDetailsHeader.propTypes = {
  recipeThumb: string,
  recipeTitle: string,
  recipeCategory: string,
}.isRequired;

export default RecipeDetailsHeader;
