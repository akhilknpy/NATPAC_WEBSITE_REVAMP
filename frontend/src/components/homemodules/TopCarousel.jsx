import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
const TopCarousel = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('http://localhost:3000/carousel/images');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (

    <div>
      <div>
        <Carousel fade className='carousal'>
          {images.length > 0 ? (
            images.map((image, index) => (

              <Carousel.Item key={index}>
                <img style={{ height: '62vh' }}
                  className="d-block w-100"
                  src={`http://localhost:3000/${image.path}`}
                  alt={image.name}
                />
                <Carousel.Caption>
                  <h3>{image.name}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <p>No images available</p>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default TopCarousel