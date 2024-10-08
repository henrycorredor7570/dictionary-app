'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setFont } from '../store/slices/fontSlice';

const FontSelector: React.FC = () => {
  const font = useSelector((state: RootState) => state.font);
  const dispatch = useDispatch();

  const fonts = [
    { name: 'Sans Serif', value: 'sans' },
    { name: 'Serif', value: 'serif' },
    { name: 'Monospace', value: 'mono' },
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 dark:text-gray-300">Font:</span>
      <select
        value={font}
        onChange={(e) => dispatch(setFont(e.target.value as 'sans' | 'serif' | 'mono'))}
        className="p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        {fonts.map((f) => (
          <option key={f.value} value={f.value}>
            {f.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;