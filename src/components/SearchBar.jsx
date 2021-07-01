import React, { useState } from 'react';
import { fetchUrlRadioButtons } from '../services/theMealAPI';
import '../styles/header.css';

const foodUrl = (resultInput) => ({
  name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${resultInput}`,
  ingrendient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${resultInput}`,
  firstLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${resultInput}`,
});

function SearchBar() {
  const [inputValue, setValue] = useState({ resultInput: '' });
  const [responseApi, setResponseApi] = useState([]);
  const [endPointName, setEndPointName] = useState('name');
  const { resultInput } = inputValue;

  const handleClickRadioButton = async (endpoint) => {
    const response = await fetchUrlRadioButtons(endpoint);
    if (response.meals === null) setResponseApi([]);
    else setResponseApi(response.meals);
  };

  const handleChange = ({ target: { value: str } }) => {
    setValue({
      ...inputValue,
      resultInput: str,
    });
  };
  const handleSubmit = () => {
    if (resultInput.length > 1 && endPointName === 'firstLetter') {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else handleClickRadioButton(foodUrl(resultInput)[endPointName]);
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
          onClick={ () => setEndPointName('ingrendient') }
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
          onClick={ () => setEndPointName('name') }
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
          onClick={ () => setEndPointName('firstLetter') }
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
        onClick={ handleSubmit }
      >
        Buscar Comidas
      </button>
      {responseApi.map(({ strMeal, strMealThumb, idMeal }) => (
        <div key={ idMeal }>
          <h1>{strMeal}</h1>
          <img src={ strMealThumb } alt="food" />
        </div>
      )) }
    </div>
  );
}

export default SearchBar;
