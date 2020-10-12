import React from 'react'
import './css/app.css'

import useWebAnimations from "@wellyshen/use-web-animations";
// import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export default function App() {

const {ref, playState, getAnimation} = useWebAnimations({
  playbackRate: 0.5, // Change playback rate, default is 1
  autoPlay: false,
  keyframes: [
    {
      transform: "translate(0, 0)",
      transform: "translate(400px, 0)",
    }
    ],
  timing:{
    delay: 500,
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  },
  onReady: ({ playState, animate, animation }) => {
    // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    // console.log(playState);
    // console.log(animate);
    // console.log(animation);
    // alert("ready");
  },
  onUpdate: ({ playState, animate, animation }) => {
    // Triggered when the animation enters the running state or changes state
  },
  onFinish: ({ playState, animate, animation }) => {
    // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  },
  // More useful options...
}) 

              // ....................................
  // We can customize the built-in animation by overriding its properties:
// const { keyframes, timing } = fadeInUp;
// const { ref } = useWebAnimations({
  
//   keyframes,

//   timing: {
//     ...timing,
//     delay: 3000, // Delay 1s
//     duration: timing.duration * 1, // Speed up the animation
//     iterations: 5, // Repeat once

//   },
// });

              // ....................................
// Add a pre-defined effect to the target
//   const { ref } = useWebAnimations({ ...backInUp });

return (
        <div className="div">
          <h1 className="h1" ref={ref}>{playState}</h1>
          <p><button onClick={()=>getAnimation().pause()}>Pause</button></p>
          <p><button onClick={()=>getAnimation().play()}>Play</button></p>
        </div>
    )
}
// fadeInUp
// zoomIn
// zoomInUp
// zoomInDown

// slideInUp