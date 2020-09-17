import React from 'react'
import IconButton from '@material-ui/core/IconButton'

// import BorderColorIcon from '@material-ui/icons/BorderColor';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import PaletteIcon from '@material-ui/icons/Palette';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import "../css/whyChooseUs.css"

export default function WhyChooseUs() {
    return (
        <div className="whyChooseUs">
            <h1 className="head"
                data-aos="fade-down"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
            >
            Why Choose Dateb?</h1>
            
            {/* <h2>We Provide</h2> */}
        <div className="center-div">
            
            <div
             data-aos="flip-right"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
            >
            <IconButton  className="iconButton" color="inherit" aria-label="menu">
                <FormatColorTextIcon className="icons"/>
             </IconButton>
            <h2> Using Best Fonts</h2>
                {/* /Best Font Writing */}
            </div>
            
            <div
             data-aos="flip-down"
                data-aos-offset="200"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
            >
            <IconButton  className="iconButton" color="inherit" aria-label="menu">
                <PaletteIcon className="icons" style={{ marginTop: "20px"}}/>
             </IconButton>
                    <h2>Clean Modern</h2>
                    <h2>and Unique Design</h2>
            </div>
        
            <div
             data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
            >
            <IconButton  className="iconButton" color="inherit" aria-label="menu">
                <SettingsIcon className="icons"/>
             </IconButton>
            <h2 className="h2">Easy customizable
                {/* customization */}
                </h2>
            </div>
        
            <div
             data-aos="flip-up"
                data-aos-offset="200"
                data-aos-delay="900"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
            >
            <IconButton  className="iconButton" color="inherit" aria-label="menu">
                <HelpIcon className="icons"/>
             </IconButton>
                <h2 className="h2">Great support!</h2>
            </div>
        </div>
    </div>
    )
}
