import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrinkIngredients';
import BottomMenu from '../components/BottomMenu';
import RecipesContext from '../contexts/RecipesContext';
import { fetchIngredients } from '../services/theMealAPI';

function ExploreDrinksIngredients() {
  const { setIngredientsDrink } = useContext(RecipesContext);
  const key = 'drinks';

  useEffect(() => {
    fetchIngredients(key, setIngredientsDrink);
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreFoodOrDrink />
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinksIngredients;
