import React from 'react';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';
import BottomMenu from '../components/BottomMenu';

function ExploreFoodsIngredients() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreFoodOrDrink />
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodsIngredients;
