import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import drinks from '../images/drinks.jpg';
import suprisedrink from '../images/suprisedrink.jpg';
import '../styles/ExploreDrinksRecipes.css';

function ExploreDrinksRecipes() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div className="explore-drinks-container">
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            <img src={ drinks } alt="" />
            <h4>Por Ingredientes</h4>
          </button>
        </Link>
        <Link to="/bebidas/178319">
          <button type="button" data-testid="explore-surprise">
            <img src={ suprisedrink } alt="" />
            <h4>Me Surpreenda!</h4>
          </button>
        </Link>
      </div>
      <BottomMenu />
    </div>
  );
}

export default ExploreDrinksRecipes;
