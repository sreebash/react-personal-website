import React, {Fragment} from 'react';
import HomePage from "./pages/HomePage";
import AboutDescription from "./components/AboutDescription/AboutDescription";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import Services from "./pages/Services";
import PortfolioPage from "./pages/PortfolioPage";
import ContactSection from "./components/ContactSection/ContactSection";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import TopBanner from "./components/TopBanner";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
    return (
        <BrowserRouter>
            
            <AppRoute/>
        
        </BrowserRouter>
    );
}

export default App;
