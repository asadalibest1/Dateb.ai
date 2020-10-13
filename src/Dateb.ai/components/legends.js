import React from 'react'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import image1 from "./images/legends/asad.jpg";
import image2 from "./images/legends/qasim.jpg";
import "normalize.css/normalize.css";
import "./css/legends.css"

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
 
const slides = [
  { img: image1, name: "Asad Ali", title: 'Web Developer', linkedIn: "https://www.linkedin.com/in/asad-ali-14bab11b2/", whatsapp: "+923181038402", facebook: "https://www.facebook.com/asadali.asad.355", description: "Hi, This is Asad. An innovative Web developer. Thanks for visiting my site. I am passionate all the way with web development and cloud computing technologies. I have Excellent skills for building fully functional responsive Websites on Business Requirements using advance React and other latest web technologies. I am still here to serve you passionately with a variety of my best services."},
  { img: image2, name: "Qasim Hassan", title: 'AI Researcher', linkedIn: "https://www.linkedin.com/in/qasim-hassan-108725180/", whatsapp: "+923002337565", facebook: "https://www.facebook.com/qasim.hassan.39904181", description: 'Lorem ipsum'},
  { img: image1, name: "Asad Ali", title: 'Web Developer', linkedIn: "https://www.linkedin.com/in/asad-ali-14bab11b2/", whatsapp: "+923181038402", facebook: "https://www.facebook.com/asadali.asad.355", description: "Hi, This is Asad. An innovative Web developer. Thanks for visiting my site. I am passionate all the way with web development and cloud computing technologies. I have Excellent skills for building fully functional responsive Websites on Business Requirements using advance React and other latest web technologies. I am still here to serve you passionately with a variety of my best services."},
  { img: image2, name: "Qasim Hassan", title: 'AI Researcher', linkedIn: "https://www.linkedin.com/in/qasim-hassan-108725180/", whatsapp: "+923002337565", facebook: "https://www.facebook.com/qasim.hassan.39904181", description: 'Lorem ipsum'},
];
 

export default function legends() {
    return (
      <div className="scroll-legends">
        <div className="legends-main-div">
          <div className="inner-div">
          <h2 className="meet-legends">Meet your Legends</h2>
          <Slider
             autoplay={4000}
            // duration={1000}
             touchDisabled={true}
             >
            {slides.map((slide, index) => <div key={index}>
         
            <div>
              <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  // data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out-quart"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-bottom"
              
              >
              <img src={slide.img} alt="legends" />
              <h1 className="legends-name">{slide.name}</h1>              
              <h3 className="legends-title">{slide.title}</h3>
                
                <IconButton className="legend-contacts" color="inherit" aria-label="menu">
                  <LinkedInIcon className="legend-contacts-icons" onClick={()=>{window.open(slide.linkedIn)}}/>
                </IconButton>
                <IconButton className="legend-contacts" color="inherit" aria-label="menu">
                  <WhatsAppIcon className="legend-contacts-icons" onClick={()=>{window.open("https://api.whatsapp.com/send?phone="+ slide.whatsapp +"&text=%20Greetings, I need your help regarding the services.")}} />
                </IconButton>
                <IconButton className="legend-contacts" color="inherit" aria-label="menu">
                  <FacebookIcon className="legend-contacts-icons" onClick={()=>{window.open(slide.facebook)}}/>
                </IconButton>

              <p>{slide.description}</p>
            </div>
           </div>         
        
           </div>)}
          </Slider>

        </div>
        </div>
        </div>
    )
}