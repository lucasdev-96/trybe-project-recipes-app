import React from 'react';
import { element } from 'prop-types';

import '../styles/detailsRecipeButton.css';

const DetailsRecipeButton = ({ children, ...props }) => (
  <div className="button-container">
    <button
      className="details-btn"
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
