import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
`;

export default function CountryCard({name}){
    return (
        <Card>{name}</Card>
    )
}