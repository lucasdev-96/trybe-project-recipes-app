import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import FoodRecipes from '../pages/FoodRecipes';
import DrinksRecipes from '../pages/DrinksRecipes';
import RecipesFoodDetails from '../pages/RecipesFoodDetails';
import RecipesDrinkDetails from '../pages/RecipesDrinkDetails';
import ProgressFoodRecipes from '../pages/ProgressFoodRecipes';
import ProgressDrinksRecipes from '../pages/ProgressDrinkRecipes';
import ExploreRecipes from '../pages/ExploreRecipes';
import ExploreFoodsRecipes from '../pages/ExploreFoodsRecipes';
import ExploreDrinksRecipes from '../pages/ExploreDrinksRecipes';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreOriginLocal from '../pages/ExploreOriginLocal';
import Perfil from '../pages/Perfil';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ FoodRecipes } />
      <Route path="/bebidas" component={ DrinksRecipes } />
      <Route path="/comidas/{id-da-receita}" component={ RecipesFoodDetails } />
      <Route path="/bebidas/{id-da-receita}" component={ RecipesDrinkDetails } />
      <Route
        path="/comidas/{id-da-receita}/in-progress"
        component={ ProgressFoodRecipes }
      />
      <Route
        path="/bebidas/{id-da-receita}/in-progress"
        component={ ProgressDrinksRecipes }
      />
      <Route path="/explorar" component={ ExploreRecipes } />
      <Route path="/explorar/comidas" component={ ExploreFoodsRecipes } />
      <Route path="/explorar/bebidas" component={ ExploreDrinksRecipes } />
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
    </Switch>
  );
}
