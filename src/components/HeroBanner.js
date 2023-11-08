import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Add this for styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Add this for styles

import '../css/homePage/HeroBanner.css'
import img from '../images/l3.jpg'

function HeroBanner() {
    const sliderOptions = {
        items: 1,
        loop: true,

        autoplay: true

    }
    return (
        <>

            <OwlCarousel
                className="owl-theme "


                {...sliderOptions}
            >
                <div className='slider-block'>
                    <img className="Img" src={img} />
                    <div className="text-overlay " data-aos="zoom-in" data-aos-duration="3000">
                        <h1>Unlock Your <br />Welth
                            Potencial!</h1>
                        <p></p>
                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='slider-block'>
                    <img className="Img" src={img} />
                    <div className="text-overlay " data-aos="zoom-in" data-aos-duration="3000">
                        <h1>Achive Financial
                            <br /> Freedom
                            With Us.</h1>
                        <p></p>
                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='slider-block'>
                    <img className="Img" src={img} />
                    <div className="text-overlay " data-aos="zoom-in" data-aos-duration="3000">
                        <h1>Achive Your Goals With Us.</h1>

                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Learn More</button>
                        </div>
                    </div>
                </div>



            </OwlCarousel>
        </>
    )
}

export default HeroBanner