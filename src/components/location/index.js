import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'

import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'When & Where'}/>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Rehearsal Dinner</h3>
                                <span>Friday, September 20, 6:00 PM</span>
                                <span>60 E Grand Ave, Chicago, IL 60611</span>
                                <p>Joe’s Seafood, Prime Steak & Stone Crab is a dining destination for USDA Prime steaks, quality seafood and world-famous Florida Stone Crab claws. The restaurant offers a wide variety of seafood dishes including seasonal specialties like Sockeye Salmon, Bone-in Halibut, and Nantucket Cape Scallops.</p>
                                <p><a href="https://rb.gy/sfpp0" target="_blank" rel="noopener noreferrer">See Location</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ceromony-content ceromony-content2">
                            <h3>Wedding Ceremony</h3>
                            <span>Saturday, September 21, 1:00 PM</span>
                            <span>6453 N Kenmore Ave, Chicago, IL 60660</span>
                            <p>Madonna della Strada is a chapel on the campus of Loyola University Chicago in the neighborhood of Rogers Park, Chicago: it is named after a painting of the Virgin Mary, known as Madonna Della Strada, enshrined at the Church of the Gesù in Rome, the mother church of the Society of Jesus.</p>
                            <p><a href="https://shorturl.at/cgqtF" target="_blank" rel="noopener noreferrer">See Location</a></p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                            <img src={strory2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Wedding Reception</h3>
                                <span>Saturday, September 21, 5:00 PM</span>
                                <span>108 E Superior St, Chicago, IL 60611</span>
                                <p>The Peninsula Chicago is the five-star hotel renowned for the warmth of its hospitality. The hotel has become an integral part of Chicago life and is considered the top choice for everything from accommodation to celebrations and corporate events. The Peninsula Chicago has proudly received a Forbes Travel Guide Five-Star rating each year since its opening. In 2023, The Peninsula Chicago was named the 'Best City Hotel in the Continental U.S' in Travel + Leisure's Worlds' Best Awards, and '#2 Hotel in the World' in LA LISTE's Top 1,000 World's Best Hotels.</p>
                                <p><a href="https://rb.gy/6nw6m" target="_blank" rel="noopener noreferrer">See Location</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Location;