import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../contexts/RecipesContext';

import shareIcon from '../images/shareIcon.svg';
import '../styles/DoneRecipes.css';

const copy = require('clipboard-copy');

// import DoneCards from '../components/DoneCards';

function DoneRecipes() {
  const { doneRecipes } = useContext(RecipesContext);

  console.log(doneRecipes);
  const [hasLinkCopied, setHasLinkCopied] = useState(false);
  const [filteredDoneRecipes, setfilteredDoneRecipes] = useState([...doneRecipes]);

  const handleShareClick = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);

    setHasLinkCopied(true);

    const messageDuration = 3000;
    setTimeout(() => {
      setHasLinkCopied(false);
    }, messageDuration);
  };

  const handleFilterFood = () => {
    setfilteredDoneRecipes(doneRecipes.filter((done) => done.type === 'comida'));
  };

  const handleFilterDrink = () => {
    setfilteredDoneRecipes(doneRecipes.filter((done) => done.type === 'bebida'));
  };

  const handleFilterAll = () => {
    setfilteredDoneRecipes(doneRecipes
      .filter((done) => done.type === 'comida' || done.type === 'bebida'));
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <div className="done-container">
        <div className="header-btns">
          <button
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ () => handleFilterAll() }
          >
            All
          </button>
          <button
            data-testid="filter-by-food-btn"
            type="button"
            onClick={ () => handleFilterFood() }
          >
            Food
          </button>
          <button
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ () => handleFilterDrink() }
          >
            Drink
          </button>
        </div>
        <div className="done-cards">
          {filteredDoneRecipes.map(({
            name, image, category, alcoholicOrNot, doneDate, area, type, id, tags,
          }, index) => (
            <div key={ index } className="cards">
              <Link to={ `/${type}s/${id}` } className="img">
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt="receita"
                  width="100px"
                />
              </Link>
              <div className="doneCards-descriptions">
                <h3 data-testid={ `${index}-horizontal-top-text` }>
                  {area && `${area} - `}
                  { alcoholicOrNot || category }
                </h3>
                <Link
                  to={ `/${type}s/${id}` }
                >
                  <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
                </Link>
                <h4 data-testid={ `${index}-horizontal-done-date` }>
                  {doneDate}
                </h4>
                <button
                  type="button"
                  onClick={ () => handleShareClick(type, id) }
                  className="share-btn"
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="Compartilhar"
                  />
                  {hasLinkCopied && 'Link copiado!'}
                </button>

                {tags && tags.map((tagName, i) => (
                  <div
                    key={ i }
                    data-testid={ `${index}-${tagName}-horizontal-tag` }
                  >
                    <p>{ `${tagName} ` }</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoneRecipes;
