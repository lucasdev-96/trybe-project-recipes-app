import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import '../styles/mapDetails.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useLocalStorage from '../hooks/useLocalStorage';
// para fazer o carrosel peguei as informaçoes deste site https://reactjsexample.com/a-flexible-and-responsive-carousel-component-for-react/
function RenderMapDetails({ path }) {
  const { detailRecipes, recipes,
    favoriteRecipes, inProgressRecipes } = useContext(RecipesContext);
  const [keyMap, setKeyMap] = useState('');
  const [api, setApi] = useState([]);
  const result = path.split('/')[1];
  const [category, setCategory] = useState(false);
  const { foods, drinks } = detailRecipes;
  const [keyName, setKeyName] = useState('');
  const history = useHistory();
  const [keyNameCarousel, setKeyNameCarousel] = useState('');
  const [copyValidate, setCopyValidate] = useState(false);
  const { updateFavoriteRecipes } = useLocalStorage();
  const { url } = useRouteMatch();
  const regex = /[\d+]/g;
  const id = url.match(regex).join('');
  const isRecipeFavorite = favoriteRecipes.includes(id);
  const inProgress = Object.values(inProgressRecipes)
    .reduce((acc, recipesId) => [...Object.keys(recipesId), ...acc], [])
    .includes(id);

  useEffect(() => {
    if (result === 'comidas') {
      setKeyMap('Meal');
      setApi(foods);
      setCategory('strCategory');
      setKeyName('drinks');
      setKeyNameCarousel('Drink');
    }

    if (result === 'bebidas') {
      setKeyMap('Drink');
      setApi(drinks);
      setCategory('strAlcoholic');
      setKeyName('foods');
      setKeyNameCarousel('Meal');
    }
  }, [foods, drinks]);

  const copyValidateFn = () => {
    if (copyValidate) setCopyValidate(false);
    else setCopyValidate(true);

    const resultClip = navigator.clipboard.writeText(`http://localhost:3000${url}`);
    return resultClip;
  };

  const handleFavoriteClick = () => {
    updateFavoriteRecipes(api[0], keyMap);
  };

  const handleFilter = (key) => {
    const five = 5;
    const resultFilter = recipes[key]
      .filter((res, index) => index <= five);
    return resultFilter;
  };

  return (
    <div className="FatherMap">
      {api.map((valueApiKeys, index) => {
        const idUrl = valueApiKeys.strYoutube;
        const entries = Object.entries(api[0]);
        const ingredients = entries
          .filter((key) => key[0].includes('strIngredient') && key[1]);
        const measures = entries
          .filter((key) => key[0].includes('strMeasure') && key[1]);
        return (
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
                <button
                  className="effectBtn"
                  type="button"
                  data-testid="share-btn"
                  onClick={ copyValidateFn }
                >

                  <img src={ shareIcon } alt="share" />
                </button>
                {copyValidate && 'Link copiado!' }
                <button
                  className="effectBtn"
                  type="button"
                  onClick={ handleFavoriteClick }
                >
                  <img
                    data-testid="favorite-btn"
                    src={ isRecipeFavorite ? blackHeartIcon : whiteHeartIcon }
                    alt="like"
                  />
                </button>
              </div>
              <p data-testid="recipe-category">{valueApiKeys[category]}</p>
              <h2 className="h2">Ingredients</h2>
              <ul className="list-group">
                {ingredients.map((name, index2) => (
                  <li
                    className="list-group-item list"
                    key={ index2 }
                    data-testid={ `${index2}-ingredient-name-and-measure` }
                  >
                    {`${name[1]} - ${measures[index2][1]}`}
                  </li>
                ))}
              </ul>
              <h2 className="h2">Instructions</h2>
              <div className="container-lg">
                <p data-testid="instructions" className="text-justify intructionsText">
                  {valueApiKeys.strInstructions}
                </p>
              </div>
              <h2 className="h2">Video</h2>
              {
                result === 'comidas' ? <iframe
                  allow="fullscreen"
                  data-testid="video"
                  title="a"
                  className="embed-responsive-item"
                  src={ `https://www.youtube.com/embed/${idUrl.split('?v=')[1]}` }
                />
                  : null
              }
              <h2 className="h2">Recommended</h2>
              <div className="container_carousel">
                {handleFilter(keyName).map((key, index3) => (
                  <div key={ index3 } data-testid={ `${index3}-recomendation-card` }>
                    <h2 className="h2" data-testid={ `${index3}-recomendation-title` }>
                      {key[`str${[keyNameCarousel]}`]}
                    </h2>
                    <img
                      className="imgContainer"
                      src={ key[`str${keyNameCarousel}Thumb`] }
                      alt="slide"
                    />
                  </div>
                ))}
              </div>

              <button
                className="btn btn-primary"
                type="button"
                data-testid="start-recipe-btn"
                onClick={ () => history.push(`${url}/in-progress`) }
              >
                { inProgress ? 'Continuar Receita' : 'Iniciar Receita' }
              </button>
            </section>
          </section>
        );
      })}
    </div>
  );
}

RenderMapDetails.propTypes = {
  path: PropTypes.string,
}.isRequired;

export default RenderMapDetails;
