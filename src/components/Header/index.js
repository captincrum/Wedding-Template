import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><Link to='/home'>Shawn<span><i className="fa fa-heart" aria-hidden="true"></i></span>Rachel</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li>
                                    <li><AnchorLink href='#gift'>Gift</AnchorLink></li>
                                    <li><Link to='/blog-details'>Where to Stay</Link></li>
                                    <li><Link to='/blog'>Things to Do</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
