import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

export const Toggle =()=> {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Current Theme: {theme} - Click to Toggle
    </button>
  );
}

