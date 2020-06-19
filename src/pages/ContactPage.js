import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
        
                <TopNavigation title="Contact"/>
                <TopBanner pagetitle="Contact Me"/>
                <ContactSection/>
                <Footer/>
    
            </Fragment>
        );
    }
}

export default ContactPage;