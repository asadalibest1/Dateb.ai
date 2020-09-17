import React from 'react';
import './css/appbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';
import MobileMenu from './mobileMenu'
// import anime from 'animejs/lib/anime.es.js';
import DatebAnime from './datebAnime';

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    display: "none",
  },  
}));

export default function ButtonAppBar() {
  const [titleColor, changeTitleColor] = React.useState('white')
  const [titleFont, changeTitleFont] = React.useState('')
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
               
              }

  }, []);

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
                      {/* <div className={classes.title} id="title">
                        <div className="title">Dateb.ai</div>
                      </div> */}
         </td>
          
          <td className="td3">
          <div className="menu">
          <Button color="inherit">About</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
          </div>
            </td>
          </tr>
          </tbody>
          </table>
        </Toolbar>
      </AppBar>
    </div>
  );
}
