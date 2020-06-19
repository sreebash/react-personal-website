import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer/Footer";
import OurCourses from "../components/OurCourses/OurCourses";

class Services extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
                    <TopNavigation title="Service"/>
                    <TopBanner pagetitle="Services"/>
                    <OurCourses/>
                    <Footer/>
                    
            
            </Fragment>
        );
    }
}

export default Services;