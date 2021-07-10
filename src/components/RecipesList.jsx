import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/Recipes.css';

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
          <div className="recipe-card" key={ recipeID }>
            <div className="recipe-card-img">
              <Link
                data-testid={ `${index}-recipe-card` }
                to={ `${path}/${recipeID}` }
              >
                <img
                  width="100"
                  src={ recipeImg }
                  alt={ recipeName }
                  data-testid={ `${index}-card-img` }
                />
              </Link>
            </div>
            <div className="recipe-card-text">
              <h2
                data-testid={ `${index}-card-name` }
              >
                { recipeName }
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

RecipesList.propTypes = {
  recipes: arrayOf(object),
}.isRequired;
