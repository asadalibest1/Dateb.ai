import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default  function App(){
return(
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
        
    <div data-src="/path/to/image-0.png" >1</div>
    <div data-src="/path/to/image-1.png" >2</div>
    <div data-src="/path/to/image-2.jpg" >3</div>

  </AutoplaySlider>
)}
;