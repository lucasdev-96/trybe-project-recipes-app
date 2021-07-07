export const FOODS_CATEGORIES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const DRINKS_CATEGORIES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const FOODS_RECIPES_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const DRINKS_RECIPES_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const FILTER_DRINKS_BY_CATEGORY_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
export const FILTER_FOODS_BY_CATEGORY_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export const DRINKS_RECIPE_DETAILS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const FOODS_RECIPE_DETAILS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const foodUrls = (resultInput) => ({
  name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${resultInput}`,
  ingrendient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${resultInput}`,
  firstLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${resultInput}`,
});

export const drinkUrls = (resultInput) => ({
  name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${resultInput}`,
  ingrendient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${resultInput}`,
  firstLetter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${resultInput}`,
}
);
