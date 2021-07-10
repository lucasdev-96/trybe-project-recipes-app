import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import ingredientes from '../images/ingredientes.jpg';
import localizacao from '../images/localizacao.jpg';
import surpreenda from '../images/surpreenda.jpg';
import '../styles/ExploreFoodsRecipes.css';

function ExploreFoodsRecipes() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <div className="explore-foods-container">
        <Link to="/explorar/comidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            <img src={ ingredientes } alt="" />
            <h4 className="ingredients-explore-food">Por Ingredientes</h4>
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            <img className="localization" src={ localizacao } alt="" />
            <h4 className="origin-explore-food">Por Local de Origem</h4>
          </button>
        </Link>
        <Link to="/comidas/52771">
          <button
            type="button"
            data-testid="explore-surprise"
            // onClick={ console.log(endpoint) }
          >
            <img src={ surpreenda } alt="" />
            <h4 className="surpreenda-explore-food">Me Surpreenda!</h4>
          </button>
        </Link>
      </div>
      <BottomMenu />
    </div>
  );
}

export default ExploreFoodsRecipes;
