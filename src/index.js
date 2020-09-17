import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './Dateb.ai/App';

// import App from './prac/textChangeAnimation/index'
// import App from './prac/autoImageTextSlider/index'
// import App from './prac/componenetTrans.js';
// import App from './prac/awesomeSlider.js';
// import App from './prac/react-anime.js';
// import App from './prac/New folder/textSlider';
// import App from './prac/RecurringTextAnimation';
// import App from './prac/react-animated-slider/index';



ReactDOM.render(
  <App />
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
