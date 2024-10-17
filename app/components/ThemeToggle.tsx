'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTheme, setTheme, ThemeState} from '../store/slices/themeSlice';

const ThemeToggle: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme as ThemeState);
  const dispatch = useDispatch();

  useEffect(() => {//Este useEffect se ejecuta una vez cuando el componente se monta.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;//window.matchMedia para verificar si el usuario 
    //prefiere un esquema de color oscuro (basado en la configuración del sistema operativo).
    dispatch(setTheme(prefersDark ? 'dark' : 'light'));
  }, [dispatch]);

  useEffect(() => {//Este useEffect se ejecuta cada vez que cambia el theme.
    document.documentElement.classList.toggle('dark', theme === 'dark');
    //Utiliza classList.toggle para agregar o quitar la clase 'dark' en el elemento raíz del documento (el html),
    // lo que permite aplicar estilos CSS específicos para el tema oscuro.
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme(theme))}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;