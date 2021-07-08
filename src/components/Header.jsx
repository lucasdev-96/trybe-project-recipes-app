import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';
import ProfileIcon from '../images/profileIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [showButton, setBtn] = useState(false);

  const verifyPathName = () => {
    if (
      pathname === '/perfil'
      || pathname === '/receitas-feitas'
      || pathname === '/receitas-favoritas'
      || pathname === '/explorar'
      || pathname === '/explorar/comidas'
      || pathname === '/explorar/bebidas'
      || pathname === '/explorar/comidas/ingredientes'
      || pathname === '/explorar/bebidas/ingredientes'
    ) {
      return true;
    }
    return false;
  };

  const handleClickSearchButton = () => {
    if (!showButton) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  const searchIcon = () => (
    <div className="test">
      <button className="searchButton" onClick={ handleClickSearchButton } type="button">
        <img data-testid="search-top-btn" src={ Search } alt="Search" />
      </button>

    </div>
  );

  const handleClickPerfil = () => history.push('/perfil');

  return (
    <div className="header-container">
      <header
        className="fatherHeader"
      >
        <button onClick={ handleClickPerfil } className="profile-icon" type="button">
          <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profile" />
        </button>
        <h1 data-testid="page-title">
          {title}
        </h1>
        { verifyPathName()
          ? null
          : searchIcon()}
      </header>

      {showButton && <SearchBar /> }
    </div>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
