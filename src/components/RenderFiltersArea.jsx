import React, { useEffect, useState } from 'react';

function RendersFiltersArea({ area }) {
  const [apiHandleArea, setApiHandleArea] = useState([]);

  const requestFoodsByArea = (option) => {
    const number = 11;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${option}`)
      .then((response) => response.json())
      .then((date) => {
        if (date.meals) {
          const filter = date.meals.filter((elem, index) => index <= number);
          setApiHandleArea(filter);
        }
      });
  };

  useEffect(() => {
    requestFoodsByArea(area);
  }, [area]);

  return (
    <div>
      { apiHandleArea ? apiHandleArea.map(({ strMeal, strMealThumb }, index) => (
        <div key={ strMeal } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            style={ { width: '300px' } }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <h1 data-testid={ `${index}-card-name` }>{strMeal}</h1>
        </div>
      )) : null}
    </div>
  );
}

export default RendersFiltersArea;
