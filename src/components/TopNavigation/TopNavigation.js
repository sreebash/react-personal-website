import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/images/whiteLogo.svg';
import blueLogo from '../../asset/images/blueLogo.svg';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navBarBackground: "navBackground",
            navBarItem: "navItem",
            navVariant: "dark",
            pageTitle: props.title
    
    
        }
    }
    
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                navBarBackground: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: 'light',
            })
        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                navBarBackground: '.navBarBackground',
                navBarItem: 'navItem',
                navVariant: 'dark'
            })
            
        }
        
    };
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                
                <Navbar variant={this.state.navVariant} className={this.state.navBarBackground} fixed="top"
                        collapseOnSelect expand="lg">
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo} alt=""/> SREEBASH
                        KUMAR</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/">HOME</NavLink></Nav.Link>
                            
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color: '#00a8ee'}} className={this.state.navBarItem}
                                                to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
            </Fragment>
        );
    }
}

export default TopNavigation;