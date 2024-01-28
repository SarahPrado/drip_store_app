import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';
import './Slider.css'


export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <div>
              <p>Melhores ofertas personalizadas</p>
              <h3>Queima de stoque Nike 🔥</h3>
              <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <div>
            <img src="src/assets/imgs/White-Sneakers-PNG-Clipart 1.png" alt="Tenis branco" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <div>
              <p>Melhores ofertas personalizadas</p>
              <h3>Queima de stoque Nike 🔥</h3>
              <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          </div>
          <div>
            <img src="src/assets/imgs/White-Sneakers-PNG-Clipart 1.png" alt="Tenis branco" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <div>
              <p>Melhores ofertas personalizadas</p>
              <h3>Queima de stoque Nike 🔥</h3>
              <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
              <link rel="stylesheet" href="" />
          </div>
          <div>
            <img src="src/assets/imgs/White-Sneakers-PNG-Clipart 1.png" alt="Tenis branco" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}