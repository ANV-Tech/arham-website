import React from "react";
import "../css/homePage/Testimonials.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonials() {
  const testimonial = {
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 2,
      },
    },
  };
  return (
    <>
      <div className="testimonial-outer">
        <div className="testimonial-bg">
          <img src="assets/image/testimonial/test-1.png" alt="testimonial-bg" />
        </div>
        <div className="container">
          <div class="section-title">
            <h1>Client Testimonial</h1>
          </div>
          <div className="testimonial-content">
            <OwlCarousel
              className="owl-theme"
              {...testimonial}
              loop
              margin={10}
              nav
            >
              <div className="testimonial-item">
                <div className="review d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="p">
                  Don't just take our word for it hear what our customers have
                  to say about us! we have helped thousand people Don't just
                  take our
                </div>
                <div className="name">Md yeamin khan</div>
                <div className="des">Customer</div>
              </div>
              <div className="testimonial-item">
                <div className="review d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div className="p">
                  Don't just take our word for it hear what our customers have
                  to say about us! we have helped thousand people Don't just
                  take our
                </div>
                <div className="name">Md yeamin khan</div>
                <div className="des">Customer</div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
