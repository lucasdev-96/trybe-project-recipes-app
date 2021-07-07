const useIngredients = (recipe) => {
  const ingredients = Object.entries(recipe)
    .filter((el) => el[0].includes('strIngredient') && el[1])
    .reduce((acc, el) => [...acc, el[1]], []);

  const ingredientsMeasures = Object.entries(recipe)
    .filter((el) => el[0].includes('strMeasure') && el[1] !== '')
    .reduce((acc, el) => [...acc, el[1]], []);

  return {
    ingredients,
    ingredientsMeasures,
  };
};

export default useIngredients;
