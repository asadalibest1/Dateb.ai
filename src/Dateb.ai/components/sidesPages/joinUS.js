import React from 'react'
import Grid from '@material-ui/core/Grid';

import "../css/slidestyle.css"
import "../css/scss/inputs/inputs.scss"

export default function JoinUS() {
    return (
<>
<Grid className="main-grid3" container 
        data-aos="fade-up"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-bottom"
        >        
 
        <Grid item xs={12} sm={6} className="grid1">
                    <img className="slide-img" src={require("../images/joinUs.jpg")} alt="join us"/>
        </Grid>

      <Grid item xs={12} sm={6} className="grid2">
            <div style={{ margin: "0 auto" }}>
                <h1>Join us</h1>
                <form method="get">
<div className="joinUs-inputs">   
<input className="c-checkbox" type="checkbox" id="checkbox1" />
<div className="c-formContainer">
  <div className="c-form">
    <input className="c-form__input" placeholder="Name" type="text" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />

    <label className="c-form__buttonLabel" for="checkbox1">
      <button className="c-form__button" type="button">Name</button>
    </label>
    <label className="c-form__toggle" for="checkbox1" data-title="Name"></label>
  </div>
</div>

</div>
<div className="joinUs-inputs">   
<input className="c-checkbox" type="checkbox" id="checkbox2" />
<div className="c-formContainer">
  <div className="c-form">
    <input className="c-form__input" placeholder="Email" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />

    <label className="c-form__buttonLabel" for="checkbox2">
      <button className="c-form__button" type="button">Email</button>
    </label>
    <label className="c-form__toggle" for="checkbox2" data-title="Email"></label>
  </div>
</div>
</div>
</form>



                <button className="join" type="submit">
                        Join us
                    </button>

            </div>
        </Grid>

      
            </Grid>
  </>
  )
}