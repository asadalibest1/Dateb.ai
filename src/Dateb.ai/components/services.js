import React from 'react'
import Grid from '@material-ui/core/Grid'
import "./css/services.css";

export default function Services() {
    return (
        <div className="services-main-div" id="scroll-services">
        <Grid container>
        <h1 className="contentMainHeading services-head">Our Services</h1>
                <Grid className="serviceGrid" item xs={12} sm={4}
                    data-aos="fade-up"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background1">
                            <div>

                            <h1>Static<br />Website Design</h1>
                            </div>

                        </div>
                        <div className="info">
                        <p>
                        Dateb is providing Static Website Service
                        with a very low prize. We can help you to                         
                        create an online presence with your Products.
                         Contact us for getting your web developed. 
                        </p>
                        </div>

                    </div>
                </Grid>

                <Grid className="serviceGrid" item xs={12} sm={4}
                    data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background2">
                                <div>

                                <h1>Fully Responsive WebSite </h1>
                                </div>
                        </div>
                        <div className="info">
                        <p>
                            Hire us for your Website Development
                            project. We Develop from E-commerce to
                            Professional website with neat work and great Design & let your
                            services across the 
                            Globe in many different sectors.
                        </p>
                        </div>
                    </div>
                </Grid>

                <Grid className="serviceGrid" item xs={12} sm={4}
                    data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background3">
                            <div>

                            <h1>Customize Website, JavaScript, React</h1>
                            </div>
                        </div>
                        <div className="info">
                        <p> 
                            If you already have a Website 
                            but Perhaps you want some additional features, 
                            Dateb is providing Design Customization Service  
                            Contact us so we can Customize your Website <span>as you like.</span>
                        </p>
                        </div>
                    </div>
                </Grid>
        </Grid>
        <Grid container>
                <Grid className="serviceGrid" item xs={12} sm={4}
                data-aos="fade-up"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background4">
                            <div>
                                <h1>Business Solutions</h1>
                            </div>
                        </div>
                        <div className="info">
                            <div>
                            We ensure our customers 100%
                            satisfactory results,  that strengthens
                            their Business through our affordable
                            and unique solution-packages
                            </div> 
                        </div>
                        </div>
                </Grid>

                <Grid className="serviceGrid" item xs={12} sm={4}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background5">
                        <div>
                            <h1>Data Science</h1>
                        </div>

                        </div>
                        <div className="info">
                            <div>Data Mining, Web Scraping, Risk
                            Management, Fraud Detection,
                            Forecast, and other complete
                            Business solutions</div>
                        </div>
                        </div>
                </Grid>

                <Grid className="serviceGrid" item xs={12} sm={4}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="400"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                >
                    <div className="service">
                        <div className="background background6">
                        <div>
                            <h1>Computer Vision</h1>
                        </div>
                        </div>
                        <div className="info"></div>
                    </div>
                </Grid>
      </Grid>
    </div>
    )
}
