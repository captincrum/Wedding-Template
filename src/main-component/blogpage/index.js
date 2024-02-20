import React from  'react';
import {Link} from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs'
import Navbar2 from '../../components/Navbar2'
import BlogSidebar from '../../components/BlogSidebar'
import mediaimg1 from '../../images/blog/img-7.jpg'
import mediaimg2 from '../../images/blog/img-8.jpg'
import mediaimg3 from '../../images/blog/img-9.jpg'
import mediaimg4 from '../../images/blog/author.jpg'
import mediaimg5 from '../../images/blog/img-10.jpg'
import mediaimg6 from '../../images/blog/author2.jpg'

import './style.css'

const BlogPage = () => {

    return(
        <div id="home" className="BlogPage-br">
            <Navbar2/>
            <Breadcrumbs Blog={'Things to Do'}/>
            <div className="blog-pg-section">
            <div className="container">
                <div className="row">
                    <div className="col col-md-8 col-12">
                        <div className="blog-posts blog-posts-2 clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg1} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Shawn McCrum</Link>
                                        </li>
                                        <li>February 13,2024</li>
                                    </ul>
                                    <h3>Visit Cloud Gate.. (AKA: The Bean)</h3>
                                        <span>Location: 201 E Randolph St, Chicago, IL 60602</span>
                                        <p>Duration: 45 minutes</p>
                                        <p>Cloud Gate (nicknamed The Bean) is a public sculpture created by artist Anish Kapoor. The Bean has become the centerpiece of AT&T Plaza at Millennium Park since its construction in 2004.</p>
                                        <p>After opening to the public in 2006 The Bean quickly gained a reputation for being one of the most photogenic locations in Chicago. To this day, The Bean is a hallmark of the Chicago area and attracts visitors from around the world.</p>
                                        <p>The underside of the sculpture is called the omphalos. The omphalos consists of an indentation whose mirrored surface provides multiple reflections of any subject situated beneath it. The apex of the omphalos is 27 feet above the ground. The concave underside allows visitors to walk underneath to see the omphalos, and through its arch to the other side so that they view the entire structure.</p>
                                        <p>Inspired by liquid mercury, the surface of The Bean distorts and reflects the beautiful Chicago Skyline as well as the hustle and bustle of the city. The artist intended for The Bean to be interactive and encourages the viewer to look at the sculpture from all angles. To maintain its sheen The Bean gets wiped down and power washed daily, and twice a year it gets a thorough cleaning with 40 gallons of liquid detergent.</p>
                                        <p>Weighing in at an astonishing 110 tons, measuring 33ft x 42ft x 66ft, and consisting of 168 stainless steel plates this bean is really something to be seen! </p>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg2} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg6} alt=""/>
                                            &nbsp; By <Link to="/blog">Rachel Cline</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3>Stroll Through Wrigleyville</h3>
                                    <span>Location: 1060 W Addison St, Chicago, IL 60613</span>
                                    <p>Duration: 3 hours</p>
                                    <p>Join the other 41,648 people for an exciting ball game. Watch our beloved Chicago Cubs play a game of baseball against the Nationals while embracing the magnificence that is Wrigley Field. Explore the neighborhood of Wrigleyville and see all that it has to offer. Surrounding Wrigley Field is a wealth of sports bars and eateries, perfect for game day or a casual day out.</p>
                                    <p>Take a stroll through the very streets that the 2016 World Series Champions walked through after a nail-biting win against the Indians. Check out The Cubby Bear which was founded in 1953. This is one of the neighborhood’s premier spots for pre gaming and enjoying live music. Imagine what the scene was like at the Cubby Bear on that November night in 2016. </p>
                                    <p>Though this northside community is named after it’s baseball field, Wrigleyville is packed with venues, nightlife, and outdoor spaces, making it a beautiful place for all people. Wrigleyville is just a short walk to the lake where you can enjoy some relaxation after cheering on the Cubbies! </p>
                                    <p></p>
                                </div>
                            </div>
                                <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg3} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg6} alt=""/>
                                            &nbsp; By <Link to="/blog">Rachel Cline</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3>Shedd Aquarium</h3>
                                    <span>Location: 1200 S DuSable Lk Shr Dr, Chicago, IL 60605</span>
                                    <p>Duration: 3-4 hours</p>
                                    <p>Look nature in the eye! Explore one of the oldest aquariums in the U.S., opened in 1930. Emerge from the ocean into the extensive, all-new Caribbean reef habitat of the future with a walk-through tunnel. Become fully immersed in the beauty of a rich coral reef and a bustling underwater community. </p>
                                    <p>Meet a penguin! During this 45-minute experience, you will go behind the scenes and see penguins explore, preen, play with toys, perch and gulp fish. *Not included in regular admission price.*</p>
                                    <p>Don't forget to check out the dolphins while you are here; the Shedd is one of only three U.S. aquariums that house dolphins. After you check out the dolphins, head to the lower level, Wild Reef, to experience a 400,000-gallon habitat that's home to blacktip reef sharks, sandbars, spotted wobbogongs and zebra sharks! </p>
                                    <p>Learn about Nickel, the Shedd's rescued green sea turtle, who has been the star of the Caribbean Reef habitat since 2003. She came to Shedd after surviving a boat collision that left a deep gash in her shell and affected her buoyancy-but not her ability to navigate her habitat with ease and learn behaviors that help the team care for her.</p>
                                    <p>The Shedd is a fun and exciting place for all ages. I enjoyed my Senior Prom at the Shedd and hope that you too can enjoy some time at the Shedd and experience the great beauty that it offers while you are in Chicago this weekend.</p>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg5} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Shawn McCrum</Link>
                                        </li>
                                        <li>February 19,2024</li>
                                    </ul>
                                    <h3>Chicago Architectural Boat Tour</h3>
                                    <span>Location: 465 N McClurg Ct, Chicago, IL 60611</span>
                                    <p>Duration: 90 minutes</p>
                                    <p>Do you enjoy history? Do you marvel at architecture? Is exploring the city on your agenda? If you answered, "yes" to any of these questions, consider booking a ticket for the Chicago Architectural Boat Tour.</p>
                                    <p>Remove yourself from the busy city streets and take a step back to view the city of Chicago from a unique angle—the river. Sit back as experienced guides tell you about the 130 year history of Chicago's skyline and point out over 50 of the most significant buildings.</p>
                                    <p>On this tour, you will view the iconic Willis Tower, learn about the significance of Tribune Tower, and hear about the future development of "The 78". This boat tour is a perfect low-energy activity, fun for all ages, and the most recommended thing to do for visitors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 col-12">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogPage;