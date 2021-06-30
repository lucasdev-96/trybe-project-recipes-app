import React from 'react';
import { arrayOf, object, func } from 'prop-types';

export default function Categories({ categories, handleCategoryClick }) {
  const hasCategories = categories.length > 0;

  return (
    <nav>
      <ul id="category-list">
        <li className="category">All</li>

        {hasCategories && categories.map(({ strCategory: category }) => (
          <li
            key={ category }
            className="category"
          >
            <button
              data-testid={ `${category}-category-filter` }
              type="button"
              onClick={ () => handleCategoryClick(category) }
            >
              { category }
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Categories.propTypes = {
  categories: arrayOf(object),
  handleCategoryClick: func,
}.isRequired;
