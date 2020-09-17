import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import '../css/scss/animate.scss';
// import "../css/side3.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default  function Side3(){
return(
          <div className="side3-parent-div">
          <div className="side3-main-div"
            data-aos="zoom-in"
            data-aos-offset="200"
        //     data-aos-delay=""
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"          
          >
          <AutoplaySlider
          className="side3-slider"
                // style={{ height: "400px"}}
        //     organicArrows="false"
        //     buttons="true"
            animation="scaleOutAnimation"
            play={true}
            transitionDelay={700}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={4000}
                buttons={false}
        //     bullets="true"
                // fillParent="true"
        >
        
             <div>
                     <div>
                     <div className="slide1 img">
                                <h2>Dateb.ai is a smarter way to book any kind<br />
                                of move and to make your ideas turned into a reality and get<br />
                                        your business online</h2>
                     </div>
                </div>
             </div>
            <div>
                    <div>
                    <div className="slide2 img">
                                 <h2>Dateb.ai has Expert Creatives<br />
                                 Who Deliver and here to make your life easier<br />
                                 <br />
                                 — talk to us about how we can help.
</h2>
                    </div>
                </div>
            </div>
            <div>
                    <div>
                    <div className="slide3 img">
                                 <h2>So, are you Ready to Innovate and Grow</h2>
                    </div>
                </div>
            </div>           
          </AutoplaySlider>
          </div>
          </div>
        )
};






