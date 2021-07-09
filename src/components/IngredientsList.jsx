import React, { useState, useEffect } from 'react';
import { arrayOf, func, string } from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import '../styles/IngredientsList.css';

const IngredientsList = ({
  ingredients,
  ingredientsMeasures,
  handleIngredientChecked,
  usedIngredients = [],
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
        { ingredients.length > 0 && ingredients.map((ingredient, index) => {
          const hasUsed = usedIngredients.includes(ingredient) && isRecipeInProgress;
          return (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <label
                htmlFor={ ingredient }
                className={ hasUsed ? 'checked' : '' }
              >
                {isRecipeInProgress
              && <input
                type="checkbox"
                id={ ingredient }
                checked={ hasUsed }
                onChange={ handleIngredientChecked }
              />}
                <span data-testid={ `${index}-ingredient-name-and-measure` }>
                  {ingredient}
                </span>
                <span data-testid={ `${index}-ingredient-name-and-measure` }>
                  {ingredientsMeasures[index]}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

IngredientsList.propTypes = {
  ingredients: arrayOf(string).isRequired,
  ingredientsMeasures: arrayOf(string).isRequired,
  usedIngredients: arrayOf(string),
  handleIngredientChecked: func,
};

IngredientsList.defaultProps = {
  usedIngredients: [],
  handleIngredientChecked: () => {},
};

export default IngredientsList;
