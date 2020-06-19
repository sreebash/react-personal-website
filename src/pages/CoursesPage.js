import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

class CoursesPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"/>
                <TopBanner pagetitle="I provide following courses"/>
                <Services/>
                <Footer/>
            
            </Fragment>
        );
    }
}

export default CoursesPage;