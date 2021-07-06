import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import RenderMapDetails from '../components/renderMapDetails';

function RecipesDrinkDetails() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  return (
    <RenderMapDetails id={ id } path={ path } />
  );
}

export default RecipesDrinkDetails;
