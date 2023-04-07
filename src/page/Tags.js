import React, { useState, useEffect } from 'react'
import Tag from "../components/Tag";
import { FlexListItem, FlexList } from "../components/styled/FlexItems";
import { Link } from "react-router-dom";
import { getAllTag } from '../usecase/api';
import SEO from "../components/SEO";

//page has all tags
export default function Tags() {
    const [tags, setTags] = useState([]);

    useEffect(()=> {
        getAllTag(setTags);
    }, [])

    //layout flex
    return (
        <div>
            <SEO
                title={`Itineraries by tags`}
                description={"Get itineraries in differernt tags"}/>
            <h1>Tags</h1>

            <FlexList>
                {tags.map(({ name, id }) => {
                    return (
                        <FlexListItem key={id}>
                            <Link to={`${id}`} relative="path">
                                <Tag name={name} />
                            </Link>
                        </FlexListItem>
                    )
                })}
            </FlexList>

        </div>
    )
}