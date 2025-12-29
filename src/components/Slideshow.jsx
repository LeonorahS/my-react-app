import { useState } from 'react';   
import './Slideshow.css';

export default function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);


 const nextSlide = () => {
        setCurrentIndex((prev) =>prev === images.length - 1 ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    };

  if (!images || images.length <= 1) {
        return(
       <div className="slideshow">
            <img src={images[currentIndex]} alt="Logement"  className="slideshow-img" />

            <button className="slideshow-arrow slideshow-arrow-left" onClick={prevSlide}></button>
        
            <button className="slideshow-arrow slideshow-arrow-right" onClick={nextSlide}></button>

            <span className="slideshow-counter">
                 {currentIndex + 1}/{images.length}
            </span>
        </div>
         );

    }
}
