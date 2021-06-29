// começando
import React from 'react';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  return (
    <div data-testid="footer">
      <ul className="icons-container">
        <li><img data-testid="food-bottom-btn" src={ mealIcon } alt="" /></li>
        <li><img data-testid="explore-bottom-btn" src={ exploreIcon } alt="" /></li>
        <li><img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="" /></li>
      </ul>
    </div>
  );
}
