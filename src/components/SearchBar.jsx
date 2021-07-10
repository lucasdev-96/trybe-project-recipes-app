import React, { useState, useEffect, useContext } from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';
import { fetchRecipes } from '../services/theMealAPI';
import '../styles/header.css';
import { foodUrls, drinkUrls } from '../helpers/endpoints';
import RecipesContext from '../contexts/RecipesContext';
import searchIcon from '../images/searchIcon-2.svg';

import '../styles/searchBar.css';

const validateFirstLetter = (input, radioButtonName) => {
  if (input.length > 1 && radioButtonName === 'firstLetter') {
    // eslint-disable-next-line no-alert
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
};

const keyMealsOrDrinkFn = (setState, path) => {
  if (path === '/comidas') {
    setState('Meal');
  } else if (path === '/bebidas') {
    setState('Drink');
  }
};

function SearchBar() {
  const [inputValue, setInputValue] = useState({ resultInput: '' });
  const [radioButtonName, setRadioButtonName] = useState('name');
  const [keyMealsOrDrinks, setKeyMealsOrDrinks] = useState('');
  const { path } = useRouteMatch();
  const { resultInput: input } = inputValue;
  const { setFoodsRecipes,
    setDrinksRecipes,
    recipes,
  } = useContext(RecipesContext);

  const { foods, drinks } = recipes;

  useEffect(() => {
    keyMealsOrDrinkFn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickResponseApi = async () => {
    validateFirstLetter(input, radioButtonName);
    keyMealsOrDrinkFn(setKeyMealsOrDrinks, path);
    if (path === '/comidas') {
      const resultFood = await fetchRecipes(foodUrls(input)[radioButtonName]);
      if (resultFood) {
        setFoodsRecipes(resultFood);
      }
    }

    if (path === '/bebidas') {
      const resultDrinks = await fetchRecipes(drinkUrls(input)[radioButtonName]);
      if (resultDrinks) {
        setDrinksRecipes(resultDrinks);
      }
    }
  };

  const handleChange = ({ target: { value: str } }) => {
    setInputValue({
      ...inputValue,
      resultInput: str,
    });
  };

  if (foods.length === 1) {
    return <Redirect to={ `${path}/${foods[0][`id${keyMealsOrDrinks}`]}` } />;
  } if (drinks.length === 1) {
    return <Redirect to={ `${path}/${drinks[0][`id${keyMealsOrDrinks}`]}` } />;
  }

  return (
    <div className="search">
      <div className="search-title">
        <h2>O que iremos preparar hoje?</h2>
      </div>
      <div className="search-input-btn">
        <label htmlFor="search-input">
          <input
            id="search-input"
            value={ input }
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
          onClick={ handleClickResponseApi }
        >
          <img src={ searchIcon } alt="Buscar" />
          <p>Buscar comidas</p>
        </button>
      </div>

      <div className="radios-search">

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
      </div>

    </div>
  );
}

export default SearchBar;
