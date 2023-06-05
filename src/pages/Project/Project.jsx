import React, {useState} from "react";
import {motion} from "framer-motion";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import {FollowRound} from "/src/components/FollowRound/FollowRound.jsx";
import {containerBackGround, textBackGround} from "/src/utils/backgroundTransition.js";
import Container from "/src/components/Container/Container.jsx";
import Menu from "/src/components/Menu/Menu.jsx";
import "./project.css"
import {Description} from "/src/components/Description/Description.jsx";
import {menuItems} from "/src/components/Menu/ProjectMenuItems.js";
import {Bubble} from "/src/components/Bubble/Bubble.jsx";

const Project = () => {
    const [currentDescription, updateCurrentDescription] = useState(
        {
            textDescription : "",
            image : ""
        }
    )
    return (
            <FollowRound>
                <Navbar/>
                <motion.section
                    initial="initial"
                    animate="animate"

                    variants={containerBackGround}
                >
                    <motion.div
                        variants={textBackGround}
                        className="projectBackground">Projects
                    </motion.div>
                </motion.section>
                <Container>
                    <Menu menuItems={menuItems} currentDescription={currentDescription} updateCurrentDescription={updateCurrentDescription}/>
                    <Description currentDescription={currentDescription}/>
                </Container>
                <Bubble />
            </FollowRound>
    )
}

export { Project }