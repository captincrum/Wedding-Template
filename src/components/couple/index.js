import React from 'react'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/img-1.jpg'
import couple2 from '../../images/couple/img-2.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Couple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>RACHEL CLINE</h3>
                                            <p>Hi, I am Rachel. I am a therapist working toward my LCSW. I love working with kids and their families. I enjoy hiking, reading, watching TV, and snuggling with Zelda.. P.S. I made the website content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>SHAWN MCCRUM</h3>
                                            <p>Hi I am Shawn. I am a System Specialist for DVS. I enjoy working with technology in all capacities (in fact I made this website). I enjoy learning new things, puzzles, traveling, and being with family.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;