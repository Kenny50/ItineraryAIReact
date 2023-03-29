import React, { useState, useEffect } from 'react'
import Tag from "../components/Tag";
import { FlexListItem, FlexList } from "../components/styled/FlexItems";
import { Link } from "react-router-dom";
import { getAllTag } from '../usecase/api';

//page has all tags
export default function Tags() {
    const [tags, setTags] = useState([
        // { tag: "Historical", id: 0 },
        // { tag: "Shopping", id: 1 },
        // { tag: "Outdoor", id: 2 },
        // { tag: "Cuisine", id: 3 },
        // { tag: "Culture", id: 4 },
    ]);

    useEffect(()=> {
        getAllTag(setTags);
    }, [])

    //layout flex
    return (
        <div>
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