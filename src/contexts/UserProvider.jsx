import React from 'react';
import { object } from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const context = { id: 0 };
  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isRequired;
