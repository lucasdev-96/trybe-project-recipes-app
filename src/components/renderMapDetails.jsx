import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import '../styles/mapDetails.css';
import useLocalStorage from '../hooks/useLocalStorage';
import IngredientsList from './IngredientsList';
import useIngredients from '../hooks/useIngredients';
import RecipeDetailsHeader from './RecipeDetailsHeader';
import DetailsInstructions from './DetailsIntructions';
import DetailsRecipeButton from './DetailsRecipeButton';
import playIcon from '../images/playIcon.svg';
import RecipeCard from './RecipeCard';

// para fazer o carrosel peguei as informaçoes deste site https://reactjsexample.com/a-flexible-and-responsive-carousel-component-for-react/
function RenderMapDetails({ path }) {
  const { detailRecipes, recipes,
    inProgressRecipes } = useContext(RecipesContext);
  const [keyMap, setKeyMap] = useState('');
  const [api, setApi] = useState([]);
  const result = path.split('/')[1];
  const [category, setCategory] = useState(false);
  const { foods, drinks } = detailRecipes;
  const [keyName, setKeyName] = useState('');
  const [keyNameCarousel, setKeyNameCarousel] = useState('');
  const { updateFavoriteRecipes } = useLocalStorage();
  const { url } = useRouteMatch();
  const regex = /[\d+]/g;
  const id = url.match(regex).join('');
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
  }, [foods, drinks, result]);

  const { ingredients, ingredientsMeasures } = useIngredients(api[0]);

  const handleFavoriteClick = () => {
    updateFavoriteRecipes(api[0], keyMap);
  };

  const handleFilter = (key) => {
    const five = 5;
    const resultFilter = recipes[key]
      .filter((res, index) => index <= five);
    return resultFilter;
  };

  const renderVideo = (idUrl) => (
    <div className="video-container">
      <h2 className="h2">Video</h2>
      <iframe
        allow="fullscreen"
        data-testid="video"
        title="a"
        className="embed-responsive-item"
        src={ `https://www.youtube.com/embed/${idUrl.split('?v=')[1]}` }
      />
    </div>
  );

  return (
    <div className="FatherMap">
      {api.map((valueApiKeys, index) => {
        const idUrl = valueApiKeys.strYoutube;
        return (
          <section className="father" key={ index }>

            <RecipeDetailsHeader
              recipeThumb={ valueApiKeys[`str${keyMap}Thumb`] }
              recipeTitle={ valueApiKeys[`str${keyMap}`] }
              recipeCategory={ valueApiKeys[category] }
              handleFavoriteClick={ handleFavoriteClick }
            />

            <IngredientsList
              ingredients={ ingredients }
              ingredientsMeasures={ ingredientsMeasures }
            />

            <DetailsInstructions
              instructions={ valueApiKeys.strInstructions }
            />

            {
              result === 'comidas' ? renderVideo(idUrl)
                : null
            }

            <section className="recommended-recipes">
              <h2 className="h2">Recomendadas</h2>
              <div className="container_carousel">
                {handleFilter(keyName).map((key, index3) => (

                  <RecipeCard
                    key={ index3 }
                    data-testid={ `${index3}-recomendation-card` }
                  >
                    <img
                      className="imgContainer"
                      src={ key[`str${keyNameCarousel}Thumb`] }
                      alt="slide"
                    />
                    <h3 data-testid={ `${index3}-recomendation-title` }>
                      {key[`str${[keyNameCarousel]}`]}
                    </h3>
                  </RecipeCard>
                ))}
              </div>
            </section>

            <Link to={ `${url}/in-progress` }>
              <DetailsRecipeButton>
                <img
                  src={ playIcon }
                  alt={ inProgress ? 'Continuar Receita' : 'Iniciar Receita' }
                />
                { inProgress ? 'Continuar Receita' : 'Iniciar Receita' }
              </DetailsRecipeButton>
            </Link>
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
