import React, { useEffect, useState } from 'react';

function RenderSelect({ setArea }) {
  const [apiAreaName, setApiAreaName] = useState([]);

  const requestAreaName = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=')
      .then((response) => response.json())
      .then((date) => {
        setApiAreaName(date.meals.sort());
      });
  };
  const handleChange = (({ target: { value } }) => {
    setArea(value);
  });

  useEffect(() => {
    requestAreaName();
  }, []);

  return (

    <div>
      { apiAreaName && (
        <select
          onChange={ handleChange }
          data-testid="explore-by-area-dropdown"
        >
          { apiAreaName.map(({ strArea }, index) => (
            <option data-testid={ `${strArea}-option` } key={ index }>
              {strArea}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default RenderSelect;
