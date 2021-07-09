import { element } from 'prop-types';
import React from 'react';

function RecipeCard({ children, ...props }) {
  return (
    <div { ...props }>
      {children}
    </div>
  );
}

RecipeCard.propTypes = {
  children: element,
}.isRequired;

export default RecipeCard;
