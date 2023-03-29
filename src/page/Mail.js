import React from 'react';
import {Container, SearchBoardContainer, Form, Label, Input} from '../components/styled/FormContainer';
import { registerMail } from '../usecase/api';


export default function Mail() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        registerMail(formData);
    };
    return (
        <Container>
            <SearchBoardContainer>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="mail">Mail:</Label>
                    <Input id="mail" name="mail" />

                    <button style={{ marginTop: "10px" }} type='submit'>Sent</button>
                </Form>
            </SearchBoardContainer>
        </Container>
    )
}
