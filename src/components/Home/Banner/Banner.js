import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6s5L4xn/slide3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>WE HELP YOU</p>
                        <h2>TO LIVE A HEALTHY LIFE</h2>
                        <button type="button" className="btn btn-warning">View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ky2RTsS/bg-slider2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>WE HELP YOU</p>
                    <h2>TO LIVE A HEALTHY LIFE</h2>
                        <button type="button" className="btn btn-warning">View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/p41mdXq/bg-slider3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>WE HELP YOU</p>
                        <h2>TO LIVE A HEALTHY LIFE</h2>
                        <button type="button" className="btn btn-warning">View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
