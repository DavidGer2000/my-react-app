import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-carousel"
          src="./gallery/slider1.jpg"
          alt="first slide"
        />
        <Carousel.Caption>
          <div className="d-none d-md-block bg-dark text-white bg-opacity-75">
            <h5 className="fw-bold">קרן הגידור המובילה בישראל</h5>
            <p className="fw-normal">ניהול של מעל 10 מיליארד שקלים. מעל 5000 לקוחות</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-carousel"
          src="./gallery/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="d-none d-md-block bg-dark text-white bg-opacity-75">
            <h5 className="fw-bold">.וותק של 15 שנה</h5>
            <p className="fw-normal">הנבת רווחים והכאת השוק באופן עיקבי.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-carousel"
          src="./gallery/slider3.jpg"
          alt="thre slide"
        />
        <Carousel.Caption>
          <div className="d-none d-md-block bg-dark text-white bg-opacity-75">
            <h5 className="fw-bold">מקצועיות ללא פשרות</h5>
            <p className="fw-normal"> ai ניהול התיקים בידי המנהלים הטובים ביותר בשילוב טכנולוגיות</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-carousel"
          src="./gallery/slider4.jpg"
          alt="four slide"
        />
        <Carousel.Caption>
          <div className="d-none d-md-block bg-dark text-white bg-opacity-75">
            <h5 className="fw-bold">התאמה אישית ללקוח</h5>
            <p className="fw-normal">בהשקעות אין תחליף להתאמה אישית לתוכניות שלך</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;