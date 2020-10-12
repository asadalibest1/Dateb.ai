import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "../Dateb.ai/components/css/porfolioSlide/webProjects.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleGrow() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="webProjects">
    <div className={classes.root}>
     
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />

      <div className={classes.container}>
    <Grow in={checked}>

    <img src= {require("../Dateb.ai/components/sidesPages/porfolioSlide/porfolioGallery/web/covide19.jpg")} />
          
    </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          
          <img src= {require("../Dateb.ai/components/sidesPages/porfolioSlide/porfolioGallery/web/expense.jpg")} />
      

    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          
          <img src= {require("../Dateb.ai/components/sidesPages/porfolioSlide/porfolioGallery/web/shoe-store.jpg")} />


    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          
          <img src= {require("../Dateb.ai/components/sidesPages/porfolioSlide/porfolioGallery/web/webflex.jpg")} />


    </Grow>
      </div>
    </div>
    </div>
  );
}
