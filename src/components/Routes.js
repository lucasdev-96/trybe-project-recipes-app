import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import RecipesFoodDetails from '../pages/RecipesFoodDetails';
import RecipesDrinkDetails from '../pages/RecipesDrinkDetails';
import RecipeInProgress from '../pages/RecipeInProgress';
import ExploreRecipes from '../pages/ExploreRecipes';
import ExploreFoodsRecipes from '../pages/ExploreFoodsRecipes';
import ExploreDrinksRecipes from '../pages/ExploreDrinksRecipes';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreOriginLocal from '../pages/ExploreOriginLocal';
import Perfil from '../pages/Perfil';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Recipes from '../pages/Recipes';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route
        path="/comidas/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        path="/bebidas/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route path="/comidas/:id" component={ RecipesFoodDetails } />
      <Route path="/bebidas/:id" component={ RecipesDrinkDetails } />
      <Route path="/comidas" component={ Recipes } />
      <Route path="/bebidas" component={ Recipes } />
      <Route exact path="/explorar" component={ ExploreRecipes } />
      <Route exact path="/explorar/comidas" component={ ExploreFoodsRecipes } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinksRecipes } />
      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodsIngredients }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksIngredients }
      />
      <Route path="/explorar/comidas/area" component={ ExploreOriginLocal } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ DoneRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route component={ NotFound } />
    </Switch>
  );
}
