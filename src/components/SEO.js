import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({ title, description, name, type, tags=[] }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}
            <meta property="article:section" content="Travel" />
            <meta property="article:tag" content={title} />
            <meta property="article:tag" content="itinerary" />
            <meta property="article:tag" content="travel" />
            <>
                {tags.map(({ tag }) => {
                    return <meta property='article:tag' content={tag} />
                })}
            </>
            <meta property='article:tag' content={tags} />
            { /* Twitter tags */}
            {/* <meta name="twitter:creator" content={name} /> */}
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    )
}