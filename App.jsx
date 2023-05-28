import {Route, useLocation, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Project} from "/src/pages/MainMenu/Project.jsx";
import MainMenu from "/src/pages/MainMenu/MainMenu.jsx";
import React from "react";

const App = () => {
    const location = useLocation();

    document.title = "Baptiste Bareille - Web Developer"

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="/projects" element={<Project/>}/>
            </Routes>

        </AnimatePresence>
    )
}

export { App }