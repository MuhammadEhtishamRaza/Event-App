// import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { events } from "../../../data.js";
import { Button } from 'react-bootstrap';
import "./Card.css";

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const CardBox = () => {
    // Shuffle events and take first 6
    const randomEvents = shuffleArray(events).slice(0, 6);

    // Log randomEvents for debugging (optional)
    console.log(randomEvents);

    return (
        <div className="m-5">
            <h2 className='text-center mb-3'>Events</h2>
            <Row xs={1} sm={2} md={3} className="g-4">
                {randomEvents.map((event, index) => (
                    <Col key={index}>
                        <Card>
                            {/* Use event.image with fallback for placeholders */}
                            <Card.Img
                                variant="top"
                                src={event.imageUrl} // Fallback image
                                alt={event.title}
                                height={250}
                                className='image-card'
                            />
                            <Card.Body>
                                <Card.Title className='card-title-text'>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
                                <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
                                <Button type='submit' color='primary'>Register</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CardBox;