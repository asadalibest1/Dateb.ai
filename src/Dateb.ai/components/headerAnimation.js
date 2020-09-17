import React from 'react'
import './css/scss/headerAnimation.scss'
export default function Index() {
    return (
        <div className="header-anime-main-div">
            <h4 className="wordCarousel">    
                <span>Welcome to</span>  
                <div> 
                        {/* Use classes 2,3, or 4 to match the number of words */}
                    <ul className="flip4"> 
                        <li>Data Sceince</li>
                        <li>Website Development</li>
                        <li>Business Solutions</li> 
                        <li>Computer Visions</li>  
                        <li>Dateb.ai</li>  
                    </ul>
                </div>
                {/* <p>sadgdfsfdasfdgsfds</p>   */}
            </h4>        
    </div>
    )
}