import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export function getAllItinerary(setData) {
    axios
        .get(`${baseUrl}/itineraries`)
        .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}

export function getItineraryById(id, setData) {
    axios
        .get(baseUrl + id)
        .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}

export function getItinerariesByTagId(id, setData) {
    axios
        .get(baseUrl + `/tag/${id}/itineraries`)
        .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}

export function getItinerariesByCountryId(id, setData) {
    console.log(baseUrl + `/country/${id}/itineraries`);
    axios
    .get(baseUrl + `/country/${id}/itineraries`)
    .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}


export function getAllTag(setData) {
    axios
    .get(baseUrl + `/tags`)
    .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}


export function getAllCountries(setData) {
    axios
    .get(baseUrl + `/countries`)
    .then((response) => {setData(response.data);})
        .catch((error) => {console.log(error);});
}

export function generateItineraryFromAI(formData){
    return axios.post(
        baseUrl + '/generate-itinerary',
        formData
    )
}

export function registerMail(formData){
    axios.post(
        baseUrl + '/add-mail',
        formData
    )
}