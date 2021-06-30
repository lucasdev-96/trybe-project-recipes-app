import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

export default function RecipesList({ recipes }) {
  const hasRecipes = recipes.length > 0;
  const { path } = useRouteMatch();

  return (
    <div>
      {hasRecipes && recipes.map((recipe, index) => {
        const recipeID = recipe.idMeal || recipe.idDrink;
        const recipeName = recipe.strMeal || recipe.strDrink;
        const recipeImg = recipe.strMealThumb || recipe.strDrinkThumb;

        return (
          <Link
            key={ recipeID }
            data-testid={ `${index}-recipe-card` }
            to={ `${path}/${recipeID}` }
          >
            <img
              width="100"
              src={ recipeImg }
              alt={ recipeName }
              data-testid={ `${index}-card-img` }
            />
            <h2
              data-testid={ `${index}-card-name` }
            >
              { recipeName }
            </h2>
          </Link>
        );
      })}
    </div>
  );
}

RecipesList.propTypes = {
  recipes: arrayOf(object),
}.isRequired;
