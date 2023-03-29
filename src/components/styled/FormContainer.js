import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const SearchBoardContainer = styled.div`
    flex: 1;
    margin-right: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
    flex: 100%;
    margin-right: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: right;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    margin-top: 10px
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    flex: 1;
    border: 1px solid #ccc;
`;

export const DropDownContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: flex;
    }
    
    @media (max-width: 480px) {
        display: block;
    }
`;