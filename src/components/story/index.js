import React from 'react'
import strory1 from '../../images/story/1.jpg'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date</h2>
                                        <span className="date">May 13, 2022</span>
                                        <p>Within several days of spending time together, both Rachel and Shawn knew they had found their match. They were enjoying getting to know one another. Shawn was anxiously awaiting the night, as he planned on asking Rachel to be his girlfriend, knowing what he hoped that would entail for the rest of his life.</p>
                                        <p>Del Frisco’s became a special place for Rachel and Shawn to cherish forever. Shawn asked Rachel to be his girlfriend and the adventure of the rest of their life began.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Vacation</h2>
                                        <span className="date">July 1, 2022</span>
                                        <p>The days turned into weeks which turned into months. Rachel and Shawn were excited to introduce each other to their friends and families. Their first vacation together was to meet Rachel’s family in Chicago followed shortly by visiting Shawn's family in New Jersey.</p>
                                        <p>Rachel showed Shawn all around the city, took him to a Cubs game (Go Cubs!), and showed him around Loyola, with the hopes of one day returning there to marry him.</p>
                                        <p>Shawn showed Rachel his favorite places in New Jersey and his mom toured them both around The Big Apple!</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Day Trip</h2>
                                        <span className="date">May 7, 2023</span>
                                        <p>The months were starting to approach the year mark. Rachel and Shawn developed an interest in exploring different small mountain towns around Colorado. They celebrated a year of knowing each other by going to the George Town Loop, where they went on a train ride, mined for Gold and explored a cave.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Engagement</h2>
                                        <span className="date">May 14, 2023</span>
                                        <p>Rachel and Shawn developed a love for hiking and being outdoors, since moving to Colorado. Throughout the year, a weekly routine was developed around going hiking. They found peace and solitude together while hiking, enjoying nature, and exploring new areas.</p>
                                        <p>On the morning that Shawn proposed, he jumped out of bed, and was eager to start the day. He took Rachel on a beautiful hike with the hopes that she would return home being his fiancé.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;