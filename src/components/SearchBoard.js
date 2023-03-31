import React, { useState, useEffect } from 'react';
import { getAllTag, getAllCountries, generateItineraryFromAI } from '../usecase/api';
import { Container, SearchBoardContainer, Form, Label, Input, Select, DropDownContainer } from '../components/styled/FormContainer';


export default function SearchBoard({ setItinerary }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        setLoading(true);
        generateItineraryFromAI(formData)
            .then((response) => {
                setItinerary(response.data.result.content);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [tags, setTags] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllTag(setTags);
        getAllCountries(setCountries);
    }, [])

    return (
        <Container>
            <SearchBoardContainer>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="country">Country:</Label>
                    <Input id="country" name="country" placeholder="France" required/>
                    <Label htmlFor="destination">Destination:</Label>
                    <Input id="destination" name="destination" placeholder="Paris"/>
                    <p></p>
                    <DropDownContainer >
                        <div style={{ display: "flex", flex: "1" }}>
                            <Label htmlFor="tags">Tags:</Label>
                            <Input id="tags" name="tags" placeholder="nature, historical"/>
                        </div>
                        <div style={{ display: "flex", flex: "1" }}>

                            <Label htmlFor="days">Days:</Label>
                            <Select id="days" name="days">
                                {days.map((day) => (
                                    <option value={day} key={day}>
                                        {day}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </DropDownContainer>

                    <button style={{ marginTop: "10px" }} type='submit' disabled={loading}>Sent</button>
                    <div>
                        {loading ? <p style={{ color: "red" }}>Loading... Ai might take around 30 seconds...</p> : <p>Itinerary generated!</p>}
                    </div>
                </Form>
            </SearchBoardContainer>
        </Container>
    )
}