import React from 'react'
import Grid from '@material-ui/core/Grid'
import "./css/services.css";

export default function Services() {
    return (
        <div className="services-main-div">
        <Grid container>
        <h1 className="services-head">Services</h1>
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
                        <div className="info"></div>

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
                        <div className="info"></div>
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
                        <div className="info"></div>
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
                            <p>We ensure our customers 100%</p>
                            <p>satisfactory results,  that strengthens</p>
                            <p>their business through our affordable</p>
                            <p>and unique solution-packages</p> 
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
                            <p>Data Mining, Web Scraping, Risk</p>
                            <p>Management, Fraud Detection,</p>
                            <p>Forecast, and other complete</p>
                            <p>business solutions</p>
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
