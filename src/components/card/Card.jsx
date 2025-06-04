// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        transition: {
            duration: 0.3
        }
    }
};

const CardBox = () => {
    // Shuffle events and take first 6
    const randomEvents = shuffleArray(events).slice(0, 6);

    return (
        <div className="m-5" id="events">
            <h2 className='text-center mb-3'>Events</h2>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <Row xs={1} sm={2} md={3} className="g-4" id="row-card">
                    {randomEvents.map((event, index) => (
                        <Col key={index}>
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <Card className="h-100" id="card-body">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={event.imageUrl}
                                            alt={event.title}
                                            height={250}
                                            className='image-card'
                                        />
                                    </motion.div>
                                    <Card.Body>
                                        <Card.Title className='card-title-text'>{event.title}</Card.Title>
                                        <Card.Text>{event.description}</Card.Text>
                                        <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
                                        <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
                                        <Button type='submit' color='primary'>Register</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </div>
    );
};

export default CardBox;