import React, {useState,useEffect} from 'react';
import App1 from './App1';
import './App.css'

export default function App() {
    
  const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
      return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }
  
    useEffect(() => {
      fakeRequest().then(() => {
        const el = document.querySelector(".loader-container");
        if (el) {
          el.remove();
          setLoading(!isLoading);
        }
      });
    }, []);
  
    if (isLoading) {
      return null;
    }
  

    return (
        <div>
            <App1 />
        </div>
    )
}
