import React from 'react';
import Header from '../components/Header';
import ExploreFoodOrDrink from '../components/ExploreFoodOrDrink';
import BottomMenu from '../components/BottomMenu';

function ExploreDrinksIngredients() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreFoodOrDrink />
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinksIngredients;
