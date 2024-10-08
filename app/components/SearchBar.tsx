'use client';
//Este componente manejará la búsqueda de palabras y mostrará mensajes de validación.
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../store/slices/historySlice';
import { fetchWordData, WordData } from '../utils/api';
//Define las propiedades (props) que el componente SearchBar acepta. En este caso, la propiedad onWordFound es una función que recibe como parámetro los datos de la palabra (WordData) cuando la búsqueda tiene éxito.
interface SearchBarProps {
  onWordFound: (data: WordData) => void;
}
//Define el componente SearchBar como un componente funcional que recibe SearchBarProps. En particular, recibe la función onWordFound, que es la forma en la que SearchBar le "notifica" a su componente padre que ha encontrado datos de la palabra buscada.
const SearchBar: React.FC<SearchBarProps> = ({ onWordFound }) => {
  //Almacena el valor de la palabra que el usuario escribe en la barra de búsqueda.
  const [query, setQuery] = useState('');
  // Almacena el mensaje de error si ocurre algún problema (como cuando el campo de búsqueda está vacío o si la llamada a la API falla).
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  // Esta función se ejecuta cuando el usuario envía el formulario de búsqueda
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a word to search');
      return;
    }
    setError('');
    try {
      const result = await fetchWordData(query);
      dispatch(addToHistory({ word: query, timestamp: new Date().toISOString() }));
      onWordFound(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a word..."
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;