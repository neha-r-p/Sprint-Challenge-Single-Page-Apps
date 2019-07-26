import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results);
        // console.log(setCharacters)
      })
      .catch(err => {
        console.log("API unavailable", err)
      })
    
  }, [])

  return (<section className='character-list grid-view'>

      {characters.map(char => {
        return <CharacterCard key={char.id} {...char} />
      })}
    </section>
  )
}
