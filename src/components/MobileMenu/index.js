import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow} = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2><Link to='/home'>Shawn & Rachel</Link></h2>
                    </div>
                    <ul className="responsivemenu">
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

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}


