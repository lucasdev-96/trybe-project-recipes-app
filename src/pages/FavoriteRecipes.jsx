import React, { useContext, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import RecipesContext from '../contexts/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const { favoriteRecipes } = useContext(RecipesContext);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopyClick = (recipeType, recipeId) => {
    copy(`http://localhost:3000/${recipeType}/${recipeId}`);

    setHasCopied(true);
    const messageTimer = 3000;
    setTimeout(() => {
      setHasCopied(false);
    }, messageTimer);
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <main>
        <ul className="filters">
          <li>
            <button
              type="button"
              data-testid="filter-by-all-btn"
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="filter-by-food-btn"
            >
              Food
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
            >
              Drinks
            </button>
          </li>
        </ul>
        <ul>
          {favoriteRecipes.map((recipe, index) => (
            <li key={ recipe.id }>
              <img
                width="200"
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.area && `${recipe.area} - `}
                {recipe.alcoholicOrNot || recipe.category}
              </p>

              <div>
                <button
                  type="button"
                  onClick={ () => handleCopyClick(`${recipe.type}s`, recipe.id) }
                >
                  <img
                    src={ shareIcon }
                    alt="Compartilhar"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />

                  {hasCopied && 'Link copiado!'}
                </button>

                <button
                  type="button"

                >
                  <img
                    src={ blackHeartIcon }
                    alt="remover dos favoritos"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  />
                </button>

              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default FavoriteRecipes;
