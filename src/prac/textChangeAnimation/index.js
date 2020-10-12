import React from 'react'
import './index.scss'
export default function Index() {
    return (
        <div className="header-anime-main-div">
            <h4 class="wordCarousel">    
                <span>Word swipe animation: </span>  
                <div> 
                        {/* Use classes 2,3, or 4 to match the number of words */}
                    <ul class="flip4"> 
                        <li>Oh My!</li>
                        <li>Swoosh</li>
                        <li>Cool</li> 
                        <li>Awesome</li>  
                    </ul>
                </div>  
            </h4>        
    </div>
    )
}
