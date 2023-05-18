import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';

const API_URL = 'http://localhost:5005';

export default function AllPhones() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

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

  const handleMoreInfoClick = (phone) => {
    setSelectedPhone(phone);
  };

  const handleBackClick = () => {
    setSelectedPhone(null);
  };

  return (
    <div>
      <h1 className="text-center mb-4">The Phone Cave Catalog App</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {phones.map((phone) => (
          <Col key={phone.id}>
            <Card>
              <Card.Img variant="top" src={`/images/${phone.imageFileName}`} alt={phone.name} />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>
                  <p>{phone.manufacturer}</p>
                </Card.Text>
                {selectedPhone === phone ? (
                  <div>
                    <p>Description: {phone.description}</p>
                    <p>Color: {phone.color}</p>
                    <p>Price: {phone.price}</p>
                    <p>Screen: {phone.screen}</p>
                    <p>Processor: {phone.processor}</p>
                    <p>Ram: {phone.ram}</p>
                  </div>
                ) : (
                  <Button variant="primary" onClick={() => handleMoreInfoClick(phone)}>
                    More Info
                  </Button>
                )}
              </Card.Body>
              {selectedPhone === phone && (
                <Card.Text>
                  <Button variant="primary" onClick={handleBackClick}>
                    Back
                  </Button>
                
                </Card.Text>
              )}
              <br />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
