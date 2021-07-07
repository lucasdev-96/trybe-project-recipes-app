import React, { useEffect, useState, useContext } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { MdFavorite } from 'react-icons/md';
import RecipesContext from '../contexts/RecipesContext';
import arrayIngredients from '../helpers/arrayIngredients';
import '../styles/mapDetails.css';

function RenderMapDetails({ path }) {
  const { detailRecipes } = useContext(RecipesContext);
  const [keyMap, setKeyMap] = useState('');
  const [api, setApi] = useState([]);
  const result = path.split('/')[1];
  const [category, setCategory] = useState(false);
  const { foods, drinks } = detailRecipes;

  useEffect(() => {
    if (result === 'comidas') {
      setKeyMap('Meal');
      setApi(foods);
      setCategory('strCategory');
    }

    if (result === 'bebidas') {
      setKeyMap('Drink');
      setApi(drinks);
      setCategory('strAlcoholic');
    }
  }, [foods, drinks]);

  return (
    <div className="FatherMap">
      {api.map((valueApiKeys, index) => (
        <section className="father" key={ index }>
          <div className="fatherImg">
            <img
              className="img-fluid"
              data-testid="recipe-photo"
              src={ valueApiKeys[`str${keyMap}Thumb`] }
              alt={ valueApiKeys[`str${keyMap}`] }
            />
          </div>
          <section className="infos">
            <div className="buttons">
              <h1 data-testid="recipe-title">
                {valueApiKeys[`str${keyMap}`]}
              </h1>
              <button className="effectBtn" type="button" data-testid="share-btn">
                <FaShareAlt />
              </button>
              <button className="effectBtn" type="button" data-testid="favorite-btn">
                <MdFavorite />
              </button>
            </div>
            <p data-testid="recipe-category">{valueApiKeys[category]}</p>
            <h2 className="h2">Ingredients</h2>
            <ul className="list-group">
              {arrayIngredients(valueApiKeys).map((name, index2) => {
                if (name === '  '
                  || name === 'null null'
                  || name === 'undefined undefined'
                  || name === ' '
                ) return null;
                return (
                  <li
                    className="list-group-item list"
                    key={ index2 }
                    data-testid={ `${index2}-ingredient-name-and-measure` }
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
            <h2 className="h2">Instructions</h2>
            <div className="container-lg">
              <p data-testid="instructions" className="text-justify intructionsText">
                {valueApiKeys.strInstructions}
              </p>
            </div>
          </section>
        </section>
      ))}
      {/*
Os ingredientes devem possuir o atributo data-testid="${index}-ingredient-name-and-measure";
O texto de instruções deve possuir o atributo data-testid="instructions";
O vídeo, presente somente na tela de comidas, deve possuir o atributo data-testid="video";
O card de receitas recomendadas deve possuir o atributo data-testid="${index}-recomendation-card";
O botão de iniciar receita deve possuir o atributo data-testid="start-recipe-btn"; */}

    </div>
  );
}

RenderMapDetails.propTypes = {
  path: PropTypes.string,
}.isRequired;

export default RenderMapDetails;
