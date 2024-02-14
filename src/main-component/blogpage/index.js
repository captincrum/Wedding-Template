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
                                        <p><b>Location: 201 E Randolph St, Chicago, IL 60602</b></p>
                                        <p>Cloud Gate (nicknamed The Bean) is a public sculpture created by Indian-born British artist Anish Kapoor. The Bean has become the centerpiece of AT&T Plaza at Millennium Park since its construction in 2004.</p>
                                        <p>After opening to the public in 2006 The Bean quickly gained a reputation for being one of the most photogenic locations in Chicago. To this day, The Bean is a hallmark of the Chicago area and has attracted visitors from around the world.</p>
                                        <p>The underside of the sculpture is called the omphalos. The omphalos consists of an indentation whose mirrored surface provides multiple reflections of any subject situated beneath it. The apex of the omphalos is 27 feet above the ground. The concave underside allows visitors to walk underneath to see the omphalos, and through its arch to the other side so that they view the entire structure.</p>
                                        <p>Inspired by liquid mercury, the surface of The Bean distorts and reflects the beautiful Chicago Skyline as well as the hustle and bustle of the city. The artist intended for The Bean to be interactive and encourages the viewer to look at the sculpture from all angles. To maintain its sheen The Bean gets wiped down and power washed daily, and twice a year it gets a thorough cleaning with 40 gallons of liquid detergent.</p>
                                        <p>Consisting of 168 stainless steel plates, weighing in at an astonishing 110 tons, and measuring 33ft x 42ft x 66ft this bean is really something to be seen! </p>
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
                                    <p>Location: 1060 W Addison St, Chicago, IL 60613</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
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
                                    <h3>Shop on Michigan Avenue and Oak Street</h3>
                                    <p>Location: 55 E Grand Ave, Chicago, IL 60611</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
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
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3>Chicago Architecture Tour</h3>
                                    <p>Location: 465 N McClurg Ct, Chicago, IL 60611</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
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