import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import OurCourses from "../components/OurCourses/OurCourses";
import Video from "../components/Video/Video";
import ClientSays from "../components/ClientSays/ClientSays";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
                
                <TopNavigation title="Home"/>
                <TopBanner pagetitle="Web & Mobile Application"/>
    
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <OurCourses/>
                <Video/>
                <ClientSays/>
                <Footer/>
            
            </Fragment>
        );
    }
}

export default HomePage;