import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardBox = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const username = 'eventapp4';
        const password = 'pzqwdc3czt84';
        const credentials = btoa(`${username}:${password}`);

        fetch('https://api.eventfinda.co.nz/v2/events.json', {
            headers: {
                'Authorization': `Basic ${credentials}`,
            },
        })
            .then(response => {
                response.json();
                setEventData(response.json())
            })
            .then(data => {
                console.log(data); // Handle the event data here
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(eventData);

    return (
        <div className="m-5">
            <Row xs={1} sm={2} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardBox