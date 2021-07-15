import { string } from 'prop-types';
import React from 'react';

import '../styles/detailsInstructions.css';

const DetailsInstructions = ({ instructions }) => (
  <div className="instructions-container">
    <h2>Instruções</h2>
    <p data-testid="instructions">{ instructions }</p>
  </div>
);

DetailsInstructions.propTypes = {
  instructions: string,
}.isRequired;

export default DetailsInstructions;
