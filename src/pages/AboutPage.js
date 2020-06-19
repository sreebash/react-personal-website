import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer/Footer";
import AboutDescription from "../components/AboutDescription/AboutDescription";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
            
                <TopNavigation title="About"/>
                <TopBanner pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            
            </Fragment>
        );
    }
}

export default AboutPage;