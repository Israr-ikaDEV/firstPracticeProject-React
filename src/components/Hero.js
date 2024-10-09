import React from 'react'
import sliderimg from '../assets/slider-img-1.jpg'
import sliderimg2 from '../assets/OIP.jpg'

const Hero = () => {
  return (
      <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={sliderimg2} className="d-block w-100 h-350" alt="..." />
        <div className="carousel-caption carousel-caption1 d-none d-md-block">
          <h1>Welcome to our website</h1>
          <p>Some representative placeholder content for the first slide.</p>
          <button type="button" class="btn  btn-lg ">Large button</button>
          <button type="button" class="btn  btn-lg">Large button</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={sliderimg} className="d-block w-100" alt="..." />
        <div className="carousel-caption carousel-caption1 d-none d-md-block">
        <h1>Something related to second img</h1>
          <p>Some representative placeholder content for the first slide.</p>
          <button type="button" class="btn  btn-lg">Large button</button>
  <button type="button" class="btn  btn-lg">Large button</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={sliderimg} className="d-block w-100" alt="..." />
        <div className="carousel-caption carousel-caption1 d-none d-md-block">
        <h1>Something related to third img</h1>
          <p>Some representative placeholder content for the first slide.</p>
          <button type="button" class="btn  btn-lg">Large button</button>
  <button type="button" class="btn btn-lg">Large button</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Hero
