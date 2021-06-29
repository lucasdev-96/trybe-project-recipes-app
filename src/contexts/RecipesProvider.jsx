import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

export default function RecipesProvider(children) {
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
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}
