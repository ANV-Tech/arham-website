import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../css/homePage/Partner.css";

function Partners() {
  const partners = {
    items: 6,
    loop: true,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };
  return (
    <>
      <div className="partner-outer">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-item">
              <OwlCarousel {...partners}>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p1.png" alt="partners" />
                  </div>
                </div>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p2.png" alt="partners" />
                  </div>
                </div>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p3.png" alt="partners" />
                  </div>
                </div>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p4.png" alt="partners" />
                  </div>
                </div>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p5.jpg" alt="partners" />
                  </div>
                </div>
                <div className="item">
                  <div className="image-block">
                    <img src="assets/image/partners/p6.png" alt="partners" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
