'use client';

import React from 'react';

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
}

interface WordDefinitionProps {
  word: string;
  phonetic: string;
  meanings: Meaning[];
}

const WordDefinition: React.FC<WordDefinitionProps> = ({ word, phonetic, meanings }) => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold">{word}</h2>
      <p className="text-xl text-purple-600">{phonetic}</p>
      {meanings.map((meaning, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-2xl font-semibold">{meaning.partOfSpeech}</h3>
          <h4 className="mt-4 text-xl">Definitions:</h4>
          <ul className="list-disc list-inside">
            {meaning.definitions.map((def, idx) => (
              <li key={idx} className="mt-2">
                {def.definition}
                {def.example && (
                  <p className="mt-1 text-gray-600 italic">Example: "{def.example}"</p>
                )}
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xl">Synonyms:</h4>
              <p>{meaning.synonyms.join(', ')}</p>
            </div>
          )}
          {meaning.antonyms.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xl">Antonyms:</h4>
              <p>{meaning.antonyms.join(', ')}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;