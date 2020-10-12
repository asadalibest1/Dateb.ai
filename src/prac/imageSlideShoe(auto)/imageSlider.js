import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import "./imageSlider.css"
// import "../css/projects.css"
// import "../css/slidestyle.css"


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// const slideImages  = [
//     require("../images/projects/covide19.jpg"),  
//     require("../images/projects/expense.jpg"),  
//     require("../images/projects/shoe-store.jpg"),  
//     require("../images/projects/webflex.jpg"),  
//   ];

const properties = {
    // duration: 5000,
    // transitionDuration: 500,
    // infinite: true,
    
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><ArrowBackIosIcon className="arrows" fontSize="large" style={{paddingLeft: "20px"}}/></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-46px"}}><ArrowForwardIosIcon className="arrows" fontSize="large" style={{paddingRight: "20px"}}/></div>
  };

  // const zoomOutProperties = {
  //   indicators: true,
  // }

  export default function ImageSlider() {
    return (
  <>
      <div className="slide-container" >
                <Slide {...properties} indicators= {true} style={{ border: "1px solid white"}}>
                  <div className="each-fade">
                    <div className="image-container">
                      {/* <img src={slideImages[0]} /> */}
                    </div>
                    <h2>First Slide</h2>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      {/* <img src={slideImages[1]} /> */}
                    </div>
                    <h2>Second Slide</h2>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      {/* <img src={slideImages[2]} /> */}
                    </div>
                    <h2>Third Slide</h2>
                  </div>
                  <div className="each-fade">
                    <div className="image-container">
                      {/* <img src={slideImages[3]} /> */}
                    </div>
                    <h2>Fourth Slide</h2>
                  </div>
                  
                </Slide>
              </div>
  </>
  )
}
