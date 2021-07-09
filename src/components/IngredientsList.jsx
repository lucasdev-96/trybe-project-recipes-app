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
    <main className="ingredients-container">
      <h2>Ingredients</h2>
      <ul className="ingredients-list">
        { ingredients.length > 0 && ingredients.map((ingredient, index) => {
          const hasUsed = usedIngredients.includes(ingredient) && isRecipeInProgress;
          return (
            <li
              key={ index }
              data-testid={ `${index}-ingredient${isRecipeInProgress
                ? '-step' : '-name-and-measure'}` }
            >
              <label
                htmlFor={ ingredient }
                className={ hasUsed ? 'checked' : '' }
              >
                <div>
                  {isRecipeInProgress
              && <input
                type="checkbox"
                id={ ingredient }
                checked={ hasUsed }
                onChange={ handleIngredientChecked }
              />}
                  <span>{ingredient}</span>
                </div>
                <span>{ingredientsMeasures[index]}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </main>
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
