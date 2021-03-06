import React from 'react'
import {isMobile} from 'react-device-detect';
import './css/datebAnime.css';

export default function DatebAnime(props) {
    React.useEffect(()=>{

    if (isMobile){
        document.getElementsByClassName("letter")[0].style.animation = "none";
        document.getElementsByClassName("ai")[0].style.animation = "none";
    
            document.getElementsByClassName("main")[0].style.color = props.titleColor;
            document.getElementsByClassName("main")[0].style.fontSize = props.titleFont;
                // setInterval(() => {
                document.querySelector(".ai").style.visibility = "visible";                
                // }, 6500)
        
    }
    else{

        if(props.titleColor !== "#000000"){

            document.getElementsByClassName("main")[0].style.color = props.titleColor;
            document.getElementsByClassName("main")[0].style.fontSize = props.titleFont;
                setInterval(() => {
                document.querySelector(".ai").style.visibility = "visible";                
                }, 6900)
        
    }else{        
        
                document.getElementsByClassName("letter")[0].style.animation = "none";
                document.getElementsByClassName("ai")[0].style.animation = "none";
            
                // setInterval(() => {
                    document.querySelector(".ai").style.visibility = "visible";                
                    // }, 6900)
                    document.getElementsByClassName("main")[0].style.color = props.titleColor;
                    document.getElementsByClassName("main")[0].style.fontSize = props.titleFont;
    }
}

    },[props])
    return (
   <>
   <div className="anime-main-div">
            <div className="main">
                Dat
                <span className="letter">
                <p>
                    <label className="left">a</label>
                    <label className="and">&</label>
                    <label className="right">w</label>
    
                </p>
                </span>
                eb
                
            <p className="ai"
                            //  data-aos="fade-right"
                            //  data-aos-offset="200"
                            //  data-aos-delay="4000"
                            //  data-aos-duration="2000"
                            //  data-aos-easing="ease-in-out"
                            //  data-aos-mirror="true"
                            //  data-aos-once="false"
             >
                    <b>.</b>
                    ai
                </p>
            </div>
        </div>
</>
)
}
