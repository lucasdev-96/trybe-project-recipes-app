import React, { useState, useEffect } from 'react';
import { arrayOf, func, string } from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import '../styles/IngredientsList.css';

const IngredientsList = ({
  ingredients,
  ingredientsMeasures,
  handleIngredientChecked,
}) => {
  const { path } = useRouteMatch();
  const [isRecipeInProgress, setIsRecipeInProgress] = useState(false);

  useEffect(() => {
    if (path.includes('in-progress')) setIsRecipeInProgress(true);
  }, [path]);

  return (
    <>
      <h2>Ingredients</h2>
      <ul id="ingredients-list">
        { ingredients.length > 0 && ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <label htmlFor={ ingredient }>
              {isRecipeInProgress
              && <input
                type="checkbox"
                id={ ingredient }
                onClick={ handleIngredientChecked }
              />}
              <span>{ingredient}</span>
              <span>{ingredientsMeasures[index]}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

IngredientsList.propTypes = {
  ingredients: arrayOf(string),
  ingredientsMeasures: arrayOf(string),
  handleIngredientChecked: func,
}.isRequired;

export default IngredientsList;
