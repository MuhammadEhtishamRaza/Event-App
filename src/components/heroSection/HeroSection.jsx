import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image6 from "../../assets/image6.png";

const HeroSection = () => {

    return (
        <Carousel fade controls={false}>
            <Carousel.Item interval={1000}>
                <CarouselImage img={image3} />
                <Carousel.Caption>
                    <h2>Discover Exciting Events</h2>
                    <p>Find the best concerts, workshops, and meetups near you. Never miss out on what's happening in your city!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage img={image2} />
                <Carousel.Caption>
                    <h2>Plan with Ease</h2>
                    <p>From ticket booking to reminders, we've got you covered. Manage your events seamlessly in one place.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage img={image6} />
                <Carousel.Caption>
                    <h2>Stay Updated</h2>
                    <p>Get real-time notifications for trending events and personalized recommendations based on your interests</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroSection