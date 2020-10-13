import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll'

// import SelectOption from "./selectOption"

import "./css/mobileMenu.css";
// import "./css/scss/selectOption.scss";



export default function MobileMenu() {
  const [Dialog, changeDialog] = React.useState(false);
  const [arrowPostion, ChangeArrowPostion] = React.useState(false);
  
  const arrowClick=()=>{
    if (arrowPostion === false){
      document.querySelector(".downUpArrow").style.transform = "rotate(-180deg)"
      document.querySelector(".downUpArrow").style.top = "4";
    }else{
      document.querySelector(".downUpArrow").style.transform = "rotate(0)"
      document.querySelector(".downUpArrow").style.top = "0";
    }
    ChangeArrowPostion(!arrowPostion);
  }

  React.useEffect(()=>{

    if (Dialog === false){
      document.getElementsByClassName('dialog-main-div')[0].style.display="none";
    }else{
      document.getElementsByClassName('dialog-main-div')[0].style.display="block";
    }
  },[Dialog])  

  return (
    <div>
        <IconButton edge="start" color="inherit">
             <MenuIcon onClick={()=>{changeDialog(! Dialog)}}/>             
        </IconButton>

      <div className="dialog-main-div" onClick={()=>{changeDialog(! Dialog)}}>
    <div className="inner-div">        
      <ul onClick={()=>{changeDialog(! Dialog)}} color="white">
        
        <Link to="scroll-about" smooth={true} duration={500}><li onClick={()=>{changeDialog(! Dialog)}}>About</li></Link>
        <Link to="scroll-enquire-now" smooth={true} duration={500}><li onClick={()=>{changeDialog(! Dialog)}}>Enquire Us</li></Link>
        {/* <li>Enquire Us</li> */}
        
        <div className="portfolio-select">
                <input type="checkbox" id="button"/>

                <label className="portfolio-select-button" htmlFor="button">
                    <label className="default" htmlFor="button" onClick={arrowClick}>Portfolio<img className="downUpArrow" src={require("./images/downUpArrow.png" )} alt="downUpArrow" /></label>
                      <Link to="scroll-portfolio" smooth={true} duration={500}><label className="option" htmlFor="button" onClick={()=>{changeDialog(! Dialog)}}>Web Development</label></Link>
                      <Link to="scroll-portfolio" smooth={true} duration={500}><label className="option" htmlFor="button" onClick={()=>{changeDialog(! Dialog)}}>Data Science</label></Link>
                </label>
        </div>
        <Link to="scroll-Contact" smooth={true} duration={500}><li onClick={()=>{changeDialog(! Dialog)}}>Contact</li></Link>
        <Link to="scroll-legends" offset={-80} smooth={true} duration={500}><li onClick={()=>{changeDialog(! Dialog)}}>Developers</li></Link>
      </ul>
      </div>      
    </div>
    </div>
  )
}