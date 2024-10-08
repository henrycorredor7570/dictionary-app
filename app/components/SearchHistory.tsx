'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SearchHistory: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useSelector((state: RootState) => state.history);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      >
        Search History
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded shadow-lg">
          <ul className="py-2">
            {history.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <p className="font-semibold">{item.word}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchHistory;