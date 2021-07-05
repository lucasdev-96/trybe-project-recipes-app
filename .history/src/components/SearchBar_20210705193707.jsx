import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { fetchUrlRadioButtons } from '../services/theMealAPI';
import '../styles/header.css';
import { foodUrls, drinkUrls } from '../helpers/endpoints';

function SearchBar() {
  const [inputValue, setInputValue] = useState({ resultInput: '' });
  const [responseApi, setResponseApi] = useState([]);
  const [radioButtonName, setRadioButtonName] = useState('name');
  const [keyMealsOrDrinks, setkeyMealsOrDrinks] = useState('');
  const [foodOrDrinkId, setFoodOrDrinkId] = useState('');
  const { path } = useRouteMatch();
  const { resultInput } = inputValue;
  const history = useHistory();

  const keyMealsOrDrinkFn = () => {
    if (path === '/comidas') {
      setkeyMealsOrDrinks('meals');
    } else if (path === '/bebidas') {
      setkeyMealsOrDrinks('drinks');
    }
  };

  const keyOneFilterFn = () => {
    if (keyMealsOrDrinks === 'meals' && responseApi.length === 0) {
      history.push(`/comidas/${foodOrDrinkId}`);
    } else if (keyMealsOrDrinks === 'drinks' && responseApi.length === 0) {
      history.push(`/bebidas/${foodOrDrinkId}`);
    }
  };

  const mapId = () => {
    const idFood = responseApi.map(({ idMeal }) => idMeal);
    const idDrinks = responseApi.map(({ idDrink }) => idDrink);
    if (path === '/comidas') setFoodOrDrinkId(idFood);
    if (path === '/bebidas') setFoodOrDrinkId(idDrinks);
    console.log(idFood);
  };

  useEffect(() => {
    keyMealsOrDrinkFn();
    mapId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickResponseApi = async (endpoint) => {
    const response = await fetchUrlRadioButtons(endpoint);
    if (response[keyMealsOrDrinks] === null) setResponseApi([]);
    else setResponseApi(response[keyMealsOrDrinks]);
  };

  const handleChange = ({ target: { value: str } }) => {
    setInputValue({
      ...inputValue,
      resultInput: str,
    });
  };

  const handleSubmit = () => {
    if (resultInput.length > 1 && radioButtonName === 'firstLetter') {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (path === '/comidas') {
      handleClickResponseApi(foodUrls(resultInput)[radioButtonName]);
    } if (path === '/bebidas') {
      handleClickResponseApi(drinkUrls(resultInput)[radioButtonName]);
    }
  };

  const renderMapCardsDrinkOrFood = (title, img, altName) => (
    responseApi.map((value, index) => (
      <div className="father_food" key={ index }>
        <h1>{value[title]}</h1>
        <img src={ value[img] } alt={ value[altName] } />
      </div>
    ))
  );

  const validateMap = () => {
    if (keyMealsOrDrinks === 'meals') {
      return renderMapCardsDrinkOrFood('strMeal', 'strMealThumb', 'comidas');
    } if (keyMealsOrDrinks === 'drinks') {
      return renderMapCardsDrinkOrFood('strDrink', 'strDrinkThumb', 'bebidas');
    }
  };

  return (
    <div>
      <label htmlFor="ingredient">
        <input
          className="radio_buttons"
          id="ingredient"
          type="radio"
          value="ingredient"
          name="nome"
          data-testid="ingredient-search-radio"
          onClick={ () => setRadioButtonName('ingrendient') }
        />
        Ingredientes

      </label>
      <label htmlFor="name">
        <input
          className="radio_buttons"
          id="name"
          type="radio"
          value="name"
          name="nome"
          defaultChecked
          data-testid="name-search-radio"
          onClick={ () => setRadioButtonName('name') }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          className="radio_buttons"
          id="first-letter"
          type="radio"
          value="first-letter"
          name="nome"
          data-testid="first-letter-search-radio"
          onClick={ () => setRadioButtonName('firstLetter') }
        />
        Primeira Letra
      </label>
      <label htmlFor="search-input">
        <input
          id="search-input"
          value={ resultInput }
          name="resultInput"
          onChange={ handleChange }
          type="text"
          placeholder="Search..."
          data-testid="search-input"
        />
      </label>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ () => {
          handleSubmit();
          keyOneFilterFn();
          console.log(foodOrDrinkId);
        } }
      >
        Buscar Comidas
      </button>
      {validateMap()}
    </div>
  );
}

export default SearchBar;
