import React, { useEffect, useState } from 'react'

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
        
        console.log({response})

        const words = await response.json();

        console.log({words})
        // const index = Math.floor(Math.random() * words.length);
        // setWord(words[index]);
      } catch(error) {
        console.log(error.message)
        throw new Error('Error fetching api', error)
      }
    }
      
    fetchWords();
  }, []); // Empty dependency array means this effect runs once when the component mounts
    
  return (
    <div>
      {/* {word} */}
    </div>
  )
}
