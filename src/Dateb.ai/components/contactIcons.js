import React from 'react'
import './css/contactIcons.css'
import $ from 'jquery'

import FacebookIcon from '@material-ui/icons/Facebook'
import PersonIcon from '@material-ui/icons/Person';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

export default function ContactIcons() {
    React.useEffect(()=>{

        // window.onscroll = () => {
        //     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        //             //   document.querySelector(".contact-icons-inner-div").style.display="none";
        //             alert('done');
        //             console.log('done');
        //       }
        //   }        

        $(function(){
            var flag=0;
            
            $('.share').on('click',function(){
             if(flag === 0)
              {
                $(this).siblings('.one').animate({
                top:'180px',
                left:'90%',
              },200);
              
               $(this).siblings('.two').delay(200).animate({
                top:'250px',
                left:'81%'
              },200);
              
               $(this).siblings('.three').delay(300).animate({
                top:'380px',
                left:'88%'
              },200);
                        
              $('.one i,.two i, .three i').delay(500).fadeIn(200);  
                flag = 1;
              }
              
              
            else{
              $('.one, .two, .three').animate({
                  top:'300px',
                  left:'96.5%',
            
              },200);
                
            $('.one i,.two i, .three i').delay(500).fadeOut(200);
                flag = 0;
              }
            });
          });
    }, [])
    return (
        <div className="contact-icons-div">
        <div className="contact-icons-inner-div">
            
        <div className="share">
            {/* <i className="fa fa-plus"></i> */}
            <PersonIcon className="contact-icons"/>
            </div>
            <div className="one">
            <FacebookIcon className="contact-icons" id="contactIcons"/>
            </div>
            <div className="two">
            <TwitterIcon className="contact-icons" id="contactIcons"/>
            </div>
            <div className="three">
            <MailIcon className="contact-icons" id="contactIcons"/>
            </div>
        </div>
        </div>
    )
}
