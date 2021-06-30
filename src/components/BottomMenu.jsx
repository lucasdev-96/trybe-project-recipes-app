// começando
import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  return (
    <div data-testid="footer" className="footer">
      <ul className="icons-container">
        <Link to="/comidas">
          <li><img data-testid="food-bottom-btn" src={ mealIcon } alt="" /></li>
        </Link>
        <Link to="/explorar">
          <li><img data-testid="explore-bottom-btn" src={ exploreIcon } alt="" /></li>
        </Link>
        <Link to="/bebidas">
          <li><img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="" /></li>
        </Link>

      </ul>
    </div>
  );
}
