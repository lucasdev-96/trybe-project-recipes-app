import React, { useState, useEffect } from 'react';
import { arrayOf, string } from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

const IngredientsList = ({
  ingredients,
  ingredientsMeasures,
}) => {
  const { path } = useRouteMatch();
  const [isRecipeInProgress, setIsRecipeInProgress] = useState(false);

  useEffect(() => {
    if (path.includes('in-progress')) setIsRecipeInProgress(true);
  }, [path]);

  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        { ingredients.length > 0 && ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <label htmlFor={ ingredient }>
              {isRecipeInProgress && <input type="checkbox" id={ ingredient } /> }
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
}.isRequired;

export default IngredientsList;
