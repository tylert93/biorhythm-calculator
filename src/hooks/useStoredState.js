import { useState } from 'react';

export const useStoredState = (storageKey, defaultState) => {
  const getInitialState = () => {
    const storedState = localStorage.getItem(storageKey);
    return storedState ?? defaultState;
  };

  const [state, setState] = useState(getInitialState);

  const setAndStoreState = (state) => {
    setState(state);
    localStorage.setItem(storageKey, state);
  };

  return [state, setAndStoreState];
};
