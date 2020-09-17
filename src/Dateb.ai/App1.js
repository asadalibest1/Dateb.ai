import React from 'react'
import Appbar from './components/appbar'
import Header from './components/header'
import Side1 from './components/sidesPages/side1'
import Services from './components/services'
import WhyChooseUs from './components/sidesPages/whyChooseUs'
import Side2 from './components/sidesPages/side2'
import Projects from './components/sidesPages/porfolioSlide/projects'
import ThreeFeath from './components/threeFeath'
import Side3 from './components/sidesPages/side3'
import HaveProject from './components/haveProject'
import JoinUS from './components/sidesPages/joinUS'
import Footer from './components/footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App1() {
    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Appbar />
            <Header />
            <Side1 />
            <Services />
            <WhyChooseUs />
            <Side2 />
            <Projects />
            <ThreeFeath />
            <Side3 />
            <HaveProject />
            <JoinUS />
            <Footer />
        </div>
    )
}


// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
//   });