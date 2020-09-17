import React from 'react'
import Grid from '@material-ui/core/Grid';
import "../css/slidestyle.css"

export default function Side2() {
    return (
      <div className="main-grid2-div">
        <Grid className="main-grid2" container id="TEgrid1">
        
        <Grid item xs={12} sm={6} className="grid1"
          data-aos="fade-right"
          data-aos-offset="200"
          // data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
                <img className="slide-img" src={require('../images/0staf.png')} alt="Talk to our experts illustration"/>
        </Grid>    


        <Grid item xs={12} sm={6} className="grid2"
          data-aos="fade-left"
          data-aos-offset="200"
          // data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
            <div>
                    <h1>Talk to our experts about your requirements</h1>
                    <p className="slide-para">
                          Contact us and know more about how our experts can help your business grow.
                    </p>
                    <div className="button button-2">Enquire Now</div>
            </div>
        </Grid> 
    </Grid>
  </div>
  )
}
