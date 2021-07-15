import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrinkIngredients';
import BottomMenu from '../components/BottomMenu';
import RecipesContext from '../contexts/RecipesContext';
import { fetchIngredients } from '../services/theMealAPI';
import '../styles/ExploreFoodsIngredients.css';

function ExploreFoodsIngredients() {
  const { setIngredientsFood } = useContext(RecipesContext);
  const key = 'foods';

  useEffect(() => {
    fetchIngredients(key, setIngredientsFood);
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div className="food-ingredients">
        <ExploreFoodOrDrink />
      </div>
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodsIngredients;
