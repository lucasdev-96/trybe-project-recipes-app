import React, { useState } from 'react';
import { object } from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const [login, setLogin] = useState({ email: '', password: '' });
  const context = {
    login,
    setLogin,
  };
  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isRequired;
