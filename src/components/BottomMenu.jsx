// começando
import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  return (
    <div data-testid="footer" className="footer" style={ { position: 'fixed' } }>
      <ul className="icons-container">
        <Link to="/comidas" data-testid="food-bottom-btn">
          <li><img src={ mealIcon } alt="" /></li>
        </Link>
        <Link to="/explorar" data-testid="explore-bottom-btn">
          <li><img src={ exploreIcon } alt="" /></li>
        </Link>
        <Link to="/bebidas" data-testid="drinks-bottom-btn">
          <li><img src={ drinkIcon } alt="" /></li>
        </Link>

      </ul>
    </div>
  );
}
