import './image-slider.css';
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ImgSlider1 from "../../../../common/assets/images/img-slider-1.jpeg";
import ImgSlider2 from "../../../../common/assets/images/img-slider-2.webp";
import ImgSlider3 from "../../../../common/assets/images/img-slider-3.webp";
import ImgSlider4 from "../../../../common/assets/images/img-slider-4.webp";
import ImgSlider5 from "../../../../common/assets/images/img-slider-5.webp";

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
        >
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ImgSlider1}
                    alt='First slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ImgSlider2}
                    alt='Second slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ImgSlider3}
                    alt='Third slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ImgSlider4}
                    alt='Fourth slide'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ImgSlider5}
                    alt='Fifth slide'
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageSlider;