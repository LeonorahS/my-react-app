import { useState } from 'react';
import './Slideshow.css';

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  
  if (!pictures || pictures.length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures?.[0]} alt="Logement" className="slideshow-img" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Logement" className="slideshow-img" />

      <button className="slideshow-arrow slideshow-arrow-left" onClick={prevSlide}>
        ‹
      </button>

      <button className="slideshow-arrow slideshow-arrow-right" onClick={nextSlide}>
        ›
      </button>

      <span className="slideshow-counter">
        {currentIndex + 1}/{pictures.length}
      </span>
    </div>
  );
}