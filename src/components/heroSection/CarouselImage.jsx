import "./CarouselImage.css";

const CarouselImage = ({ img }) => {
    return (
        <div className="carousel-body">
            <div className="overlay"></div>
            <img src={img} alt="Carousel Image" className="carousel-image" />
        </div>
    )
}

export default CarouselImage