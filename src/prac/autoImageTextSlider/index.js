import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function index() {
    return (
        <div>
            
            <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
        buttons={false}
>
      
          <div data-src="/path/to/image-0.png">
        <h1>head</h1>
    </div>
    <div data-src="/path/to/image-1.png">
        <h1>head</h1>
    </div>
    <div data-src="/path/to/image-2.jpg">
        <h1>head</h1>
    </div>
  </AutoplaySlider>

        </div>
    )
}
