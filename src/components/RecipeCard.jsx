import { element } from 'prop-types';
import React from 'react';

import '../styles/recipeCard.css';

function RecipeCard({ children, ...props }) {
  return (
    <div
      className="card-container-details"
      { ...props }
    >
      {children}
    </div>
  );
}

RecipeCard.propTypes = {
  children: element,
}.isRequired;

export default RecipeCard;
