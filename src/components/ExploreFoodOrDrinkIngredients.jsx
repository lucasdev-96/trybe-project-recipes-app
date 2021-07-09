import React, { useContext, useState, useEffect } from 'react';
import { useHistory,
  useRouteMatch } from 'react-router-dom';
import RecipesContext from '../contexts/RecipesContext';
import { fetchRecipes } from '../services/theMealAPI';
import '../styles/mapDetails.css';

function ExploreFoodOrDrink() {
  const { ingredients,
    setFoodsRecipes,
    setDrinksRecipes,
  } = useContext(RecipesContext);
  const [keyName, setKeyName] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [urlImageName, setUrlImageName] = useState('');
  const [routeName, setRouteName] = useState('');
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (url.includes('comidas')) {
      setKeyName('foods');
      setIngredientName('strIngredient');
      setUrlImageName('themealdb');
      setRouteName('/comidas');
    }
    if (url.includes('bebidas')) {
      setKeyName('drinks');
      setIngredientName('strIngredient1');
      setUrlImageName('thecocktaildb');
      setRouteName('/bebidas');
    }
  }, []);

  const filterIngredientFn = async (name) => {
    const response = await fetchRecipes(`https://www.${urlImageName}.com/api/json/v1/1/filter.php?i=${name}`);
    if (routeName === '/comidas') setFoodsRecipes(response);
    if (routeName === '/bebidas') setDrinksRecipes(response);
    history.push(routeName);
  };

  return (
    <>
      {ingredients[keyName] ? ingredients[keyName].map((value, index) => {
        const src = `https://www.${urlImageName}.com/images/ingredients/${value[ingredientName]}-Small.png`;
        return (
          <div data-testid={ `${index}-ingredient-card` } key={ index }>
            <h1 data-testid={ `${index}-card-name` }>{value[ingredientName]}</h1>
            <button
              onClick={ () => {
                filterIngredientFn(value[ingredientName]);
              } }
              type="button"
              className="effectBtn"
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ value[ingredientName] }
                src={ src }
                style={ { width: '300px' } }
              />
            </button>
          </div>
        );
      }) : null}
      ;
    </>
  );
}

export default ExploreFoodOrDrink;
