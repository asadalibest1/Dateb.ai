import React from 'react'
import Grid from '@material-ui/core/Grid';

import ImageSlider from './imageSlider';
import TextSlider from './textSlider'
import WebProjects from './webProjects'

import "../../css/porfolioSlide/projects.css";
import "../../css/porfolioSlide/buttons.css";


// import ImageSlider from './imageSlider';
// import TextSlider from './textSlider';
// import "../css/animateTextSlider.css";
// import "../css/slidestyle.css"

export default function Side1() {
const [slide, ChangeSlide] = React.useState(false) 
 

const changeSlide =()=>{
 
    if (slide === false){
      document.getElementsByClassName("main-grid5")[0].style.display = "none";
      document.getElementsByClassName("main-grid6")[0].style.display = "flex";
      document.getElementsByClassName("opacity-Projects")[0].style.backgroundColor = "#24272c";
      document.getElementById("showAll").style.display = "none";
      document.getElementById("showLess").style.display = "flex";
      document.getElementById("showLess").style.margin = "0 auto";
      document.getElementById("buttonShowLess").style.margin="0 auto";
      
}
 else if (slide === true){
  // setInterval(function(){
    document.getElementsByClassName("main-grid5")[0].style.display = "flex";
    document.getElementsByClassName("main-grid6")[0].style.display = "none";
    document.getElementsByClassName("opacity-Projects")[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById("showAll").style.display = "flex";
    document.getElementById("showAll").style.display = "flex";
    document.getElementById("showAll").style.margin = "0 auto";
    document.getElementById("buttonShowAll").style.margin="0 auto";    
    document.getElementById("showLess").style.display = "none";
    
    // }, 3000);
}

  ChangeSlide(! slide);

    }

    return (
  <>
  <div style={{ overflow: "hidden" }}>
    
<div className="minDivPojects"
    data-aos="zoom-out"
    data-aos-offset="200"
    // data-aos-delay="50"
    data-aos-duration="400"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
    >
      <div className="opacity-Projects">

  {/* <Grid item xs={12} sm={12}> */}
  <h1>Work</h1>
      <p>Check out my latest web projects</p>
      {/* <h3>From Web component and uX design to Meteor JS and Coffeescript.</h3> */}
      {/* </Grid>  */}

<Grid className="main-grid5" container 
        >
                      <Grid item xs={12} sm={6} className="grid1"
                         data-aos="zoom-in"
                         data-aos-offset="200"
                         data-aos-delay="400"
                         data-aos-duration="1300"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="false"
                         data-aos-anchor-placement="top-bottom"
                      >
                      {/* style={{ border: "1px solid yellow"}} */}
                                      {/* <h1>Grid 01</h1> */}
                                  
                            <ImageSlider />

                      </Grid>

                      <Grid item xs={12} sm={6} className="grid2"
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="400"
                        data-aos-duration="1300"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom"
                        >
                      {/* style={{ border: "1px solid black" }} */}
                          {/* <h1>Grid 02</h1> */}
                            <TextSlider />
                      
                      </Grid>

          </Grid>
 
            <div className="btn btn-one"  onClick={changeSlide} id="showAll">
              <span id="buttonShowAll">Show All</span>
          </div>


        {/* <button className={"showAll"} style={{ textAlign: "center"}} onClick={changeSlide}>Show all</button> */}
          <Grid className="main-grid6" style={{ display: "none"}} container>
          <WebProjects condition={slide}/>
        {/* <button className={"showLess"} style={{display: "none"}} onClick={changeSlide}>Show Less</button> */}
      {/* <div className="showLessButton"> */}
      
    <div className="btn btn-three" style={{display: "none", marginTop: "50px"}} onClick={changeSlide} id="showLess">
      <span id="buttonShowLess">Show Less</span>
    </div>
    {/* </div> */}
      </Grid>
  </div>
</div>                
</div>
  </>
  )
}