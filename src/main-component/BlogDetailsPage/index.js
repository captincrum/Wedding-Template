import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs'
import Navbar2 from '../../components/Navbar2'
import mediaimg1 from '../../images/blog/img-1.jpg'
import mediaimg2 from '../../images/blog/img-2.jpg'
import './style.css'

const BlogPage = () => {

    return (
        <div id="home" className="BlogPage-br">
            <Navbar2 />
            <Breadcrumbs Blog={'Where to Stay'}/>
            <div className="container">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>The Peninsula Chicago</h3>
                                <span>Address: 108 E. Superior Street, Chicago, Il 60611</span>
                                <span>Phone: 312-337-2888</span>
                                <p>Enjoy the finest hospitality at the world renown hotel; The Peninsula. Relax at the Peninsula Spa. Experience an afternoon at the European café and wine bar (Pierrot Gourmet). Explore the city by learning more about its history on a private boat tour. Most importantly, have fun!</p>
                                <p>Guests may <b>call the hotel</b> directly and ask for <b>Room Reservations</b>. The block is held under the name <b>Cline-McCrum</b></p>
                                <p>Guests may use the link below to reserve a room. The room will automatically be added to the <b>Cline-McCrum</b> block of rooms.</p>
                                <p><b>Transportation will be available from hotel to the church and back to the hotel following the service.</b></p>
                                <h5><a href="https://secure.peninsula.com/?adult=2&arrive=2024-09-20&chain=5440&child=0&currency=USD&depart=2024-09-22&group=CLIN092024&hotel=12602&level=hotel&locale=en-GB&rooms=1" target="_blank" rel="noopener noreferrer"><b><u>Reserve a room online by clicking here!</u></b></a></h5>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={mediaimg1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={mediaimg2} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Chicago Marriott Downtown Magnificent Mile</h3>
                                    <span>Address: 540 Michigan Avenue Chicago, IL 60611</span>
                                    <span>Phone: 1 312-836-0100</span>
                                    <p>Guests may call the hotel directly and ask for the <b>Cline McCrum Wedding Room Block</b></p>
                                    <p>Guests may use the link below to reserve a room. The room will automatically be added to the <b>Cline McCrum Wedding Room Block.</b></p>
                                    <p><b>Transportation will be available from hotel to the church and back to the hotel following the service.</b></p>
                                    <h5><a href="" target="_blank" rel="noopener noreferrer"><b><u>Reserve a room online by clicking here!</u></b></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;