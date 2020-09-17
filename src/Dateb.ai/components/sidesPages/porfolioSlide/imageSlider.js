import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import "../../css/porfolioSlide/imageSlider.css";


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default  function ImageSlider(){
return(
  <div className="slide-div">
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}>

{/* 
        <div className="imageSlides1" ></div>
        <div className="imageSlides2" ></div>
        <div className="imageSlides3" ></div>
        <div className="imageSlides4" ></div> */}

     <div className="imageSlides" data-src={require("./porfolioGallery/web/covide19.jpg")} />
    <div className="imageSlides" data-src={require("./porfolioGallery/web/expense.jpg")} />
    <div className="imageSlides" data-src={require("./porfolioGallery/web/shoe-store.jpg")} />
    <div className="imageSlides" data-src={require("./porfolioGallery/web/webflex.jpg")} />

  </AutoplaySlider>
  </div>
)}
;