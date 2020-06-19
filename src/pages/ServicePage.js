import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";
import OurCourses from "../components/OurCourses/OurCourses";
import Services from "../components/Services/Services";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
        
                <TopNavigation title="Service"/>
                <TopBanner pagetitle="My Service"/>
                <Services/>
                <ContactSection/>
                <Footer/>
    
            </Fragment>
        );
    }
}

export default ServicePage;