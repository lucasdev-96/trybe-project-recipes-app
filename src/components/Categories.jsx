import React from 'react';
import { arrayOf, object } from 'prop-types';

export default function Categories({ categories }) {
  const hasCategories = categories.length > 0;

  return (
    <nav>
      <ul id="category-list">
        <li className="category">All</li>
        {hasCategories && categories.map(({ strCategory: category }) => (
          <li
            data-testid={ `${category}-category-filter` }
            key={ category }
            className="category"
          >
            { category }
          </li>
        ))}
      </ul>
    </nav>
  );
}

Categories.propTypes = {
  categories: arrayOf(object),
}.isRequired;
