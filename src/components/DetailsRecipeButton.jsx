import React from 'react';
import { element } from 'prop-types';

import '../styles/detailsRecipeButton.css';

const DetailsRecipeButton = ({ children, className, ...props }) => (
  <div className="button-container">
    <button
      className={ `details-btn ${className}` }
      data-testid="start-recipe-btn"
      type="button"
      { ...props }
    >
      {children}
    </button>
  </div>
);

DetailsRecipeButton.propTypes = {
  children: element,
}.isRequired;

export default DetailsRecipeButton;
