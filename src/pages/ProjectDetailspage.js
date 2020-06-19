import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";

class ProjectDetailspage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <TopBanner title="Project Name"/>
                <ProjectDetails/>
                <Footer/>
            
            </Fragment>
        );
    }
}

export default ProjectDetailspage;