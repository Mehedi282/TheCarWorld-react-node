import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./style/slider.css"

export default function Slider() {
    return (
        <div>
            <div className='slider'>
                <div className='container' >
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="bg.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <div className="logo logo-slider">
                                            <h2>
                                                <span>T</span>he <span>W</span>orld
                                                <span>C</span>ar
                                            </h2>
                                        </div>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="bg.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    <div className="logo logo-slider">
                                            <h2>
                                                <span>T</span>he <span>W</span>orld
                                                <span>C</span>ar
                                            </h2>
                                        </div>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="bg.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <div className="logo logo-slider">
                                            <h2>
                                                <span>T</span>he <span>W</span>orld
                                                <span>C</span>ar
                                            </h2>
                                        </div>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
