import React from 'react'
import Grid from '@material-ui/core/Grid';
import "./css/threeFeath.css";

export default function ThreeFeath() {
    return (
        <div className="three-feath">
        <Grid  container>    
        
        <Grid item xs={4} sm={4} className="grid grid-one"
                      data-aos="fade-right"
                      data-aos-offset="200"
                      // data-aos-delay="50"
                      data-aos-duration="600"
                      data-aos-easing="ease-in-out-quart"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-bottom"
        > 
        <div>
        <h1>We Provide The<br />Best Quality</h1>

            <img src={require("./images/highQuality3.png")} alt="highQuality"/>
            </div>
        </Grid>    
        
        <Grid item xs={4} sm={4} className="grid grid-two"
        data-aos="zoom-in"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-quart"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        > 
        <div>
            {/* <div className="line1"></div> */}
            <h1>Easy & Affordable<br />Payment</h1>
            <img src={require("./images/pay.png")} alt="pay"/>
            {/* <div className="line2"></div> */}
            
            </div>
        </Grid>    
        
        <Grid item xs={4} sm={4} className="grid grid-three"
        data-aos="fade-left"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-quart"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        > 
        <div>
            <h1>24 / 7 Available<br />Service</h1>
            {/* <h3>When You're Ready</h3>
            <h3>We're Here for You</h3> */}
            <img src={require("./images/clock.png")} alt="24/7 avalaible"/>
            </div>
        </Grid>    
        
        </Grid>    
        </div>
    )
}