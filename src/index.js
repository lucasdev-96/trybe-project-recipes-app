import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './styles/Global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RecipesProvider from './contexts/RecipesProvider';

ReactDOM.render(
  <HashRouter>
    <RecipesProvider>
      <App />
    </RecipesProvider>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
