import React, {useState,useEffect} from 'react';
import "./css/pageLoader.css";

export default function PageLoader() {
 
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
        <div className="loader-container">
            <h1>Loading Loading</h1>
        </div>
    )
}
