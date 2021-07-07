export const fetchCategories = async (endpoint) => {
  const response = await fetch(endpoint);
  const categories = await response.json();
  const categoriesAmount = 4;

  return Object.values(categories)[0]
    .filter((category, index) => index <= categoriesAmount);
};

export const fetchRecipes = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();
  const recipesAmount = 11;

  const result = Object.values(recipes)[0];
  if (result != null && result.length > 0) {
    return result.filter((recipe, index) => index <= recipesAmount);
  }alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
};

export const fetchRecipesFoodDetails = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();
  return Object.values(recipes)[0];
};
