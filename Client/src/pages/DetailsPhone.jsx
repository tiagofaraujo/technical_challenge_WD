import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const API_URL = 'http://localhost:5005';

export default function DetailsPhone() {
  const [phone, setPhone] = useState({});
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
    <div className="container">
      <h1 className="mt-4">Details Phone</h1>
      <div className="card mt-4">
        <div className="card-body">
          <Card.Img
            variant="top"
            src={`/images/${phone.imageFileName}`}
            alt={phone.name}
            style={{ width: '200px', height: 'auto' }} // Specify the desired dimensions
          />
          <h3 className="card-title">{phone.name}</h3>
          <p className="card-text">Manufacturer: {phone.manufacturer}</p>
          <p className="card-text">Description: {phone.description}</p>
          <p className="card-text">Color: {phone.color}</p>
          <p className="card-text">Price: {phone.price}</p>
          <p className="card-text">Screen: {phone.screen}</p>
          <p className="card-text">Processor: {phone.processor}</p>
          <p className="card-text">Ram: {phone.ram}</p>
        </div>
      </div>
      <br />
      <Link to="/" className="btn btn-primary mb-3">
        Back to Phone List
      </Link>
    </div>
  );
}
