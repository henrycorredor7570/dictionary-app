'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../store/slices/historySlice';
import { fetchWordData, WordData } from '../utils/api';

interface SearchBarProps {
  onWordFound: (data: WordData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onWordFound }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

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