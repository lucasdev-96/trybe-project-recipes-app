import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import comidas from '../images/comidas.jpg';
import bebidas from '../images/bebidas.jpg';
import '../styles/ExploreRecipes.css';

function ExploreRecipes() {
  return (
    <div>
      <Header title="Explorar" />
      <div className="explore-container">
        <h4>Não sabe o que escolher?</h4>
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food">
            <img className="explore-comida" src={ comidas } alt="comida" />
            <h3 className="comidas-h3">Explorar Comidas</h3>
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button type="button" data-testid="explore-drinks">
            <img className="explore-bebida" src={ bebidas } alt="bebida" />
            <h3 className="bebidas-h3">Explorar Bebidas</h3>
          </button>
        </Link>
      </div>
      <BottomMenu />
    </div>
  );
}

export default ExploreRecipes;
