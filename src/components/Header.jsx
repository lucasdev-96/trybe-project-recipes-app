import React from 'react';
import Search from '../images/searchIcon.svg';
import '../styles/header.css';
import ProfileIcon from '../images/profileIcon.svg';

function Header() {
  return (

    <header
      className="fatherHeader"
    >
      <button className="searchButton" type="button" data-testid="profile-top-btn">
        <img src={ ProfileIcon } alt="profile" />
      </button>
      <h1 data-testid="page-title">
        Comidas
      </h1>
      <button className="searchButton" type="button" data-testid="search-top-btn">
        <img src={ Search } alt="Search" />
      </button>
    </header>

  );
}

export default Header;
