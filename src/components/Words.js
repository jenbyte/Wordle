import React, { useEffect, useState } from 'react'
import Grid from './Grid';

const API_URL = '/api/api/fe/wordle-words';

export default function Words() {
  const [word, setWord] = useState('');

  useEffect(() => {
    console.log('in useEffect:')
    const fetchWords = async() => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const words = await response.json();
        const index = Math.floor(Math.random() * words.length);
        setWord(words[index]);
      } catch(error) {
        throw new Error('Error fetching api', error)
      }
    }
      
    fetchWords();
  }, []); // Empty dependency array means this effect runs once when the component mounts
    
  return (
    <div>
      <Grid word={word} />
      {word}
    </div>
  )
}
