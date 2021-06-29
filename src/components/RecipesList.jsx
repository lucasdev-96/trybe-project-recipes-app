import React from 'react';
import { arrayOf, object } from 'prop-types';

export default function RecipesList({ recipes }) {
  const hasRecipes = recipes.length > 0;
  console.log(recipes);

  return (
    <div>
      {hasRecipes && recipes.map((recipe, index) => (
        <div
          key={ recipe.idMeal || recipe.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            width="100"
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt=""
            data-testid={ `${index}-card-img` }
          />
          <h2
            data-testid={ `${index}-card-name` }
          >
            {recipe.strMeal || recipe.strDrink}
          </h2>
        </div>
      ))}
    </div>
  );
}

RecipesList.propTypes = {
  recipes: arrayOf(object),
}.isRequired;
