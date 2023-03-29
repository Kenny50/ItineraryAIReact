import React, { useState, useEffect } from 'react';
import { getAllItinerary, getItinerariesByCountryId, getItinerariesByTagId } from '../usecase/api';
import { useParams } from "react-router-dom";
import ItineraryCard from '../components/ItineraryCard';

//page have all itineraries, get by country or tag, sort by popular, and recently
export default function Itineraries() {
    //if from tag, if from country, else all
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        if(params.country){
            getItinerariesByCountryId(params.country, setData);
        } else if(params.tag) {
            getItinerariesByTagId(params.tag, setData);
        } else {
            getAllItinerary(setData);
        }
    }, [])


    return <div>
        <h2>
            Itineraries
        </h2>
        <ul>
            {data.map(({ id, content }) => {
                return (<li key={id}>
                    <ItineraryCard title={content.slice(0, 20)} body={content} />
                </li>)
            })}
        </ul>
    </div>
}