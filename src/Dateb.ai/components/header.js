import React from 'react'
import Button from '@material-ui/core/Button';
import './css/header.css';
import Mousedown from './images/mousedown.gif' 
import HeaderAnimation from './headerAnimation';
import { Link } from 'react-scroll'

export default function Header() {

React.useEffect(()=>{
    if(window.innerWidth <= 763) 
        document.getElementsByClassName('header-div')[0].style.height= window.innerHeight+"px";
        
        

    // window.onscroll = () => {
    //   if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    //       document.querySelector('.contact-icons-inner-div').style.marginLeft = "0px";
    //     }else{
    //         document.querySelector('.contact-icons-inner-div').style.marginLeft = "1500px";

    // }

// }
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
            
            <Link to="scroll-legends" smooth={true} duration={1000} offset={-180}>
            <Button variant="outlined" color="default">Contact</Button>
            </Link>
            </div>
            
        <div className="mousedown-div">
            <img src={Mousedown} className="mousedown" alt="Mousedown" />
        </div>
        </div>
        </div>
    )
}
