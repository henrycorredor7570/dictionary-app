'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import SearchBar from './components/SearchBar';
import WordDefinition from './components/WordDefinition';
import AudioPlayer from './components/AudioPlayer';
import FontSelector from './components/FontSelector';
import ThemeToggle from './components/ThemeToggle';
import SearchHistory from './components/SearchHistory';
import { WordData } from './utils/api';

export default function Home() {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const font = useSelector((state: RootState) => state.font);
  const theme = useSelector((state: RootState) => state.theme);

  const handleWordFound = (data: WordData) => {
    setWordData(data);
  };

  return (
    <div
      className={`min-h-screen ${
        font === 'sans'
          ? 'font-sans'
          : font === 'serif'
          ? 'font-serif'
          : 'font-mono'
      } ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dictionary App</h1>
          <div className="flex items-center space-x-4">
            <FontSelector />
            <ThemeToggle />
            <SearchHistory />
          </div>
        </header>

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <SearchBar onWordFound={handleWordFound} />

          {wordData && (
            <div>
              <WordDefinition
                word={wordData.word}
                phonetic={wordData.phonetic}
                meanings={wordData.meanings}
              />
              {wordData.phonetics.some((p) => p.audio) && (
                <AudioPlayer audioUrl={wordData.phonetics.find((p) => p.audio)!.audio} />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
