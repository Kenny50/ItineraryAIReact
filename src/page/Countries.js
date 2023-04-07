import React, { useState, useEffect } from 'react';
import CountryCard from "../components/CountryCard";
import { FlexListItem, FlexList } from "../components/styled/FlexItems";
import { Link } from "react-router-dom";
import { getAllCountries } from '../usecase/api';
import SEO from "../components/SEO";

// get all countries
export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries(setCountries);
    }, [])
    //layout flex
    return (
        <div>
            <SEO
                title={`Itineraries by countries`}
                description={"Get itineraries in differernt country"}/>
            <h1>Country</h1>
            <FlexList>
                {countries.map(({ name, id }) => {
                    return (
                        <FlexListItem key={id}>
                            <Link to={`${id}`} relative="path">

                                <CountryCard name={name} />
                            </Link>
                        </FlexListItem>
                    )
                })}
            </FlexList>
        </div>
    )
}