import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getItineraryById } from '../usecase/api';

//detail of certain itinerary, get by id
export default function Itinerary(){
    const params = useParams();
    const [article, setArticle] = useState("");

    useEffect(() => {
        getItineraryById(params.id, setArticle)
    })

    return <div>{article}</div>
    
}