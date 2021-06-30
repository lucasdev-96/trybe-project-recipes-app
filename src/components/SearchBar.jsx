import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="radio"
        value="ingredient"
        name="ingrediente"
        data-testid="ingredient-search-radio"
      />
      {' '}
      Ingredientes...
      <input
        type="radio"
        value="name"
        name="nome"
        data-testid="name-search-radio"
      />
      {' '}
      Nome...
      <input
        type="radio"
        value="first-letter"
        name="primeira-letra"
        data-testid="first-letter-search-radio"
      />
      {' '}
      Primeira Letra...
      <input type="text" placeholder="Search..." data-testid="search-input" />
      <button type="submit">clic</button>
    </div>
  );
}

export default SearchBar;
