import React, { useContext, useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import RecipesContext from '../contexts/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const { favoriteRecipes } = useContext(RecipesContext);
  const [hasCopied, setHasCopied] = useState(false);
  const { updateFavoriteRecipes } = useLocalStorage();
  const [filter, setFilter] = useState('All');
  const [displayedRecipes, setDisplayedRecipes] = useState(favoriteRecipes);

  const handleCopyClick = (recipeType, recipeId) => {
    copy(`http://localhost:3000/${recipeType}/${recipeId}`);

    setHasCopied(true);
    const messageTimer = 3000;
    setTimeout(() => {
      setHasCopied(false);
    }, messageTimer);
  };

  const handleFilterClick = ({ target }) => {
    setFilter(target.innerHTML);
  };

  useEffect(() => {
    switch (filter) {
    case 'All':
      setDisplayedRecipes(favoriteRecipes);
      break;
    case 'Food':
      setDisplayedRecipes(favoriteRecipes.filter(({ type }) => type === 'comida'));
      break;
    case 'Drinks':
      setDisplayedRecipes(favoriteRecipes.filter(({ type }) => type === 'bebida'));
      break;
    default:
      break;
    }
  }, [filter, favoriteRecipes]);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <main>
        <ul className="filters">
          <li>
            <button
              type="button"
              data-testid="filter-by-all-btn"
              onClick={ handleFilterClick }
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="filter-by-food-btn"
              onClick={ handleFilterClick }
            >
              Food
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="filter-by-drink-btn"
              onClick={ handleFilterClick }
            >
              Drinks
            </button>
          </li>
        </ul>
        <ul>
          {displayedRecipes.map((recipe, index) => (
            <li key={ recipe.id }>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>

                <img
                  width="200"
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />

                <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
              </Link>
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
                  onClick={ () => updateFavoriteRecipes(recipe, null, true) }
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
