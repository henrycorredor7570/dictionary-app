import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export interface WordData {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
}

export async function fetchWordData(word: string): Promise<WordData> {
  try {
    const response = await axios.get<WordData[]>(`${API_URL}${word}`);
    return response.data[0];
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('Word not found');
    }
    throw new Error('An error occurred while fetching the word data');
  }
}