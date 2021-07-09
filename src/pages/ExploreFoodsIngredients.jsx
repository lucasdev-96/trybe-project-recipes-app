import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrinkIngredients';
import BottomMenu from '../components/BottomMenu';
import RecipesContext from '../contexts/RecipesContext';
import { fetchIngredients } from '../services/theMealAPI';

function ExploreFoodsIngredients() {
  const { setIngredientsFood } = useContext(RecipesContext);
  const key = 'foods';

  useEffect(() => {
    fetchIngredients(key, setIngredientsFood);
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreFoodOrDrink />
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodsIngredients;
