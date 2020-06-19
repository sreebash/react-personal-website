import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import Analysis from "../components/Analysis/Analysis";
import ClientSays from "../components/ClientSays/ClientSays";
import Summary from "../components/Summary/Summary";
import OurCourses from "../components/OurCourses/OurCourses";
import RecentProjects from "../components/RecentProjects/RecentProjects";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
    
                <TopNavigation title="Portfolio"/>
                <TopBanner pagetitle="PortfolioPage"/>
                <RecentProjects/>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default PortfolioPage;