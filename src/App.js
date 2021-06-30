import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './contexts/UserProvider';
import Routes from './components/Routes';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
