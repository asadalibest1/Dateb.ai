import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

import "../../css/porfolioSlide/textSlider.css";

// #242629

const content = [
  {
   para1: "We offer",
   para2: "Responsive and Trendy",
   para3: "Web Design",
  },
  {
    para1: "We provide",
    para2: "Creative and smart",
    para3: "Solutions for your Business",
   },
   {
    para1: "We build",
    para2: "online Applications",
    para3: "for you",
   }
];

export default function TextSlider(){
  return(
  <div className="sider-div">
    <Slider className="slider-wrapper"
      style={{
        border: "1px solid black"
      }}
      autoplay={2000}
      previousButton={false}
      nextButton={false}
>
      
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
        >
          <div className="inner">
            <h2 className="head1">{item.para1}</h2>
            <h2 className="head2">{item.para2}</h2>
            <h2 className="head3">{item.para3}</h2>
          </div>
        </div>
      ))}
    </Slider>
  </div>
)
};