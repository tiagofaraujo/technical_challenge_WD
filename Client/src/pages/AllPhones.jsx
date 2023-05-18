import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button} from 'react-bootstrap';

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
                    <Link to={`/phones/${phone.id}`}>
                      <Button variant="primary">More Info</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }