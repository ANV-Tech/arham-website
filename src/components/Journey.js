import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css"; // Add this for styles
import "owl.carousel/dist/assets/owl.theme.default.css"; // Add this for styles

import '../css/homePage/Journey.css'

function Journey() {
    return (
        <>
            <section class="about-us">
                <div class="container">
                    <div class="section-title">
                        <h1>Out Journy</h1>

                        <div class="roadmap-desktop">
                            <div class="row">
                                <div class="col-sm-6 roadmap-left" >
                                    <div class="roadmap-item-wrapper">
                                        <div class="roadmap-item"
                                        >
                                            <span class="item-date">June 2013</span>
                                            <h3>COMPANY FOUNDED</h3>
                                            <p>Arham Share Pvt Ltd. was established in 2010 in Surat, Gujarat, with a vision to provide exceptional financial services to investors.</p>
                                        </div>
                                    </div>
                                    <div class="roadmap-item-wrapper"
                                    >
                                        <div class="roadmap-item">
                                            <span class="item-date"> 2012</span>
                                            <h3>SERIES A FUNDING</h3>
                                            <p>Arham Share became recognized partners with both NSE and BSE, solidifying their position as a trusted stock broking firm and expanding their investment offerings.</p>
                                        </div>
                                    </div>
                                    <div class="roadmap-item-wrapper roadmap-end"

                                    >
                                        <div class="roadmap-item">
                                            <span class="item-date"> 2013</span>
                                            <h3>OFFICE MOVING</h3>
                                            <p>Arham Share registered with MCX, expanding their services into the commodities market and offering clients diversified investment options.</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-sm-6 roadmap-right">
                                    <div class="roadmap-item-wrapper"

                                    >
                                        <div class="roadmap-item">
                                            <span class="item-date"> 2022</span>
                                            <h3>SEED FUNDING</h3>
                                            <p>Arham Share launched 'TradeCircle', a popular discount broking firm, providing seamless and affordable trading experiences. It quickly gained recognition as a trusted platform for investors seeking cost-effective solutions without compromising on service quality.</p>
                                        </div>
                                    </div>
                                    <div class="roadmap-item-wrapper"

                                    >
                                        <div class="roadmap-item">
                                            <span class="item-date"> 2022</span>
                                            <h3>SERIES B FUNDING</h3>
                                            <p>Arham Share achieved a remarkable milestone by surpassing 300 active partners nationwide. This expanded network strengthened their reach and enabled them to serve a larger client base, making their services accessible to investors across India.</p>
                                        </div>
                                    </div>
                                    <div class="roadmap-item-wrapper roadmap-end"

                                    >
                                        <div class="roadmap-item">
                                            <span class="item-date">2023 </span>
                                            <h3>SERIES C FUNDING</h3>
                                            <p>Arham Share has experienced exponential growth, with a dedicated team of over 250 professionals providing personalized assistance, expert advice, and exceptional customer service. Their commitment ensures clients' investment journeys are smooth and successful.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="roadmap-mobile">
                            <div class="roadmap-item-wrapper">
                                <div class="roadmap-item">
                                    <span class="item-date">June 2013</span>
                                    <h3>COMPANY FOUNDED</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper">
                                <div class="roadmap-item">
                                    <span class="item-date">Dec 2013</span>
                                    <h3>SEED FUNDING</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper">
                                <div class="roadmap-item">
                                    <span class="item-date">Feb 2014</span>
                                    <h3>SERIES A FUNDING</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper">
                                <div class="roadmap-item">
                                    <span class="item-date">Dec 2016</span>
                                    <h3>SERIES B FUNDING</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper  roadmap-end">
                                <div class="roadmap-item">
                                    <span class="item-date">Mar 2017</span>
                                    <h3>OFFICE MOVING</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper roadmap-end">
                                <div class="roadmap-item">
                                    <span class="item-date">May 2018</span>
                                    <h3>SERIES C FUNDING</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div class="roadmap-item-wrapper">
                                <div class="roadmap-item">
                                    <span class="item-date">Nov 2020</span>
                                    <h3>GO PUBLIC!</h3>
                                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    );
}

export default Journey;
