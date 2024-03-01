import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gift1 from '../../images/gift/1.png'
import gift2 from '../../images/gift/2.png'
import gift3 from '../../images/gift/3.png'
import gift4 from '../../images/gift/4.png'
import './style.css'


class Gift extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Gift Registration</h2>
                          <p>Scroll across to see where we are registered. This is under construction and will be complete soon!.</p>
                      </div>
                  </div>
                  <div className="row gift-item">
                      <div className="col-lg-12">
                        <Slider {...settings}>
                            <div className="item">
                                <a href="https://www.potterybarn.com/registry/qsq2p79r6p/registry-list.html" target="_blank" rel="noopener noreferrer"> <img src={gift1} alt=""/></a>
                            </div>
                            <div className="item">
                                <a href="https://www.amazon.com/wedding/registry/3APW0OZV8YOBG?ref=wr_search_page_result_1" target="_blank" rel="noopener noreferrer"> <img src={gift2} alt=""/></a>
                            </div>
                            <div className="item">
                                <a href="https://www.crateandbarrel.com/gift-registry/rachel-cline-and-shawn-mccrum/r7049995" target="_blank" rel="noopener noreferrer"> <img src={gift3} alt=""/></a>
                            </div>
                            <div className="item">
                                <a href="https://www.target.com/gift-registry/gift/rachel-and-shawn-2024" target="_blank" rel="noopener noreferrer"> <img src={gift4} alt=""/></a>
                            </div>
                            </Slider>
                      </div>
                  </div>
              </div>
          </div>
      );7
    }
  }

export default Gift;