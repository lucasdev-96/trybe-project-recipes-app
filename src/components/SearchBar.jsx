import React, { useState } from 'react';
import { fetchUrl } from '../services/theMealAPI';

function SearchBar() {
  const [value, setValue] = useState({ result: '' });
  const { result } = value;
  const foodUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`;

  const HandleClickIngredient = async (endpoint) => {
    const response = await fetchUrl(endpoint);
    console.log(response);
  };

  const HandleChange = ({ target: { value: str } }) => {
    setValue({
      ...value,
      result: str,
    });
  };

  return (
    <div>
      <input
        type="radio"
        value="ingredient"
        name="nome"
        data-testid="ingredient-search-radio"
      />
      {' '}
      Ingredientes
      <input
        type="radio"
        value="name"
        name="nome"
        data-testid="name-search-radio"
        onClick={ () => HandleClickIngredient(foodUrl) }
      />
      {' '}
      Nome
      <input
        type="radio"
        value="first-letter"
        name="nome"
        data-testid="first-letter-search-radio"
      />
      {' '}
      Primeira Letra
      <input
        value={ result }
        name="value"
        onChange={ HandleChange }
        type="text"
        placeholder="Search..."
        data-testid="search-input"
      />
      <button type="submit" data-testid="exec-search-btn">clic</button>
    </div>
  );
}

export default SearchBar;
