import React, { useState, useEffect } from 'react';
import SearchBoard from '../components/SearchBoard';
import SEO from "../components/SEO";

//post to server ai generate
export default function Search() {
  const [itinerary, setItinerary] = useState("");

  return (
    <div style={{ padding: "10px" }}>
      <SEO
        title={`Itinerary AI generator`}
        description={"Dashboard could use for generate itinerary by AI model, optimize for specific country and customize event"}
      />
      <SearchBoard setItinerary={setItinerary} />
      <span style={{ whiteSpace: "pre-line" }}>{itinerary}</span>
    </div>
  )
}
