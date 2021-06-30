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
  const [btn, setBtn] = useState(false);
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
    if (btn === false) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  const searchIcon = () => (
    <div>
      {btn === true ? <input
        className="inputSearch"
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
      /> : null}
      <button className="searchButton" onClick={ handleClickSearchButton } type="button">
        <img data-testid="search-top-btn" src={ Search } alt="Search" />
      </button>
    </div>
  );

  const handleClickPerfil = () => history.push('/perfil');

  return (
    <div>

      <header
        className="fatherHeader"
      >
        <button onClick={ handleClickPerfil } className="searchButton" type="button">
          <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profile" />
        </button>
        <h1 data-testid="page-title">
          {title}
        </h1>
        { verifyPathName() === true
          ? null
          : searchIcon()}
      </header>

      <SearchBar />
    </div>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
