
import React from 'react';
import Grow from '@material-ui/core/Grow';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import "../../css/porfolioSlide/webProjects.css";

export default function SimpleGrow(props) {

var checked = props.condition;

  return (
    <div className="webProjects">
    <div>
      <div>
    <Grow 
              in={checked}
    >

    <img src= {require("./porfolioGallery/web/covide19.jpg")} alt="covide19"/>
          
    </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/expense.jpg")} alt="expense"/>

    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 4500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/shoe-store.jpg")} alt="shoe-store"/>


    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 6500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/webflex.jpg")} alt="webflex"/>


    </Grow>
      </div>
    </div>
    </div>
  );
}
