import React, { useState, useEffect } from 'react';
import SearchBoard from '../components/SearchBoard';

//post to server ai generate
export default function Search() {
  const [itinerary, setItinerary] = useState("");

  return (
    <div style={{ padding: "10px"}}>
        <SearchBoard setItinerary={setItinerary}/>
        <span style={{whiteSpace: "pre-line"}}>{itinerary}</span>
    </div>
  )
}
