/* Create a React application that communicates with the API you created before. Your React app should be using the hooks approach.
When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page than the list of phones. */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AllPhones from './AllPhones';

const API_URL = 'http://localhost:5005';

export default function DetailsPhone() {
    const [phone, setPhone] = useState([]);
    const { phoneId } = useParams();
    
    useEffect(() => {
        axios
        .get(`${API_URL}/api/phones/${phoneId}`)
        .then((response) => {
            setPhone(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [phoneId]);
    
    return (
        <div>
        <h1>Details Phone</h1>
        <div key={phone._id}>
            <Link to={`/phones/${phone._id}`}>
            <h3>{phone.name}</h3>
            </Link>
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Description: {phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price: {phone.price}</p>
            <p>Screen: {phone.screen}</p>
            <p>Processor: {phone.processor}</p>
            <p>Ram: {phone.ram}</p>
        </div>
        </div>
    );
    }
    
