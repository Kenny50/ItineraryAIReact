import React, { useState, useEffect } from 'react';
import CountryCard from "../components/CountryCard";
import { FlexListItem, FlexList } from "../components/styled/FlexItems";
import { Link } from "react-router-dom";
import { getAllCountries } from '../usecase/api';

// get all countries
export default function Countries() {
    const [countries, setCountries] = useState([
        // { countryName: "Thailand", id: 0 },
        // { countryName: "Usa", id: 1 },
        // { countryName: "Japan", id: 2 },
        // { countryName: "France", id: 3 },
        // { countryName: "Canada", id: 4 },
    ]);

    useEffect(()=> {
        getAllCountries(setCountries);
    }, [])
    //layout flex
    return (
        <div>
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