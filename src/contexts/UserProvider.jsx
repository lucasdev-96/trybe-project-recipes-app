import React, { useState } from 'react';
import UserContext from './UserContext';

export default function UserProvider(children) {
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);
  const [state, setstate] = useState(initialState);

  const context = { id: 0 };
  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}
