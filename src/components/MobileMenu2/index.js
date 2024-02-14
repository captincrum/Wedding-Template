import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";


export default class MobileMenu2 extends Component {

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

        const { isMenuShow, isOpen } = this.state;

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
                        <li><Link to='/blog'>Things to Do</Link></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}
