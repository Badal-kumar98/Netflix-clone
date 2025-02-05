import React, { useState, useEffect, useRef } from "react";
import "./trending.css";
import pic1 from "../../assets/image/pushpa.webp";
import pic2 from "../../assets/image/squid.webp";
import pic3 from "../../assets/image/lucky.webp";
import pic4 from "../../assets/image/bhool.webp";
import pic5 from "../../assets/image/venom.webp";

const movies = [
  { id: 1, title: "1", image: pic1 },
  { id: 2, title: "2", image: pic2 },
  { id: 3, title: "3", image: pic3 },
  { id: 4, title: "4", image: pic4 },
  { id: 5, title: "5", image: pic5 },
];

const Trending = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(movies.length / 4);
  const sliderRef = useRef(null);

  const navigate = (direction) => {
    const newIndex = (currentSlide + direction + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      sliderRef.current.startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const diff = sliderRef.current.startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? 1 : -1);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  return (
    <div className="trend-swiper">
      <div className="trend-slider-container">
        <h2 className="trend-heading">Trending Now</h2>
        <div className="trend-slider-wrapper" ref={sliderRef}>
          <div
            className="trend-slider"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => (
              <div key={index} className="trend-slide-group">
                {movies.slice(index * 4, index * 4 + 4).map((movie) => (
                  <div key={movie.id} className="trend-card">
                    <div className="trend-card-image-wrapper">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="trend-card-image"
                      />
                      <p className="trend-card-title">{movie.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          className="trend-nav-btn trend-prev-btn"
          onClick={() => navigate(-1)}
        >
          &#10094;
        </button>
        <button
          className="trend-nav-btn trend-next-btn"
          onClick={() => navigate(1)}
        >
          &#10095;
        </button>
        <div className="trend-slider-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`trend-dot ${
                currentSlide === index ? "trend-active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
