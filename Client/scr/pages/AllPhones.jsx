/* Create a React application that communicates with the API you created before. Your React app should be using the hooks approach.

Show a list with all the phones */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

export default function AllPhones() {
    const [phones, setPhones] = useState([]);
    
    useEffect(() => {
        axios
        .get(`${API_URL}/api/phones`)
        .then((response) => {
            setPhones(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <div>
        <h1>All Phones</h1>
        {phones.map((phone) => {
            return (
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
            );
        })}
        </div>
    );
    }
    
