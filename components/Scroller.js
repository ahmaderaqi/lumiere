
import { useEffect, useState } from 'react';

const Scroller = () => {
  const carouselItems = [
    "https://www.lumiereyvr.com/wp-content/uploads/2023/09/cropped-LumiereSocialImage.jpg",
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const moveToNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <div className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${
              index === currentSlideIndex ? '' : 'hidden'
            }`}
            data-carousel-item
          >
            <img
              src={item}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Carousel Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* ... (slider controls) */}
    </div>
  );
};

export default Scroller;
