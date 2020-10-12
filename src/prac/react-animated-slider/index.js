import React from "react";
// import Header from "./header";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title:"this is title 1",
    description:
      "description 1",
    // button: "Read More",
    // image: "https://i.imgur.com/ZXBtVw7.jpg",
    // user: "user one",
    // userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title:"this is title 2",
    description:
      "description 2",
    // button: "Discover",
    // image: "https://i.imgur.com/DCdBXcq.jpg",
    // user: "user one",
    // userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title:"this is title 3",
    description:
      "description 3",
    // button: "Buy now",
    // image: "https://i.imgur.com/DvmN8Hx.jpg",
    // user: "user one",
    // userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

export default function App(){
  return(
  <div className="sider-div">
    {/* <Header /> */}
    <Slider className="slider-wrapper"
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
            <h2 className="head1">{item.title}</h2>
            <h2 className="head2">{item.description}</h2>
            <h2 className="head3">{item.description}</h2>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  </div>
)
};