import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundBg from '../images/NotFound.svg';

import '../styles/notFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <img src={ NotFoundBg } alt="pagina não encontrada" />

      <h1>Página não encontrada</h1>

      <Link to="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
