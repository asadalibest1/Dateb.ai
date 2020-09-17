import React from 'react'
import Button from '@material-ui/core/Button';
import './css/header.css';
import Mousedown from './images/mousedown.gif' 
import HeaderAnimation from './headerAnimation';

export default function Header() {

React.useEffect(()=>{
    if(window.innerWidth <= 763) 
        document.getElementsByClassName('header-div')[0].style.height= window.innerHeight+"px";    
},[])

    return (
        <div className="header-div">
            <div className="color-div">
            <div className="inner-div"
                      data-aos="fade-up"
                      data-aos-offset="200"
                      // data-aos-delay="50"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out-quart"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-bottom"
            >
            
                    <HeaderAnimation /> {/*Welcome to Dateb.ai*/}
            <p>Collections of color components for material-ui. No dependencies, small, highly<br /> customizable and theming support !</p>

            <Button variant="outlined" color="default">Get Started</Button>
            <Button variant="outlined" color="default">Contact</Button>
            </div>
            
        <div className="mousedown-div">
            <img src={Mousedown} className="mousedown" alt="Mousedown" />
        </div>
        </div>
        </div>
    )
}
