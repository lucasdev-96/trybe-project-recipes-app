import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';

function Perfil() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { email } = user;

  function onClick() {
    localStorage.clear();
  }

  return (
    <div>
      <Header title="Perfil" />
      <img alt="profile" src="userImage.png" />
      <h2 data-testid="profile-email">{ email }</h2>
      <Link to="/receitas-favoritas">
        <button type="button" data-testid="profile-favorite-btn">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="profile-logout-btn" onClick={ onClick }>
          Sair
        </button>
      </Link>
      <BottomMenu />
    </div>
  );
}

export default Perfil;
