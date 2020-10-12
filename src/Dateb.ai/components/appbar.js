import React from 'react';
import './css/appbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {isMobile} from 'react-device-detect';
import MobileMenu from './mobileMenu'
import DatebAnime from './datebAnime';
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    display: "none",
  },  
}));

export default function ButtonAppBar() {
  const [titleColor, changeTitleColor] = React.useState('white')
  const [titleFont, changeTitleFont] = React.useState('')
  const [menuBarNum, changeMenuBarNum] = React.useState('')
  const classes = useStyles();
 
 
  React.useEffect(() => {

    window.onscroll = () => {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          document.getElementsByClassName('appbar')[0].style.backgroundColor ="white";
          // document.getElementsByClassName('title')[0].style.color = "rgba(0, 0, 0, 0.8)";
            changeTitleColor("#000000");
          document.getElementsByClassName('menu')[0].style.color = "black";
              if (isMobile){
    
                changeTitleFont("7vw")
                changeTitleColor("#000000");
                    // document.getElementsByClassName('title')[0].style.fontSize = "5vw";
                    // document.getElementsByClassName('title')[0].style.color = "rgba(0, 0, 0, 0.8)";
                document.getElementById('menuButton').style.color= "rgba(0, 0, 0, 0.8)";
      
              }
                          
                    else
                          // document.getElementsByClassName('title')[0].style.fontSize = "2.6vw";
                          changeTitleFont("2.6vw")                
              }
        else{
          document.getElementsByClassName('appbar')[0].style.backgroundColor ="transparent";
          // document.getElementsByClassName('title')[0].style.color = "white";
              changeTitleColor('white');
          document.getElementsByClassName('menu')[0].style.color = "white";
            if (isMobile){
                    changeTitleFont("9vw")
                // document.getElementsByClassName('title')[0].style.fontSize = "6vw";
                document.getElementById('menuButton').style.color= "white";  

                  }
                  
                  else
                    changeTitleFont("3.7vw")
                    // document.getElementsByClassName('title')[0].style.fontSize = "3.7vw";  
                  // document.getElementById('menuButton').style.color= "black";  
                }
    
                if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
                  document.querySelector('.contact-icons-inner-div').style.marginLeft = "0px";
                }else{
                    document.querySelector('.contact-icons-inner-div').style.marginLeft = "1500px";
        
            }
              }               

  }, []);

  const MouseOver=(num)=>{
    
    document.getElementById(`headerHover${num}`).style.width="57px";
    document.getElementById(`headerHover${num}`).style.border="1.5px solid white";
  }
  const MouseOut=(num)=>{
    // alert(num);
    document.getElementById(`headerHover${num}`).style.width="0px";
    document.getElementById(`headerHover${num}`).style.border="0px solid white";
  }

  return (
    <div>
      <AppBar position="fixed"  style={{ backgroundColor: "transparent" }} className="appbar">
        <Toolbar className="Toolbar">
          <table>
          <tbody>
            <tr>
                    <td className="td1">
                      <div id="menuButton" className={classes.menuButton}>
                        <MobileMenu />
                      </div>  
                </td>
                    <td className="td2">
                      <div className="title" id="title2">
                        <DatebAnime  titleColor={titleColor} titleFont={titleFont}/>
                      </div>
                    </td>
          
          <td className="td3">
              <div className="menu">
              <ul className="appbar-menu">
              <Link to="scroll-services" smooth={true} duration={500}>
                        {/* <Button color="inherit">Services</Button> */}
                                    <li onMouseOver={()=>{MouseOver("1")}} onMouseOut={()=>{MouseOut("1")}}>Services</li>
                                    <br /><li className="headerHover" id="headerHover1"></li>
              </Link>            
              <Link to="scroll-portfolio" smooth={true} duration={500}>
                                    <li onMouseOver={()=>{MouseOver("2")}} onMouseOut={()=>{MouseOut("2")}}>Portfolio</li>
                                    <br /><li className="headerHover" id="headerHover2"></li>
              </Link>            
              <Link to="scroll-Contact" smooth={true} duration={500}>
                                      <li onMouseOver={()=>{MouseOver("3")}} onMouseOut={()=>{MouseOut("3")}}>Contact</li>
                                      <br /><li className="headerHover" id="headerHover3"></li>
              </Link>            
              </ul>      </div>
            </td>
          </tr>
          </tbody>
          </table>
        </Toolbar>
      </AppBar>
    </div>
  );
}
